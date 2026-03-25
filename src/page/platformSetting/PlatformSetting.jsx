import React from "react";
import { Navigate } from "../../Navigate";
import { FiEdit } from "react-icons/fi";
import CommissionIco from "../../components/icon/CommissionIco";
import CancellationIcon from "../../components/icon/CancellationIcon";
import EditIco from "../../components/icon/EditIco";
import { Link } from "react-router-dom";

const PlatformSetting = () => {
  return (
    <div className="p-3 h-[87vh] overflow-auto ">
      <Navigate title="Platform Settings" />

      {/* Commission Rate */}
      <div className="mt-6 border border-borderColor rounded-xl bg-white">
        <div className="border-b border-borderColor p-3">
          <h1 className="italic text-textColor font-bold ">Commission Rate</h1>
        </div>

        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-light text-[#3B82F6]">
             <CommissionIco></CommissionIco>
            </div>

            {/* Text */}
            <div>
              <p className="text-textColor text-sm italic">Current Commission Rate</p>
              <p className="text-[#2563EB] font-semibold">5%</p>
            </div>
          </div>

          {/* Edit */}
         <Link to={'/dashboard/platform_setting/edit'}>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-light text-[#3B82F6]">
            <EditIco></EditIco>
          </button></Link>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="mt-6 border border-borderColor rounded-xl bg-white">
        <div className="border-b border-borderColor p-3">
          <h1 className="italic text-gray-700 font-bold">
            Cancellation Policy
          </h1>
        </div>

        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-light text-[#3B82F6]">
              <CancellationIcon></CancellationIcon>
            </div>

            {/* Text */}
            <div>
              <p className="text-textColor text-sm italic">Free Cancellation Window</p>
              <p className="text-[#2563EB] font-semibold">24 Hours</p>
            </div>
          </div>

          {/* Edit */}
          <Link to={'/dashboard/platform_setting/edit'}>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-light text-[#3B82F6]">
            <EditIco></EditIco>
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformSetting;
