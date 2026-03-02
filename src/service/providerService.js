import { BASE_URL, BASE_URL_PROVIDERS } from "../constant/common";

export const getProviders = async () => {
  const data = await (
    await fetch(`${BASE_URL}/providers-data`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
  ).json();

  return data;
};

export const getProvidersWithIntent = async ({
  filters = {},
  limit = null,
}) => {
  const { speciality, location, providerStatus } = filters;
  const url = new URL(BASE_URL_PROVIDERS);
  if (speciality) {
    url.searchParams.append("speciality", speciality);
  }
  if (location) {
    url.searchParams.append("location", location);
  }
  if (providerStatus) {
    url.searchParams.append("providerStatus", providerStatus);
  }

  const data = await (
    await fetch(url.toString(), {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
  ).json();

  let finalData = [...data];

  if (limit !== null && limit <= finalData.length) {
    finalData = finalData.slice(0, limit);
  }

  return finalData;
};
