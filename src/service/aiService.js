export const getUserQuery = async (userQuery) => {
  const response = await fetch("/.netlify/functions/claims-provider", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userQuery }),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.json();
  return data;
};
