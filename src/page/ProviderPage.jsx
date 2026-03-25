import { useEffect, useState } from "react";
import ProviderUI from "../ui/ProviderUI";
import { getProviders } from "../service/providerService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import { NoData, ServiceFailure } from "../module/ErrorBoundary";
import { useFilteredData } from "../hooks/useFilteredData";
import { usePagination } from "../hooks/usePagination";

const ProviderPage = () => {
  const PAGE_SIZE = 5;
  const [componentData, setComponenetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeStatus, setActiveStatus] = useState("all");
  //custom hooks
  const updatedComponentData = useFilteredData(activeStatus, componentData);
  const { totalPages, start, end } = usePagination(
    updatedComponentData,
    currentPage,
    PAGE_SIZE,
  );

  const fetchComponentData = async () => {
    setIsLoading(true);
    try {
      const response = await getProviders();
      setComponenetData(response);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
      setHasFetched(true);
    }
  };
  const handleStatusActive = (e, currentStatus) => {
    e.preventDefault();
    setActiveStatus(currentStatus);
    setCurrentPage(0);
  };

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
        handleStatusActive={handleStatusActive}
        filteredData={updatedComponentData}
      />
    </main>
  );
};

export default ProviderPage;
