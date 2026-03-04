import { useEffect, useState } from "react";
import ProviderUI from "../ui/ProviderUI";
import { getProviders } from "../service/providerService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import { NoData, ServiceFailure } from "../module/ErrorBoundary";

const ProviderPage = () => {
  const [componentData, setComponenetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchComponentData = async () => {
    try {
      setIsLoading(true);
      const response = await getProviders();

      setComponenetData(response);
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
    <NoData type="providers" />
  ) : (
    <main className="flex-1  mt-10 pb-1=24 lg:pb-0">
      <ProviderUI componentData={componentData} />
    </main>
  );
};

export default ProviderPage;
