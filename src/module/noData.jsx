import noData from "../assets/noData.webp";

const NoData = ({ type }) => {
  const message = {
    claims: "No claims has been filed yet.",
    providers: "No providers consulted.",
    unknown:
      "We couldn’t find any results based on your current filters.Try adjusting your search criteria.",
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh] text-center">
      <img src={noData} alt="No Data" className="w-200 lg:w-300 mb-8" />

      <h2 className="text-page-title font-semibold text-gray-800 mb-3">
        No matching records found
      </h2>

      <p className="text-page-title text-gray-500">{message[type]}</p>
    </div>
  );
};

export default NoData;
