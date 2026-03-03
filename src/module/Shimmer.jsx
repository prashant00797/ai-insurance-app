export const ClaimProviderPageShimmer = () => {
  return (
    <div className="mt-11 p-10 w-full">
      <div className="mb-2 bg-gray-200  lg:w-50 h-7 rounded-default animate-pulse"></div>
      <div className="gap-5 mb-5 grid grid-cols-2 lg:flex lg:items-center lg:20">
        <div className="bg-gray-200  rounded-default  h-10 text-center p-2 lg:w-[50%]  animate-pulse"></div>
        <div className="bg-gray-200  rounded-default   h-10 text-center p-2 lg:w-[50%] animate-pulse"></div>
        <div className="bg-gray-200  rounded-default   h-10 text-center p-2 lg:w-[50%] animate-pulse"></div>
        <div className="bg-gray-200  rounded-default   h-10 text-center p-2 lg:w-[50%] animate-pulse"></div>
      </div>

      <div className="shadow-level-2 rounded-default w-full h-200 lg:h-[80%]  bg-gray-200 animate-pulse"></div>
    </div>
  );
};

export const DashboardAiShimmer = () => {
  return (
    <>
      <div className="ml-2 mb-2 bg-gray-200  w-30 h-7 rounded-default animate-pulse"></div>
      <div className="p-10 flex flex-col items-center gap-20">
        <div className="mt-3 lg:mt-0 bg-gray-200 w-[80%] h-10 rounded-default animate-pulse "></div>
        <div className="mt-3 lg:mt-0 bg-gray-200 w-[80%] h-25 rounded-default animate-pulse "></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-3 p-7 overflow-y-scroll">
        <div className="bg-gray-200 w-full h-25 rounded-default animate-pulse"></div>
        <div className="bg-gray-200 w-full h-25 rounded-default animate-pulse"></div>
        <div className="bg-gray-200 w-full h-25 rounded-default animate-pulse"></div>
        <div className="bg-gray-200 w-full h-25 rounded-default animate-pulse"></div>
      </div>
    </>
  );
};
