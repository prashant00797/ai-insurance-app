import Banner from "../module/Banner";
import { NotFoundUI } from "../module/ErrorBoundary";

const CardPageUI = ({ componentData, intentData }) => {
  //styles
  const statusStyles = {
    approved: "bg-green-100 text-success",
    "In-network": "bg-green-100 text-success",
    "Out-network": "bg-red-100 text-danger",
    pending: "bg-yellow-100 text-warning",
    denied: "bg-red-100 text-danger",
  };

  let header = "";
  if (intentData === "get_claims") {
    header = `Claims ID: `;
  } else if (intentData === "get_providers") {
    header = `Provider Name: `;
  }

  return (
    <div className="flex flex-col items-center lg: flex-none ">
      {intentData?.intent === "unknown" ? (
        <NotFoundUI />
      ) : (
        <>
          <Banner componentData={componentData} intentData={intentData} />

          {/* Card Start - not creating a separate module but it should be */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full p-2 max-h-75 overflow-y-scroll [scrollbar-width:none] lg:[scrollbar-width:auto] pb-7.5 lg:max-h-120 ">
            {/* guard check ? */}
            {componentData?.map((item) => {
              return (
                <div key={item.id} className="shadow-level-2 w-full">
                  <div className="flex justify-between p-2 ">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-gray-900 text-card-title">
                        {`${header}${item.claimId || item.providerName}`}
                      </h3>
                      <p className="text-gray-500 text-body">
                        {intentData === "get_claims"
                          ? item.providerName
                          : item.speciality}
                      </p>
                      <p className="text-gray-400 text-body">{`${intentData === "get_claims" ? "Filed on: " : ""} ${item.date || item.location}`}</p>
                    </div>
                    <div
                      className={`inline-flex items-center h-8 px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[item.claimStatus || item.providerStatus]}`}
                    >
                      {item.claimStatus || item.providerStatus}
                    </div>
                  </div>
                  <div className="bg-gray-100 text-right p-1">
                    <button className="bg-primary-500 text-white p-1 rounded-default hover:brightness-110 cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Card end */}
        </>
      )}
    </div>
  );
};

export default CardPageUI;
