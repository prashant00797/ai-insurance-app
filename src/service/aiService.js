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

Supported intents:
- get_claims
- get_providers

If the user asks about claims, return JSON in this exact format:
{
  "intent": "get_claims",
  "filters": {
    "status": "approved" | "pending" | "denied" | null
  },
  "limit": number | null,
  "sort": "recent" | "oldest" | null
}

If the user asks about providers, return JSON in this exact format:
{
  "intent": "get_providers",
  "filters": {
    "speciality":
      "cardiologist" |
      "dermatologist" |
      "dentist" |
      "orthopedic" |
      "general physician" |
      "neurologist" |
      "pediatrician" |
      "gynecologist" |
      "ophthalmologist" |
      "ent specialist" |
      "medicine" |
      null,
    "location":
      "Delhi" |
      "Mumbai" |
      "Bangalore" |
      "Hyderabad" |
      "Chennai" |
      "Kolkata" |
      "Pune" |
      "Gurugram" |
      null,
    "providerStatus": "in-network" | "out-network" | null
  },
  "limit": number | null
}

If the user mentions a speciality or location not in the supported list, return:
{
  "intent": "unknown"
}

If the request is unsupported, return:
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
