const CardPageUI = () => {
  return (
    <div className="flex flex-col items-center lg: flex-none  p-7">
      {/* Banner Start - this will be a module later on */}
      <div className="lg:w-full shadow-level-1 bg-primary-100 lg:h-20 p-2 rounded-default mb-15 ">
        <div className="flex flex-col lg:flex-row items-baseline gap-1.5 mb-2">
          <p className="text-gray-900 text-card-title font-semibold">
            🛄We have found 2 denied Claims and 1 pending.
          </p>
          <p className="text-gray-500 text-body font-light pl-7 lg:pl-0">
            See the cards below
          </p>
        </div>
        <div className="flex items-center gap-2 pl-6 lg:pl-8">
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-danger">
            2 Denied
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-warning">
            1 Pending
          </div>
        </div>
      </div>
      {/* Banner end */}
      {/* Card Start - this will be a module later on */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full p-2">
        {[1, 2, 3].map(() => {
          return (
            <div className="shadow-level-2 w-full lg:w-[30vmax]">
              <div className="flex justify-between p-2 ">
                <div className="flex flex-col gap-2">
                  <h3 className="text-gray-900 text-card-title">
                    Claim ID : PS9283
                  </h3>
                  <p className="text-gray-500 text-body">Dr. Amit Verma</p>
                  <p className="text-gray-400 text-body">Filed 2 March 2025</p>
                </div>
                <div className="inline-flex items-center h-8 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-warning">
                  Pending
                </div>
              </div>
              <div className="bg-gray-100 text-right p-1">
                <button className="bg-primary-500 text-white p-1 rounded-default hover:brightness-110 cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Card end */}
    </div>
  );
};

export default CardPageUI;
