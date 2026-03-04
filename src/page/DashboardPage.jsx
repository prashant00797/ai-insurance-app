import { useState } from "react";
import DashboardUI from "../ui/DashboardUI";
import { approvedClaims } from "../jsons/aiResponsesClaims";
import { getClaimsWithApiIntent } from "../service/claimsService";
import { getProvidersWithIntent } from "../service/providerService";

("../jsons/aiResponsesProviders");
import { DashboardAiShimmer } from "../module/Shimmer";
import { useNavigate } from "react-router-dom";
import { ServiceFailure } from "../module/ErrorBoundary";

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

  const handleSearchValue = (value) => {
    setInputValue(value);
  };

  const handleSearchClick = () => {
    //guard 1 issue
    if (!inputValue.trim()) return;

    setHasSearched(true);
    setSearch(inputValue);

    //main ai api call
    callGemini(inputValue);
  };

  const handleApiSearchBasedOnIntent = async (aiData) => {
    setIsLoading(true);
    try {
      const { intent, filters } = aiData;
      console.log(intent, filters);

      let response;

      const noFilters = Object.values(filters).every((value) => value === null);

      if (intent === "get_claims") {
        if (noFilters) {
          navigate("/claims");
        } else {
          response = await getClaimsWithApiIntent(aiData);
        }
      }

      if (intent === "get_providers") {
        if (noFilters) {
          navigate("/provider");
        } else {
          response = await getProvidersWithIntent(aiData);
        }
      }

      setComponentData(response);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  //TODO - const api call for aiService
  const callGemini = (query) => {
    console.log(query, "DashboardPage");

    // const result = await interpretQuery(search);

    // we need to extract the intent obj and set it with a state variable and send it to handleApiSearchBasedOnIntent

    /* this result will be put into the below function 
    where i am passing static intent jsons
    */
    setIntentData(approvedClaims);
    handleApiSearchBasedOnIntent(approvedClaims);
  };

  const handleDefaultClick = (query) => {
    //guard 3
    setHasSearched(true);
    callGemini(query);
  };

  //back resetting state - guard two
  const onBack = () => {
    setSearch("");
    setInputValue("");
    setComponentData([]);
    setIntentData({});
    setHasSearched(false);
  };

  return (
    <main className="flex-1 lg:pb-0">
      {isLoading ? (
        <DashboardAiShimmer />
      ) : error ? (
        <ServiceFailure />
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
