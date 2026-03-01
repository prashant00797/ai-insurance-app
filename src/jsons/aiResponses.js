// Basic filter - show approved claims
export const approvedClaims = {
  intent: "get_claims",
  filters: {
    status: "approved",
  },
  limit: null,
  sort: null,
};

//With limit - show my last 3 approved claims
export const recentApprovedClaimsWithLimit = {
  intent: "get_claims",
  filters: {
    status: "approved",
  },
  limit: 3,
  sort: "recent",
};

//With sort - show recent denied claims
export const recentDeniedClaims = {
  intent: "get_claims",
  filters: {
    status: "denied",
  },
  limit: null,
  sort: "recent",
};

//No filter - show my claims
export const showClaims = {
  intent: "get_claims",
  filters: {
    status: null,
  },
  limit: null,
  sort: null,
};

//Unsupported - what is my policy coverage
export const unsupportedQuery = {
  intent: "unknown",
};
