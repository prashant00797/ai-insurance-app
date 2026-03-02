import { useState } from "react";
import DashboardUI from "../ui/DashboardUI";
import { recentApprovedClaimsWithLimit } from "../jsons/aiResponsesClaims";
import { getClaimsWithApiIntent } from "../service/claimsService";

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [componentData, setComponentData] = useState([]);

  const handleSearchValue = (value) => {
    setInputValue(value);
  };

  const handleSearchClick = () => {
    setSearch(inputValue);
    callGemini(inputValue);
  };

  const handleApiSearchBasedOnIntent = async ({
    intent = "",
    filters = {},
    limit = null,
    sort = null,
  }) => {
    const { status } = filters;
    console.log(limit, intent);

    const response = await getClaimsWithApiIntent(status);

    console.log(response, "before sorting or limit");

    let finalData = [...response];

    if (sort === "recent") {
      finalData.sort(
        (a, b) =>
          new Date(a.date.split("-").reverse().join("-")) -
          new Date(b.date.split("-").reverse().join("-")),
      );
    } else if (sort === "oldest") {
      finalData.sort(
        (a, b) =>
          new Date(b.date.split("-").reverse().join("-")) -
          new Date(a.date.split("-").reverse().join("-")),
      );
    }

    if (limit !== null && limit <= finalData.length) {
      finalData = finalData.slice(0, limit);
    }

    setComponentData(finalData);
    console.log(finalData, "after sorting or limit");
  };

  //TODO - const api call for aiService
  const callGemini = (query) => {
    // const result = await interpretQuery(search);

    //TODO - WRITING DUMMY LOGIC FOR NOW
    console.log(query);

    handleApiSearchBasedOnIntent(recentApprovedClaimsWithLimit);
  };

  //here only useeffect api call will be made for aiService

  const onBack = () => {
    setSearch("");
  };

  return (
    <main
      className={`flex-1 mt-10  lg:pb-0 ${search.length !== 0 ? "overflow-y-auto" : "overflow-hidden"}`}
    >
      <DashboardUI
        search={search}
        handleSearch={handleSearchValue}
        handleClick={handleSearchClick}
        onBack={onBack}
        componentData={componentData}
      />
    </main>
  );
};

export default DashboardPage;
