// Base - “Show providers”

export const showProviders = {
  intent: "get_providers",
  filters: {
    speciality: null,
    location: null,
    providerStatus: null,
  },
  limit: null,
};

// Speciality - “Show cardiologists near me”
export const showSpecialityOnly = {
  intent: "get_providers",
  filters: {
    speciality: "cardiologist",
    location: null,
    providerStatus: null,
  },
  limit: null,
};

// Location - “Show providers in Delhi”

export const showWithRespectToLocation = {
  intent: "get_providers",
  filters: {
    speciality: null,
    location: "Delhi",
    providerStatus: null,
  },
  limit: null,
};

// In-Network or Out-Network - “Show in-network providers”

export const showProviderStatus = {
  intent: "get_providers",
  filters: {
    speciality: null,
    location: null,
    providerStatus: "in-network",
  },
  limit: null,
};

//  Limit - “Show top 3 providers”

export const limitProviders = {
  intent: "get_providers",
  filters: {
    speciality: null,
    location: null,
    providerStatus: null,
  },
  limit: 3,
};

//  Limit - “Show top 3 providers” - todo

export const limitWithSpeciality = {};

//Unsupported - “Book appointment with dentist” - todo
export const unsupportedQuery = {};
