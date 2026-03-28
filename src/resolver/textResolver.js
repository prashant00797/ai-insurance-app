export const textResolver = {
  amount: (value) => value.toLocaleString("en-IN"),
  claimStatus: (value) => value.charAt(0).toUpperCase() + value.slice(1),
};
