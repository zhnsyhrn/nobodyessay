# byzahin.com Chatbot — Knowledge Base & Engine

Three files, no backend or AI API required:

- **`knowledge-base.json`** — the "database." An array of intents (topics), each with `keywords` (what triggers it), an `answer`, and optional `quickReplies` (follow-up buttons).
- **`chatbot-engine.js`** — a small vanilla-JS matcher that scores user input against `keywords` and returns the best-matching intent's answer. No dependencies.
- **`demo.html`** — a standalone page to test it in a browser before wiring into the real site.

## Test it locally
Any static server works (module imports need http://, not file://):
```
npx serve .
```
Open the printed localhost URL.

## Wiring into byzahin.com via Antigravity
1. Drop `knowledge-base.json` and `chatbot-engine.js` into your site's `public/` or `src/` folder.
2. Build a small chat widget component (React/vanilla, whatever your site uses) that:
   - On load: `const kb = await loadKnowledgeBase("/knowledge-base.json")`
   - Instantiate once: `const bot = new ChatbotEngine(kb)`
   - On each user message: `const { answer, quickReplies } = bot.ask(userMessage)`
   - Render `answer` as a bot bubble and `quickReplies` as clickable buttons.
3. Style it as a floating chat bubble (fixed bottom-right) — ask Antigravity to scaffold that shell around the logic above; the logic itself is already done.

## Editing content (this is the part you'll do most)
Open `knowledge-base.json` and edit `answer` fields directly — no code changes needed. Several entries are marked `[Fill in: ...]` for things only you know (notice period, exact rates, live links, resume URL, remote-work preference). Fill those in before shipping.

To add a new topic: copy any intent object, give it a unique `id`, add relevant `keywords`, write the `answer`. That's it — the engine picks it up automatically.

## Tuning match sensitivity
`settings.matchThreshold` in the JSON (default `0.35`) controls how confident the engine must be before answering instead of falling back. Lower it if the bot is missing things it should catch; raise it if it's answering questions with the wrong intent.

## Quick replies are now deterministic
`quickReplies` in `knowledge-base.json` are objects, not plain strings:
```json
"quickReplies": [
  { "label": "See his work", "intentId": "portfolio_projects" }
]
```
When a user **types** a message, it still goes through `bot.ask(text)` (keyword matching — can miss if wording doesn't match any `keywords`).

When a user **clicks a quick-reply button**, call `bot.askByIntentId(quickReply.intentId)` instead — this skips matching entirely and jumps straight to the correct intent every time. That's what fixed the "I don't have an answer for that yet" issue on button clicks.

```javascript
// typed input
const result = bot.ask(userMessage);

// quick-reply button click
const result = bot.askByIntentId(quickReply.intentId);

// both return the same shape: { answer, quickReplies, matchedIntentId, category }
// render result.quickReplies as buttons using .label for text and .intentId for the next click
```

If you add new quick replies to any intent, make sure `intentId` matches a real `id` elsewhere in the file — a quick sanity check:
```bash
python3 -c "
import json
kb = json.load(open('knowledge-base.json'))
ids = {i['id'] for i in kb['intents']}
for i in kb['intents']:
    for qr in i.get('quickReplies', []):
        assert qr['intentId'] in ids, f'Bad ref: {qr}'
print('all good')
"
```

## Optional upgrade path
If you later want it to handle open-ended questions (not just FAQ-style), swap `chatbot-engine.js`'s matching logic for a call to an LLM API, passing the same `knowledge-base.json` content as context/system prompt instead of keyword-matching against it. The JSON structure works for both approaches, so you won't need to redo the content.
