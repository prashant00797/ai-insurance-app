import botImage from "../assets/botImage.webp";
import CardPage from "../page/CardPage";
import BackUI from "./BackUI";

const DashboardUI = ({ search, handleSearch, handleClick, onBack }) => {
  return (
    <>
      <BackUI search={search} onBack={onBack} />
      <div
        className={`p-10 flex flex-col items-center ${search ? "gap-1.5" : "gap-30"}`}
      >
        <div className="flex gap-1.5 items-center mt-3 lg:mt-0">
          <div id="main-search">
            <input
              type="text"
              name="ai-search"
              id="ai-search"
              placeholder="🔍Search Smart Searches"
              className="w-[40vmax] lg:w-[55vmax] h-10 shadow-level-2 p-2 border-default focus:placeholder-transparent focus:outline-none"
              // value={search}
              onChange={(e) => handleSearch(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button
            onClick={() => handleClick()}
            className=" text-gray-900 rounded-default hover:brightness-125 hover:text-white cursor-pointer"
          >
            🔎
          </button>
        </div>

        {search.length === 0 ? (
          <div className="w-[60vw]  lg:h-65 shadow-level-2">
            <div className="flex items-center mb-3">
              <div id="bot-img">
                <img src={botImage} alt="bot" className="w-40" />
              </div>
              <div>
                <h1 className="text-page-title font-semibold text-gray-900">
                  How can i help you today?
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center mb-8">
              <button
                onClick={() => handleClick()}
                className="w-[90%] shadow-level-2 p-2 mb-2.5 rounded-default cursor-pointer hover:bg-primary-100 hover:text-primary-500"
              >
                🛄Show me my denied Claims
              </button>
              <button
                onClick={() => handleClick()}
                className="w-[90%] shadow-level-2 p-2 rounded-default cursor-pointer hover:bg-primary-100 hover:text-primary-500"
              >
                🥼Cardiologist in Gurugram
              </button>
            </div>
          </div>
        ) : (
          <CardPage />
        )}
      </div>
    </>
  );
};

export default DashboardUI;
