import botImage from "../assets/botImage.webp";
import CardPage from "../page/CardPage";
import BackUI from "./BackUI";

const DashboardUI = ({
  handleSearch,
  handleClick,
  onBack,
  componentData,
  intentData,
  handleDefaultClick,
  hasSearched,
  inputValue,
}) => {
  return (
    <>
      <BackUI onBack={onBack} hasSearched={hasSearched} />
      <div
        className={`px-6 pt-6 lg:pt-4 pb-10 flex flex-col items-center ${hasSearched ? "gap-1.5" : "gap-20"}`}
      >
        <div className=" flex gap-2 items-center w-full max-w-2xl mt-10 lg:mt-0 ">
          <input
            type="text"
            name="ai-search"
            id="ai-search"
            placeholder="🔍Search Smart Searches"
            className="flex-1 h-10 shadow-level-2 p-2 border-default focus:outline-none"
            value={inputValue} //guard 3
            onChange={(e) => handleSearch(e.target.value)}
            autoComplete="off"
            required
          />
          <button
            onClick={() => handleClick()}
            className="shrink-0 bg-primary-600 text-white p-2 rounded-default lg:hover:brightness-125 lg:hover:text-white cursor-pointer"
          >
            Search
          </button>
        </div>

        {!hasSearched ? (
          <div className="w-[95vw] lg:w-[60vw]  lg:h-65 shadow-level-2">
            <div className="flex justify-center items-center mb-3">
              <div id="bot-img">
                <img src={botImage} alt="bot" className="w-40" />
              </div>
              <div>
                <h1 className="text-page-title font-semibold text-center text-gray-900 lg:whitespace-nowrap">
                  How can i help you today?
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center mb-8">
              <button
                onClick={() => handleDefaultClick("Show my denied Claims")}
                className="w-[90%] shadow-level-2 p-2 mb-2.5 rounded-default cursor-pointer hover:bg-primary-100 hover:text-primary-500"
              >
                🛄Show my denied Claims
              </button>
              <button
                onClick={() => handleDefaultClick("Cardiologist in Delhi")}
                className="w-[90%] shadow-level-2 p-2 rounded-default cursor-pointer hover:bg-primary-100 hover:text-primary-500"
              >
                🥼Cardiologist in Delhi
              </button>
            </div>
          </div>
        ) : (
          <CardPage componentData={componentData} intentData={intentData} />
        )}
      </div>
    </>
  );
};

export default DashboardUI;
