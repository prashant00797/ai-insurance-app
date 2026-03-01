const BackUI = ({ search, onBack }) => {
  return (
    search.length !== 0 && (
      <div className="p-1">
        <button
          onClick={onBack}
          className="text-primary-500 cursor-pointer hover:brightness-110"
        >
          👈🏼Back
        </button>
      </div>
    )
  );
};

export default BackUI;
