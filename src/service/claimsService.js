import { BASE_URL, BASE_URL_CLAIMS } from "../constant/common";

export const getClaims = async () => {
  const data = await (
    await fetch(`${BASE_URL}/claims-data`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
  ).json();

  return data;
};

export const getClaimsWithApiIntent = async (status = null) => {
  const url = new URL(BASE_URL_CLAIMS);

  if (status) {
    url.searchParams.append("claimStatus", status);
  }

  const data = await (
    await fetch(url.toString(), {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
  ).json();

  return data;
};
