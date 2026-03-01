const ClaimsUI = ({ componentData }) => {
  const claimsStatus = componentData.map((s) => s.claimStatus);
  const statusStyles = {
    approved: "bg-green-100 text-success",
    pending: "bg-yellow-100 text-warning",
    denied: "bg-red-100 text-danger",
  };

  return (
    <div className=" p-10">
      <div className="mb-2">
        <h1 className="text-page-title text-gray-900 font-semibold">Claims</h1>
      </div>
      <div className="gap-5 mb-5 grid grid-cols-2 lg:flex lg:items-center lg:20">
        <div className="bg-primary-600 text-white rounded-default w-full h-10 text-center p-2">
          {`${componentData.length} Total Claims`}
        </div>
        <div className="bg-success text-white rounded-default w-full  h-10 text-center p-2">
          {`${claimsStatus.filter((s) => s === "approved").map((i) => i).length} Approved`}
        </div>
        <div className="bg-warning text-white rounded-default w-full  h-10 text-center p-2">
          {`${claimsStatus.filter((s) => s === "pending").map((i) => i).length} Pending`}
        </div>
        <div className="bg-danger text-white rounded-default w-full  h-10 text-center p-2">
          {`${claimsStatus.filter((s) => s === "denied").map((i) => i).length} Denied`}
        </div>
      </div>

      <div className="shadow-level-2 rounded-default border border-gray-200 overflow-x-auto lg:overflow-visible">
        <table className="min-w-full text-left ">
          <thead className="bg-gray-100 text-gray-500 text-card-title tracking-wide">
            <tr>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Claim ID
              </th>
              <th className="px-4 py-2 font-semibold">Provider</th>
              <th className="px-4 py-2 font-semibold">Status</th>
              <th className="px-4 py-2 font-semibold">Amount</th>
              <th className="px-4 py-2 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {componentData.map((item) => {
              return (
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-regular">{item.claimId}</td>
                  <td className="px-4 py-2 font-regular">
                    {item.providerName}
                  </td>
                  <td className="px-4 py-2 font-regular">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[item.claimStatus]}`}
                    >
                      {item.claimStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-regular">{item.amount}</td>
                  <td className="px-4 py-2 font-regular whitespace-nowrap">
                    {item.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-center items-center w-full h-10 gap-10 cursor-pointer">
          <div className="text-gray-500 mr-2">Page 1 of 2</div>
          <div className="flex items-center gap-1 text-center">
            <button className="bg-gray-100 rounded w-10 shadow-level-1 cursor-pointer">
              {"<"}
            </button>
            <div className="bg-gray-100 rounded w-10 shadow-level-1">1</div>
            <button className="bg-gray-100 rounded w-10 shadow-level-1 cursor-pointer">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsUI;
