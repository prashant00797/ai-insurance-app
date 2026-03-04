import { useEffect, useState } from "react";
import ProviderUI from "../ui/ProviderUI";
import { getProviders } from "../service/providerService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import { NoData } from "../module/ErrorBoundary";

const ProviderPage = () => {
  const [componentData, setComponenetData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComponentData = async () => {
    try {
      setIsLoading(true);
      const response = await getProviders();

      setComponenetData(response);
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
    <NoData type="providers" />
  ) : (
    <main className="flex-1  mt-10 pb-1=24 lg:pb-0">
      <ProviderUI componentData={componentData} />
    </main>
  );
};

export default ProviderPage;
