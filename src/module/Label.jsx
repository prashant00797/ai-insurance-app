const Label = ({ componentData, status, title }) => {
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
      <div className="bg-primary-600 text-white rounded-default w-full h-10 text-center p-2">
        {`${componentData.length} Total ${title}`}
      </div>
      {__status.map((s) => {
        return (
          <div
            className={`${statusStyles[s]} text-white rounded-default w-full h-10 text-center p-2`}
          >
            {`${status.reduce((acc, curr) => (curr === s ? acc + 1 : acc), 0)} ${s}`}
          </div>
        );
      })}
    </div>
  );
};

export default Label;
