import { useEffect, useState } from "react";
import ClaimsUI from "../ui/ClaimsUI";
import { getClaims } from "../service/claimsService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import NoData from "../module/noData";

const ClaimsPage = () => {
  const [componentData, setComponentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComponentData = async () => {
    setIsLoading(true);

    try {
      const response = await getClaims();
      setComponentData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComponentData();
  }, []);

  return isLoading ? (
    <ClaimProviderPageShimmer />
  ) : componentData === null ? null : componentData.length === 0 ? (
    <NoData type="claims" />
  ) : (
    <main className="flex-1  mt-10  pb-24 lg:pb-0">
      <ClaimsUI componentData={componentData} />
    </main>
  );
};

export default ClaimsPage;
