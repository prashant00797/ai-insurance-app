const Table = ({
  componentData,
  tableHeads,
  start,
  end,
  handlePagination,
  currentPage,
  totalPages,
}) => {
  const statusStyles = {
    approved: "bg-green-100 text-success",
    pending: "bg-yellow-100 text-warning",
    denied: "bg-red-100 text-danger",
    "In-network": "bg-green-100 text-success",
    "Out-network": "bg-red-100 text-danger",
  };
  return (
    <>
      <div className="shadow-level-2 rounded-default border border-gray-200">
        <div className="overflow-x-auto overflow-y-auto">
          <table className="min-w-full text-left ">
            <thead className="bg-gray-100 text-gray-500 text-card-title tracking-wide sticky top-0">
              <tr>
                {tableHeads.map((column) => {
                  return (
                    <th
                      key={column.key}
                      className="px-4 py-2 font-semibold whitespace-nowrap"
                    >
                      {column.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {componentData.slice(start, end).map((row) => {
                return (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {tableHeads.map((col) => {
                      return (
                        <td
                          key={col.key}
                          className="px-4 py-4 font-regular whitespace-nowrap"
                        >
                          {col.key === "claimStatus" ||
                          col.key === "providerStatus" ? (
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[row[col.key]]}`}
                            >
                              {row[col.key]}
                            </span>
                          ) : (
                            row[col.key]
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center h-10 pt-4 gap-2">
        <p className="text-primary-500 font-semibold">{`Page ${currentPage + 1} of ${totalPages}`}</p>
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 0}
          className="bg-primary-600 text-white rounded-default p-2 cursor-pointer lg:hover:brightness-110 lg:cursor-pointer lg:transition lg:duration-300 disabled:bg-primary-100 disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:brightness-100 "
        >
          ⬅️
        </button>
        <button
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="bg-primary-600 text-white rounded-default p-2 cursor-pointer lg:hover:brightness-110 lg:cursor-pointer lg:transition lg:duration-300 disabled:bg-primary-100 disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:brightness-100 "
        >
          ➡️
        </button>
      </div>
    </>
  );
};

export default Table;
