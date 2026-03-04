const ProviderUI = ({ componentData }) => {
  const providerStatus = componentData.map((s) => s.providerStatus);

  const statusStyles = {
    "In-network": "bg-green-100 text-success",
    "Out-network": "bg-red-100 text-danger",
  };
  return (
    <div className="p-10">
      <div className="mb-2">
        <h1 className="text-page-title text-gray-900 font-semibold">
          Provider
        </h1>
      </div>
      {/* this must be a generic label module */}
      <div className="gap-5 mb-5 grid grid-cols-2 lg:flex lg:items-center lg:gap-20">
        <div className="bg-primary-600 text-white rounded-default w-full h-10 text-center p-2">
          {`${componentData.length} Total Providers`}
        </div>
        <div className="bg-success text-white rounded-default w-full  h-10 text-center p-2">
          {`${providerStatus.filter((i) => i === "In-network").map((i) => i).length} In-Network`}
        </div>
        <div className="bg-danger text-white rounded-default w-full  h-10 text-center p-2">
          {`${providerStatus.filter((i) => i === "Out-network").map((i) => i).length} Out-Network`}
        </div>
      </div>
      {/* this must be a generic table module */}
      <div className="shadow-level-2 rounded-default border border-gray-200 overflow-x-auto pb-3 [scrollbar-width:none] lg:overflow-y-scroll">
        <table className="min-w-full text-left ">
          <thead className="bg-gray-100 text-gray-500 text-card-title tracking-wide sticky top-0">
            <tr>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Doctor
              </th>
              <th className="px-4 py-2 font-semibold">Speciality</th>
              <th className="px-4 py-2 font-semibold">Status</th>
              <th className="px-4 py-2 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {componentData.map((item) => {
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-regular whitespace-nowrap">
                    {item.providerName}
                  </td>
                  <td className="px-4 py-2 font-regular">{item.speciality}</td>
                  <td className="px-4 py-2 font-regular">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[item.providerStatus]}`}
                    >
                      {item.providerStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-regular">{item.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center h-10 pt-4">
        <button className="bg-primary-600 text-white rounded-default p-2 cursor-pointer my-2 lg:hover:brightness-110 lg:cursor-pointer">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProviderUI;
