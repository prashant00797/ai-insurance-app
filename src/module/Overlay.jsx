import { apiWarning } from "../constant/config";

const Overlay = ({ onClose }) => {
  return (
    <div className="absolute shadow-level-2 text-sm w-64 flex flex-col gap-4 z-50 p-2 rounded-default top-full bg-primary-100 md:w-[320px] lg:top-21 lg:right-10 ">
      <button
        onClick={(e) => {
          (e.stopPropagation(), onClose());
        }}
        className="block lg:hidden self-end text-primary-600 text-body"
      >
        X
      </button>
      <h3 className="text-primary-600 text-center">{apiWarning.title}</h3>
      <p className="text-gray-700">{apiWarning.descp}</p>
    </div>
  );
};

export default Overlay;
