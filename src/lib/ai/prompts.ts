// Shared system prompt + per-function prompt builders

export function buildSystemPrompt(compressedSKG: string): string {
  return `You are the intelligence engine for Live A Little, an app that helps humans experience life fully.

Core belief: "You only know about this life. Stop preparing for the next life. Experience life, encourage others to experience life."

Your role: You are a thoughtful, empathetic friend who knows this user's life situation and helps them prioritize and pursue meaningful experiences.

Personality principles:
- Always positive, never guilt-inducing
- Warm but honest — if something isn't realistic, say so gently
- Adapt tone to user's life stage
- Be concise — this is a card or notification, not an essay
- Respond ONLY with valid JSON — no markdown, no explanation

User situation:
${compressedSKG}`;
}

export function buildAnalyzePrompt(title: string): string {
  return `Analyze this bucket list item for the user and return JSON only.

Item: "${title}"

Return this exact JSON (no markdown, no explanation):
{
  "type": "travel|skill|experience|achievement|habit|relationship|other",
  "cost_estimate": "free|low|moderate|high|very_high",
  "effort_level": "minimal|low|moderate|high|sustained",
  "time_horizon": "immediate|short_term|long_term",
  "best_season": "spring|summer|autumn|winter|any",
  "age_window_min": <number 1-100>,
  "age_window_max": <number 1-100>,
  "constraints": ["string"],
  "doability_score": <0-100>,
  "ai_reasoning": "<1-2 sentences: why this score for this specific person>"
}

Doability score: how achievable is this for THIS person RIGHT NOW given their life situation. 100 = do it today. 0 = essentially impossible for them currently.`;
}

export function buildBatchRerankPrompt(
  items: { id: string; title: string }[]
): string {
  const itemList = items.map((i) => `- id:"${i.id}" title:"${i.title}"`).join("\n");

  return `Re-score these bucket list items for the user. Consider their complete life situation.

Items:
${itemList}

Return a JSON array only (no markdown, no explanation):
[{"item_id":"<id>","doability_score":<0-100>,"ai_reasoning":"<brief reason specific to this person>"}]

Score each item's doability for THIS person RIGHT NOW. 100 = do it today. 0 = not feasible currently.`;
}

export function buildNudgePrompt(
  items: { id: string; title: string; doabilityScore: number | null }[]
): string {
  const itemList = items
    .slice(0, 5)
    .map((i) => `- id:"${i.id}" "${i.title}" (score: ${i.doabilityScore ?? "?"}%)`)
    .join("\n");

  return `Choose the single best item to nudge this user about right now. Write a brief, warm, human nudge.

Top items by doability:
${itemList}

Return JSON only:
{
  "item_id": "<id>",
  "nudge_text": "<2-3 sentences: hook + why now + gentle action invite. Never guilt. Reads like a message from a friend.>",
  "nudge_tone": "warm|direct|playful|reflective"
}

Pick the item that feels most timely, achievable, and meaningful for this person right now.`;
}

export function buildSurpriseMePrompt(
  items: { id: string; title: string }[],
  mood?: string | null
): string {
  // Shuffle for genuine variety
  const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0, 15);
  const itemList = shuffled.map((i) => `- id:"${i.id}" "${i.title}"`).join("\n");

  const moodLine = mood ? `\nUser's current mood/energy: ${mood}` : "";

  return `Pick ONE item from this list for a spontaneous "do this now" moment. Make it feel exciting and achievable.
${moodLine}

Items:
${itemList}

Return JSON only:
{
  "item_id": "<id>",
  "pitch_text": "<2-3 punchy sentences. Why this item. Why right now. Zero hesitation energy. Reads like a dare from a good friend.>"
}

Pick something that would genuinely surprise and delight this person. Don't always pick the highest-scored item.`;
}

export function buildSurpriseThreePrompt(
  items: { id: string; title: string }[]
): string {
  const shuffled = [...items].sort(() => Math.random() - 0.5).slice(0, 20);
  const itemList = shuffled.map((i) => `- id:"${i.id}" "${i.title}"`).join("\n");

  return `Pick 3 DIFFERENT items from this list for three time horizons. Each should feel exciting and right-sized for its window.

Items:
${itemList}

Time horizons:
- "today": do it TODAY or this weekend — spontaneous, low-effort, no planning needed
- "this_week": plan and do it THIS WEEK — some prep, still totally doable
- "this_month": commit to it THIS MONTH — needs planning, maybe a trip or bigger experience

Return JSON only (no markdown):
{
  "today": { "item_id": "<id>", "pitch_text": "<2-3 punchy sentences. Why today? Zero hesitation.>" },
  "this_week": { "item_id": "<id>", "pitch_text": "<2-3 sentences. Why this week? Build some anticipation.>" },
  "this_month": { "item_id": "<id>", "pitch_text": "<2-3 sentences. Why this month? Paint a vivid picture.>" }
}

CRITICAL: Use 3 DIFFERENT item_ids. Match effort level to the time horizon — don't pick a world trip for "today".`;
}

export function buildQuestionPrompt(fieldKey: string, questionText: string): string {
  return `Generate a conversational, warm version of this question for the user.

Field: ${fieldKey}
Base question: ${questionText}

Return JSON only:
{
  "question_text": "<a warm, casual version — feels like a friend asking, not a form>"
}`;
}
