const Label = ({ componentData, status, title, handleStatusActive }) => {
  const __status = [...new Set(status)];

  const statusStyles = {
    approved: "bg-success",
    pending: "bg-warning",
    denied: "bg-danger",
    "In-network": "bg-success",
    "Out-network": "bg-danger",
  };

  return (
    <div className="gap-5 mb-5 grid grid-cols-2 lg:flex lg:items-center lg:gap-20">
      <div
        onClick={(e) => handleStatusActive(e, "all")}
        className="bg-primary-600 text-white rounded-default w-full h-10 text-center p-2 whitespace-nowrap cursor-pointer hover:brightness-110"
      >
        {`${componentData.length} Total ${title}`}
      </div>
      {__status.map((stats, idx) => {
        return (
          <div
            key={idx}
            className={`${statusStyles[stats]} text-white rounded-default w-full h-10 text-center p-2 cursor-pointer hover:brightness-110`}
            onClick={(e) => handleStatusActive(e, stats)}
          >
            {`${status.reduce((acc, curr) => (curr === stats ? acc + 1 : acc), 0)} ${stats}`}
          </div>
        );
      })}
    </div>
  );
};

export default Label;
