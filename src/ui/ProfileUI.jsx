const ProfileUI = ({ user }) => {
  return (
    <div className="p-10">
      <div className="mb-2">
        <h1 className="text-page-title text-gray-900 font-semibold">Profile</h1>
      </div>
      <div className="shadow-level-2 w-full p-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="rounded-full bg-primary-600 w-25 h-25"></div>
          <div className="flex flex-col">
            <h3 className="text-card-title text-gray-900">
              {user.displayName}
            </h3>
            <p className="text-p text-gray-500">Member ID:51232, Jan 12 1997</p>
            <div className="bg-green-100 mt-3 rounded-sm p-1 text-center">
              <p className="text-success">🟢Coverage Active</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 h-0.5 w-full my-5 mb-1 self-stretch"></div>
        <div className="grid grid-cols-[1fr_auto_1fr] px-5 overflow-x-auto lg:overflow-visible">
          <div id="1" className=" pt-2">
            <div className="text-card-title text-gray-900 mb-2">Plan Info</div>
            <div className="bg-gray-100 w-50 h-10 pl-2 pt-1 text-left rounded-default">
              <p className="text-card-title text-gray-500">Vivanta Medicare</p>
            </div>
            <div>
              <p className="text-body text-gray-700">Premium plus</p>
              <p className="text-body text-gray-700">POL12312313</p>
              <p className="text-body text-gray-700">PPO @ XYZ.COM</p>
            </div>
          </div>
          <div className="w-px bg-gray-200 mx-10 mt-2"></div>
          <div id="2" className="pt-2 pl-7">
            <div className="text-card-title text-gray-900 mb-2 text-center lg:text-left">
              Dependents
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <div className="rounded-full bg-primary-600 w-10 h-10"></div>
              <div className="flex flex-row items-center gap-2.5 lg:flex-col lg:items-start lg:gap-0 ">
                <h3 className="text-card-title text-gray-900">Ruby </h3>
                <p className="text-p text-gray-500 whitespace-nowrap ">
                  Mother, Jan 11 1973
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUI;
