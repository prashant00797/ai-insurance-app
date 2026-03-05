import Label from "../module/Label";
import Table from "../module/Table";

const ClaimsUI = ({
  componentData,
  start,
  end,
  handlePagination,
  currentPage,
  totalPages,
}) => {
  const claimsStatus = componentData?.map((s) => s.claimStatus);
  const tableHeads = [
    { header: "Claim ID", key: "claimId" },
    { header: "Provider", key: "providerName" },
    { header: "Status", key: "claimStatus" },
    { header: "Amount", key: "amount" },
    { header: "Date", key: "date" },
  ];

  return (
    <div className=" p-10">
      <div className="mb-2">
        <h1 className="text-page-title text-gray-900 font-semibold">Claims</h1>
      </div>

      <Label
        componentData={componentData}
        status={claimsStatus}
        title={"Claims"}
      />

      <Table
        componentData={componentData}
        tableHeads={tableHeads}
        start={start}
        end={end}
        totalPages={totalPages}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ClaimsUI;
