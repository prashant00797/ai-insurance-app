import { useState } from "react";
import DashboardUI from "../ui/DashboardUI";

const DashboardPage = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearchValue = (value) => {
    setInputValue(value);
  };

  const handleSearchClick = () => {
    setSearch(inputValue);
    console.log(search);
  };

  const onBack = () => {
    setSearch("");
  };

  return (
    <main className="flex-1 h-full overflow-hidden ">
      <DashboardUI
        search={search}
        handleSearch={handleSearchValue}
        handleClick={handleSearchClick}
        onBack={onBack}
      />
    </main>
  );
};

export default DashboardPage;
