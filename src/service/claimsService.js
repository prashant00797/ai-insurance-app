import { BASE_URL_CLAIMS } from "../constant/common";

export const getClaims = async () => {
  const data = await fetch(`${BASE_URL_CLAIMS}`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (!data.ok) {
    throw new Error(data.status);
  }

  return data.json();
};

export const getClaimsWithApiIntent = async ({
  filters = {},
  limit = null,
  sort = null,
}) => {
  const { status } = filters;
  const url = new URL(BASE_URL_CLAIMS);

  if (status) {
    url.searchParams.append("claimStatus", status);
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (response.status === "404") {
    return [];
  }

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  let finalData = [...data];

  if (sort === "recent") {
    finalData.sort(
      (a, b) =>
        new Date(a.date.split("-").reverse().join("-")) -
        new Date(b.date.split("-").reverse().join("-")),
    );
  } else if (sort === "oldest") {
    finalData.sort(
      (a, b) =>
        new Date(b.date.split("-").reverse().join("-")) -
        new Date(a.date.split("-").reverse().join("-")),
    );
  }

  if (limit !== null && limit <= finalData.length) {
    finalData = finalData.slice(0, limit);
  }

  return finalData;
};
