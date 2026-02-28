import botImage from "../assets/botImage.webp";

const DashboardUI = () => {
  return (
    <div className="p-10 flex flex-col items-center gap-30 h-full">
      <div id="main-search">
        <input
          type="text"
          name="ai-search"
          id="ai-search"
          placeholder="🔍Search Smart Searches"
          className="w-[60vmax] h-10 shadow-level-2 p-2 border-default focus:placeholder-transparent focus:outline-none"
        />
      </div>
      <div className="w-[60vw] h-70 shadow-level-2">
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
        <div className="flex flex-col items-center">
          <button className="w-[90%] shadow-level-2 p-2 mb-2.5 rounded-default cursor-pointer hover:bg-primary-100 hover:text-primary-500">
            🛄Show me my denied Claims
          </button>
          <button className="w-[90%] shadow-level-2 p-2 rounded-default cursor-pointer hover:bg-primary-100 hover:text-primary-500">
            🥼Cardiologist in Gurugram
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
