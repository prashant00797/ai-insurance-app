import { useState } from "react";
import DashboardUI from "../ui/DashboardUI";
import { getClaimsWithApiIntent } from "../service/claimsService";
import { getProvidersWithIntent } from "../service/providerService";
import { DashboardAiShimmer } from "../module/Shimmer";
import { useNavigate } from "react-router-dom";
import { NoData, ServiceFailure } from "../module/ErrorBoundary";
import { getUserQuery } from "../service/aiService";

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [componentData, setComponentData] = useState([]);
  const [intentData, setIntentData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(false);

  //routing
  const navigate = useNavigate();

  //search functions below--->

  //input value typed in
  const handleSearchValue = (value) => {
    setInputValue(value);
  };

  //manual search
  const handleSearchClick = () => {
    //guard 1 issue
    if (!inputValue.trim()) return;

    setHasSearched(true);
    setSearch(inputValue);
    handleSearchFlow(inputValue);
  };

  //default search
  const handleDefaultClick = (query) => {
    //guard 3
    setHasSearched(true);
    setInputValue(query);
    setSearch(query);
    handleSearchFlow(query);
  };

  //main check to gemini api and based on intent getting send result to mockapi.io
  const handleSearchFlow = async (query) => {
    try {
      setIsLoading(true);

      //AI intent fetch
      const aiData = await getUserQuery(query);
      setIntentData(aiData);

      const { intent, filters } = aiData;

      const noFilters =
        !filters || Object.values(filters).every((v) => v === null);

      let response;

      //decide service call based on intent
      if (intent === "get_claims") {
        if (noFilters) {
          navigate("/claims");
          // guard check
          return;
        } else {
          response = await getClaimsWithApiIntent(aiData);
        }
      } else if (intent === "get_providers") {
        if (noFilters) {
          navigate("/provider");
          // guard check
          return;
        } else {
          response = await getProvidersWithIntent(aiData);
        }
      } else if (intent === "unknown") {
        setComponentData([]);
        return;
      }

      setComponentData(response);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  //back resetting state - guard two
  const onBack = () => {
    setSearch("");
    setInputValue("");
    setComponentData([]);
    setIntentData({});
    setHasSearched(false);
    setError(false);
  };

  return (
    <main className="flex-1 lg:pb-0">
      {isLoading ? (
        <DashboardAiShimmer />
      ) : error ? (
        <ServiceFailure onBack={onBack} hasSearched={hasSearched} />
      ) : hasSearched && !isLoading && componentData?.length === 0 ? (
        <NoData
          type={intentData.intent}
          onBack={onBack}
          hasSearched={hasSearched}
          search={search}
          intentData={intentData}
        />
      ) : (
        <DashboardUI
          search={search}
          handleSearch={handleSearchValue}
          handleClick={handleSearchClick}
          onBack={onBack}
          componentData={componentData}
          intentData={intentData}
          handleDefaultClick={handleDefaultClick}
          hasSearched={hasSearched}
          inputValue={inputValue}
        />
      )}
    </main>
  );
};

export default DashboardPage;
