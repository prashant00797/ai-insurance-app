import { useEffect, useState } from "react";
import ClaimsUI from "../ui/ClaimsUI";
import { getClaims } from "../service/claimsService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import { NoData, ServiceFailure } from "../module/ErrorBoundary";

const ClaimsPage = () => {
  const [componentData, setComponentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchComponentData = async () => {
    setIsLoading(true);

    try {
      const response = await getClaims();
      setComponentData(response);
      console.log(response);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComponentData();
  }, []);

  return isLoading ? (
    <ClaimProviderPageShimmer />
  ) : error ? (
    <ServiceFailure />
  ) : componentData.length === 0 ? (
    <NoData type="claims" />
  ) : (
    <main className="flex-1  mt-10  pb-24 lg:pb-0">
      <ClaimsUI componentData={componentData} />
    </main>
  );
};

export default ClaimsPage;
