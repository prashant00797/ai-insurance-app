import { useEffect, useState } from "react";
import ClaimsUI from "../ui/ClaimsUI";
import { getClaims } from "../service/claimsService";
import { ClaimProviderPageShimmer } from "../module/Shimmer";
import { NoData, ServiceFailure } from "../module/ErrorBoundary";

const ClaimsPage = () => {
  const [componentData, setComponentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 5;

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
      />
    </main>
  );
};

export default ClaimsPage;
