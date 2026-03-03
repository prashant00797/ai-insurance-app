const Banner = ({ componentData, intentData }) => {
  // console.log(componentData);
  const { intent } = intentData;
  const statusCount = componentData?.length;
  const statusName =
    statusCount > 0
      ? componentData[0].claimStatus || componentData[0].providerStatus
      : null;

  const inNetWorkCount = componentData.reduce((acc, curr) => {
    return curr.providerStatus === "In-network" ? acc + 1 : acc;
  }, 0);
  const outNetWorkCount = componentData.reduce((acc, curr) => {
    return curr.providerStatus === "Out-network" ? acc + 1 : acc;
  }, 0);

  const networkArray = componentData.map((i) => i.providerStatus);
  const uniqueNetworks = [...new Set(networkArray)];

  let statusString = "";
  if (intent === "get_claims") {
    statusString = `🛄 We have found ${statusCount} ${statusName} claim${statusCount > 1 ? "s" : ""}.`;
  } else if (intent === "get_providers") {
    statusString = `🥼 We have found ${inNetWorkCount} In-Network provider${inNetWorkCount > 1 ? "s" : ""} and ${outNetWorkCount} Out-Network provider${outNetWorkCount > 1 ? "s" : ""}.`;
  }

  const statusStyles = {
    approved: "bg-green-100 text-success",
    "In-network": "bg-green-100 text-success",
    "Out-network": "bg-red-100 text-danger",
    pending: "bg-yellow-100 text-warning",
    denied: "bg-red-100 text-danger",
  };

  return (
    <div className="lg:w-full shadow-level-1 bg-primary-100 lg:h-20 p-2 rounded-default mb-15 ">
      <div className="flex flex-col lg:flex-row items-baseline gap-1.5 mb-2">
        <p className="text-gray-900 text-card-title font-semibold">
          {` ${statusString}`}
        </p>
        <p className="text-gray-500 text-body font-light pl-7 lg:pl-0">
          {`See the card${statusCount > 1 ? "s" : ""} below`}
        </p>
      </div>
      {statusName &&
        (intent === "get_providers" ? (
          <div className="flex items-center gap-2 pl-6 lg:pl-8">
            {uniqueNetworks.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusStyles[item]}`}
                >
                  {`${item}`}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2 pl-6 lg:pl-8">
            <div
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[statusName]}`}
            >
              {`${statusName}`}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Banner;
