//all claims
export const allClaims = {
  intent: "get_claims",
  filters: {
    status: null,
  },
  limit: null,
  sort: null,
};

// Basic filter - show approved claims
export const approvedClaims = {
  intent: "get_claims",
  filters: {
    status: "approved",
  },
  limit: null,
  sort: null,
};

//With limit and sort - show my last 3 approved claims
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

//With limit and sort -  show my first 3 approved claims
export const oldestApprovedClaimsWithLimit = {
  intent: "get_claims",
  filters: {
    status: "approved",
  },
  limit: 3,
  sort: "oldest",
};

//With sort and limit - show my first denied claims
export const firstOldestDeniedClaims = {
  intent: "get_claims",
  filters: {
    status: "denied",
  },
  limit: 1,
  sort: "oldest",
};

//with sort - show my denied claims
export const oldestDeniedClaims = {
  intent: "get_claims",
  filters: {
    status: "denied",
  },
  limit: null,
  sort: null,
};

//Unsupported - what is my policy coverage
export const unsupportedQuery = {
  intent: "unknown",
};
