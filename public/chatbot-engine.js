/**
 * chatbot-engine.js
 * Lightweight keyword/intent-matching engine for byzahin.com's FAQ chatbot.
 * No external AI API required — everything runs client-side against knowledge-base.json.
 */

export class ChatbotEngine {
  constructor(knowledgeBase) {
    this.kb = knowledgeBase;
    this.settings = knowledgeBase.settings || { matchThreshold: 0.35, fallbackIntentId: "fallback" };
    this.intents = knowledgeBase.intents || [];
    this.history = [];
  }

  _normalize(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  _scoreIntent(userText, intent) {
    if (!intent.keywords || intent.keywords.length === 0) return 0;

    const normalizedUser = ` ${userText} `;
    const userWords = userText.split(" ").filter(Boolean);
    let matchedScore = 0;
    let matchesCount = 0;

    for (const rawKeyword of intent.keywords) {
      const keyword = this._normalize(rawKeyword);
      if (!keyword) continue;

      // Exact phrase match gets top score
      if (userText === keyword || normalizedUser.includes(` ${keyword} `)) {
        const phraseBonus = keyword.includes(" ") ? 3.0 : 2.0;
        matchedScore += phraseBonus;
        matchesCount++;
      } else if (normalizedUser.includes(keyword)) {
        matchedScore += 1.0;
        matchesCount++;
      } else {
        // Simple plural/singular stemming check (e.g. work vs works, project vs projects)
        const stemUser = normalizedUser.replace(/s\b/g, "");
        const stemKeyword = keyword.replace(/s\b/g, "");
        if (stemUser.includes(stemKeyword)) {
          matchedScore += 1.5;
          matchesCount++;
        }
      }
    }

    if (matchesCount === 0) return 0;

    const userCoverage = matchedScore / Math.max(1, userWords.length);
    const keywordRatio = matchedScore / intent.keywords.length;

    return Math.max(userCoverage, keywordRatio * 2, matchesCount >= 1 ? 0.4 : 0);
  }

  /**
   * Returns the best-matching intent for a given user message.
   */
  match(userMessage) {
    const normalized = this._normalize(userMessage);

    let best = null;
    let bestScore = 0;

    for (const intent of this.intents) {
      if (intent.id === this.settings.fallbackIntentId) continue;
      const score = this._scoreIntent(normalized, intent);
      if (score > bestScore) {
        bestScore = score;
        best = intent;
      }
    }

    if (!best || bestScore < (this.settings.matchThreshold || 0.35)) {
      return this.intents.find((i) => i.id === this.settings.fallbackIntentId) || null;
    }

    return best;
  }

  /**
   * Main entry point: ask the bot a question, get a structured reply back.
   */
  ask(userMessage) {
    const intent = this.match(userMessage);

    const result = {
      matchedIntentId: intent ? intent.id : null,
      answer: intent ? intent.answer : "Sorry, something went wrong.",
      quickReplies: intent && intent.quickReplies ? intent.quickReplies.slice(0, this.settings.maxQuickReplies || 4) : [],
      category: intent ? intent.category : null,
    };

    this.history.push({ role: "user", text: userMessage, timestamp: Date.now() });
    this.history.push({ role: "bot", text: result.answer, intentId: result.matchedIntentId, timestamp: Date.now() });

    return result;
  }

  /**
   * Deterministic lookup used for quick-reply buttons: skips keyword matching
   * entirely and jumps straight to the intent the button is tagged with.
   */
  askByIntentId(intentId) {
    const intent = this.intents.find((i) => i.id === intentId);

    const result = {
      matchedIntentId: intent ? intent.id : null,
      answer: intent ? intent.answer : "Sorry, I couldn't find that.",
      quickReplies: intent && intent.quickReplies ? intent.quickReplies.slice(0, this.settings.maxQuickReplies || 4) : [],
      category: intent ? intent.category : null,
    };

    this.history.push({ role: "bot", text: result.answer, intentId: result.matchedIntentId, timestamp: Date.now() });

    return result;
  }

  getHistory() {
    return this.history;
  }
}

export async function loadKnowledgeBase(url = "./knowledge-base.json") {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to load knowledge base: ${response.status}`);
  return response.json();
}
