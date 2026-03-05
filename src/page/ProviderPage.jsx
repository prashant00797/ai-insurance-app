import { useEffect, useState } from "react";
import ProviderUI from "../ui/ProviderUI";
import { getProviders } from "../service/providerService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import { NoData, ServiceFailure } from "../module/ErrorBoundary";

const ProviderPage = () => {
  const [componentData, setComponenetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 5;

  const fetchComponentData = async () => {
    try {
      setIsLoading(true);
      const response = await getProviders();

      setComponenetData(response);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
      setHasFetched(true);
    }
  };

  const totalData = componentData.length;
  const totalPages = Math.ceil(totalData / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePagination = (n) => {
    setCurrentPage(n);
  };

  useEffect(() => {
    fetchComponentData();
  }, []);

  return isLoading ? (
    <ClaimProviderPageShimmer />
  ) : error ? (
    <ServiceFailure />
  ) : hasFetched && componentData?.length === 0 ? (
    <NoData type="providers" />
  ) : (
    <main className="flex-1 pb-24 lg:pb-0 ">
      <ProviderUI
        componentData={componentData}
        start={start}
        end={end}
        handlePagination={handlePagination}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default ProviderPage;
