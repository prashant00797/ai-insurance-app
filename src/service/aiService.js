import { GEMINI_KEY } from "../constant/common";

export const getUserQuery = async (userQuery) => {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
You are an AI assistant for an insurance portal.

Supported intent:
- get_claims

If the user asks about claims, return JSON in this exact format:
{
  "intent": "get_claims",
  "filters": {
    "status": "approved" | "pending" | "denied" | null
  },
  "limit": number | null,
  "sort": "recent" | oldest | null
}

If unsupported, return:
{
  "intent": "unknown"
}

Return ONLY valid JSON. No explanation.

User query:
"${userQuery}"
`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0,
        },
      }),
    },
  );

  const data = await response.json();

  const originalText = data.candidates?.[0]?.content?.parts?.[0]?.text;

  const cleanedIntentObj = originalText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedIntentObj);
};
