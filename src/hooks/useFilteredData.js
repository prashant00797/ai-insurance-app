import { useMemo } from "react";

export const useFilteredData = (activeStatus, componentData) => {
  return useMemo(() => {
    //guard check
    if (!componentData) {
      return [];
    }

    return activeStatus === "all"
      ? componentData
      : componentData.filter(
          (item) => (item.claimStatus || item.providerStatus) === activeStatus,
        );
  }, [activeStatus, componentData]);
};
