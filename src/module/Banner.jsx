const Banner = ({ componentData }) => {
  //   console.log(componentData);

  const statusCount = componentData.length;
  const statusName = statusCount > 0 ? componentData[0].claimStatus : null;
  const statusString = `🛄 We have found ${statusCount} ${statusName} claim${statusCount > 1 ? "s" : ""}.`;

  const statusStyles = {
    approved: "bg-green-100 text-success",
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
      {statusName && (
        <div className="flex items-center gap-2 pl-6 lg:pl-8">
          <div
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[statusName]}`}
          >
            {`${statusCount} ${statusName}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
