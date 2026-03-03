const BackUI = ({ onBack, hasSearched }) => {
  return (
    hasSearched && (
      <div className="p-1 lg:mt-0 absolute">
        <button
          onClick={onBack}
          type="button"
          className=" text-page-title rounded-default w-15 p-2 cursor-pointer hover:brightness-110"
        >
          ⬅️
        </button>
      </div>
    )
  );
};

export default BackUI;
