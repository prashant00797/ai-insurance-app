import Banner from "../module/Banner";

const CardPageUI = ({ componentData }) => {
  const statusStyles = {
    approved: "bg-green-100 text-success",
    pending: "bg-yellow-100 text-warning",
    denied: "bg-red-100 text-danger",
  };
  return (
    <div className="flex flex-col items-center lg: flex-none  p-7">
      {/* Banner Start - this will be a module later on */}
      <Banner componentData={componentData} />
      {/* Banner end */}
      {/* Card Start -  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full p-2">
        {componentData.map((item) => {
          return (
            <div className="shadow-level-2 w-full lg:w-[30vmax]">
              <div className="flex justify-between p-2 ">
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-900 text-card-title">
                    {`Claim ID : ${item.claimId}`}
                  </h3>
                  <p className="text-gray-500 text-body">{item.providerName}</p>
                  <p className="text-gray-400 text-body">{`Filed ${item.date}`}</p>
                </div>
                <div
                  className={`inline-flex items-center h-8 px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[item.claimStatus]}`}
                >
                  {item.claimStatus}
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
    </div>
  );
};

export default CardPageUI;
