import { BASE_URL } from "../constant/common";

export const getClaims = async () => {
  const data = await (
    await fetch(`${BASE_URL}/claims-data`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
  ).json();

  return data;
};
