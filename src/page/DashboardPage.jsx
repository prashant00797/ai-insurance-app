import { useState } from "react";
import DashboardUI from "../ui/DashboardUI";
import {
  allClaims,
  approvedClaims,
  recentApprovedClaimsWithLimit,
} from "../jsons/aiResponsesClaims";
import { getClaimsWithApiIntent } from "../service/claimsService";
import { getProvidersWithIntent } from "../service/providerService";
import {
  allProviders,
  limitWithSpecialityStatusLocation,
  // limitProviders,
  unsupportedQuery,
} from "../jsons/aiResponsesProviders";
import { DashboardAiShimmer } from "../module/Shimmer";
import { Navigate, useNavigate } from "react-router";

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [componentData, setComponentData] = useState([]);
  const [intentData, setIntentData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

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

      intent === "get_claims" &&
      Object.values(filters).every((value) => value === null)
        ? navigate("/claims")
        : (response = await getClaimsWithApiIntent(aiData));

      intent === "get_providers" &&
      Object.values(filters).every((value) => value === null)
        ? navigate("/provider")
        : (response = await getProvidersWithIntent(aiData));

      setComponentData(response);
    } catch (error) {
      console.error(error);
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
    setIntentData(allClaims);
    handleApiSearchBasedOnIntent(allClaims);
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
