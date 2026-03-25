import React from "react";
import { Navigate } from "../../Navigate";

const EditPlatform = () => {
  return (
    <div className="p-4 h-[87vh] overflow-auto bg-white">
      <Navigate title="Platform Setting" />

      {/* Platform Commission Card */}
      <div className="mt-6 border border-borderColor rounded-xl text-textColor">
        {/* Header */}
        <div className="border-b border-borderColor p-4 italic">
          <h1 className="text-lg font-medium">Platform Commission</h1>
          <p className="text-sm text-gray-400 not-italic mt-1">
            Set the percentage fee the platform charges from each completed task.
          </p>
        </div>

        {/* Body */}
        <div className="p-4 space-y-2">
          <label className="text-sm font-medium block">
            Commission Percentage
          </label>

          {/* Input with % prefix */}
          <div className="flex items-center border border-borderColor rounded-lg overflow-hidden w-full max-w-xl">
            <div className="px-4 py-3 bg-[#E5E7EB] text-gray-500 border-r border-borderColor">
              %
            </div>
            <input
              type="number"
              defaultValue={5}
              className="w-full px-4 py-3 outline-none text-sm"
              placeholder="Enter commission"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button className="bg-gradient-to-tr from-[#2B7FFF] to-[#69A5FF] text-white shadow-md px-6 py-3 rounded-xl text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditPlatform;