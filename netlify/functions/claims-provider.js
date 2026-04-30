/* eslint-disable no-undef */
export const handler = async (event) => {
  const { userQuery } = JSON.parse(event.body);

  const prompt = ` 
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
        "providerStatus": "In-network" | "Out-network" | null
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
    "${userQuery}"`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY?.trim()}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      response_format: { type: "json_object" },
    }),
  });

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content;
  console.log(result);

  if (!result) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed", details: data }),
    };
  }

  return {
    statusCode: 200,
    body: result,
  };
};
