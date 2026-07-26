/**
 * chatbot-engine.js
 * Lightweight keyword/intent-matching engine for byzahin.com's FAQ chatbot.
 * No external AI API required — everything runs client-side against knowledge-base.json.
 *
 * USAGE
 * -----
 * import { ChatbotEngine } from "./chatbot-engine.js";
 *
 * const bot = new ChatbotEngine(knowledgeBaseJson); // pass the parsed JSON
 * const { answer, quickReplies, matchedIntentId } = bot.ask("what services do you offer?");
 *
 * HOW MATCHING WORKS
 * -------------------
 * 1. User input is lowercased and split into words.
 * 2. For each intent, we score = (number of matched keywords) / (number of keywords),
 *    with a bonus for exact-phrase matches (e.g. "notice period" matching as a whole phrase
 *    beats matching "notice" and "period" separately elsewhere).
 * 3. Highest-scoring intent above `settings.matchThreshold` wins.
 * 4. If nothing clears the threshold, the `fallbackIntentId` intent is returned.
 *
 * This is intentionally simple (no embeddings, no external calls) so it's fast, free,
 * and easy to extend — just add more objects to the "intents" array in knowledge-base.json.
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

    let score = 0;
    const normalizedUser = ` ${userText} `;

    for (const rawKeyword of intent.keywords) {
      const keyword = this._normalize(rawKeyword);
      if (!keyword) continue;

      // Whole-phrase match (e.g. "notice period") scores higher than
      // just having the individual words appear separately.
      if (normalizedUser.includes(` ${keyword} `) || normalizedUser.includes(keyword)) {
        const phraseBonus = keyword.includes(" ") ? 1.5 : 1;
        score += phraseBonus;
      }
    }

    return score / intent.keywords.length;
  }

  /**
   * Returns the best-matching intent for a given user message.
   */
  match(userMessage) {
    const normalized = this._normalize(userMessage);

    let best = null;
    let bestScore = 0;

    for (const intent of this.intents) {
      if (intent.id === this.settings.fallbackIntentId) continue; // never auto-match fallback
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
   * Use this for quickReplies (each is { label, intentId }), and use
   * `ask()` only for free-typed user input.
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

/**
 * Convenience loader if you want to fetch the JSON file at runtime
 * instead of bundling/importing it directly.
 */
export async function loadKnowledgeBase(url = "./knowledge-base.json") {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to load knowledge base: ${response.status}`);
  return response.json();
}
