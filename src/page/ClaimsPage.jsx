import { useEffect, useState } from "react";
import ClaimsUI from "../ui/ClaimsUI";
import { getClaims } from "../service/claimsService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import { NoData, ServiceFailure } from "../module/ErrorBoundary";
import { useFilteredData } from "../hooks/useFilteredData";
import { usePagination } from "../hooks/usePagination";

const ClaimsPage = () => {
  const PAGE_SIZE = 5;
  const [componentData, setComponentData] = useState([]);
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
      const response = await getClaims();
      setComponentData(response);
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
    <NoData type="claims" />
  ) : (
    <main className="flex-1 pb-24 lg:pb-0">
      <ClaimsUI
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

export default ClaimsPage;
