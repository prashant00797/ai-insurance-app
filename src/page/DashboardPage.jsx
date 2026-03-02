import { useState } from "react";
import DashboardUI from "../ui/DashboardUI";
// import { recentApprovedClaimsWithLimit } from "../jsons/aiResponsesClaims";
import { getClaimsWithApiIntent } from "../service/claimsService";
import { getProvidersWithIntent } from "../service/providerService";
import { limitProviders } from "../jsons/aiResponsesProviders";

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [componentData, setComponentData] = useState([]);
  const [intentData, setIntentData] = useState({});

  const handleSearchValue = (value) => {
    setInputValue(value);
  };

  const handleSearchClick = () => {
    setSearch(inputValue);

    //main ai api call
    callGemini(inputValue);
  };

  const handleApiSearchBasedOnIntent = async (aiData) => {
    const intent = aiData.intent;
    let response;

    if (intent === "get_claims") {
      response = await getClaimsWithApiIntent(aiData);
    } else if (intent === "get_providers") {
      response = await getProvidersWithIntent(aiData);
    }

    setComponentData(response);
  };

  //TODO - const api call for aiService
  const callGemini = (/*query*/) => {
    // console.log(query, "DashboardPage");

    // const result = await interpretQuery(search);

    // we need to extract the intent obj and set it with a state variable and send it to handleApiSearchBasedOnIntent

    /* this result will be put into the below function 
    where i am passing static intent jsons
    */
    setIntentData(limitProviders);
    handleApiSearchBasedOnIntent(limitProviders);
  };

  //back resetting state
  const onBack = () => {
    setSearch("");
  };

  return (
    <main
      className={`flex-1 mt-10  lg:pb-0 ${search.length !== 0 ? "overflow-y-auto" : "overflow-hidden"}`}
    >
      {intentData.intent === "unknown" ? (
        <div>...oops unknown query🚀🚀</div>
      ) : (
        <DashboardUI
          search={search}
          handleSearch={handleSearchValue}
          handleClick={handleSearchClick}
          onBack={onBack}
          componentData={componentData}
          intentData={intentData}
        />
      )}
    </main>
  );
};

export default DashboardPage;
