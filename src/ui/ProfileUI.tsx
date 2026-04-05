import React from "react";
import {
  CovergaePlanConfig,
  DependentConfig,
  ProfileConfig,
} from "../constant/config";
import { CoverageActive } from "../constant/label";

const ProfileUI = ({ user }) => {
  const { headerLabel, userInfo } = ProfileConfig;
  return (
    <div className="p-10">
      <div className="mb-2">
        <h1 className="text-page-title text-gray-900 font-semibold">
          {headerLabel}
        </h1>
      </div>
      <div className="shadow-level-2 w-full p-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <React.Fragment>
            <div className="rounded-full bg-primary-600 w-25 h-25"></div>
            <div className="flex flex-col">
              <h3 className="text-card-title text-gray-900">
                {user.displayName}
              </h3>
              <p className="text-p text-gray-500">
                {`Member ID:${userInfo.memberID}, ${userInfo.dob}`}
              </p>
              <div className="bg-green-100 mt-3 rounded-sm p-1 text-center">
                <p className="text-success">
                  {userInfo.coverageActive ? CoverageActive : ""}
                </p>
              </div>
            </div>
          </React.Fragment>
        </div>
        <div className="bg-gray-100 h-0.5 w-full my-5 mb-1 self-stretch"></div>
        <div className="grid grid-cols-[1fr_auto_1fr] px-5 overflow-x-auto lg:overflow-visible">
          {CovergaePlanConfig.plan_Info.map((plan) => {
            return (
              <div key={plan.id} className=" pt-2">
                <div className="text-card-title text-gray-900 mb-2">
                  {CovergaePlanConfig.headerLabel}
                </div>
                <div className="bg-gray-100 w-50 h-10 pl-2 pt-1 text-left rounded-default">
                  <p className="text-card-title text-gray-500">
                    {plan.planName}
                  </p>
                </div>
                <div>
                  {plan.description.map((item) => {
                    return (
                      <React.Fragment key={item.planMailId}>
                        <p className="text-body text-gray-700">
                          {item.planCategory}
                        </p>
                        <p className="text-body text-gray-700">
                          {item.planNumber}
                        </p>
                        <p className="text-body text-gray-700">
                          {item.planMailId}
                        </p>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="w-px bg-gray-200 mx-10 mt-2"></div>
          {DependentConfig.dependents.map((d) => {
            return (
              <div key={d.id} id="2" className="pt-2 pl-7">
                <div className="text-card-title text-gray-900 mb-2 text-center lg:text-left">
                  {DependentConfig.headerLabel}
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <div className="rounded-full bg-primary-600 w-10 h-10"></div>
                  <div className="flex flex-row items-center gap-2.5 lg:flex-col lg:items-start lg:gap-0 ">
                    <h3 className="text-card-title text-gray-900 whitespace-nowrap">
                      {d.dependentName}
                    </h3>
                    <p className="text-p text-gray-500 whitespace-nowrap pt-1 md:pt-0 ">
                      {`${d.dependentRelation}, ${d.dependentDOB}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileUI;
