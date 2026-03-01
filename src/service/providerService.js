import { BASE_URL } from "../constant/common";

export const getProviders = async () => {
  const data = await (
    await fetch(`${BASE_URL}/providers-data`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
  ).json();

  return data;
};
