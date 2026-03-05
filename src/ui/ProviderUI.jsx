import Label from "../module/Label";
import Table from "../module/Table";

const ProviderUI = ({
  componentData,
  start,
  end,
  handlePagination,
  currentPage,
  totalPages,
}) => {
  const providerStatus = componentData.map((s) => s.providerStatus);
  const tableHeads = [
    { header: "Doctor", key: "providerName" },
    { header: "Speciality", key: "speciality" },
    { header: "Provider Status", key: "providerStatus" },
    { header: "Location", key: "location" },
  ];

  return (
    <div className="p-10">
      <div className="mb-2">
        <h1 className="text-page-title text-gray-900 font-semibold">
          Provider
        </h1>
      </div>
      <Label
        componentData={componentData}
        status={providerStatus}
        title={"Provider"}
      />
      <Table
        componentData={componentData}
        tableHeads={tableHeads}
        start={start}
        end={end}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default ProviderUI;
