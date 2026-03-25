import React from "react";
import { Navigate } from "../../Navigate";

const UserDetails = () => {
  const user = {
    name: "Daniel Roberts",
    email: "daniel@midnightlounge.com",
    phone: "+1 (512) 555-0199",
    address: "Austin, Texas, USA",
    dob: "Jan 12, 1990",
    joinedOn: "Jul 14, 2025",
    verification: "Verified",
    status: "Active",
    image: "https://i.pravatar.cc/150?img=1",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="User" />

      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src={user.image}
          alt="User"
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{user.name}</h2>
          <p className="text-gray-400 text-sm">{user.email}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-6 border text-textColor border-borderColor rounded-xl space-y-3">
        <div className="border-b italic border-borderColor p-3">
          <h1>User Details</h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400 italic">Name</p>
            <p>{user.name}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Email</p>
            <p>{user.email}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Phone Number</p>
            <p>{user.phone}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Default Address</p>
            <p>{user.address}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Date of Birth</p>
            <p>{user.dob}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Joined On</p>
            <p>{user.joinedOn}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Verification Status</p>
            <span
              className={` py-1 rounded-full text-xs italic ${
                user.verification === "Verified"
                  ? " text-green-400"
                  : " text-red-400"
              }`}
            >
              {user.verification}
            </span>
          </div>

          <div>
            <p className="text-gray-400 italic">Status</p>
            <span
              className={`px-3 py-1 rounded-full text-xs italic ${
                user.status === "Active"
                  ? "bg-[#22C55E33] text-[#22C55E]"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button className="bg-gradient-to-tr w-[185px] from-[#2B7FFF] to-[#69A5FF] text-white shadow-md px-3 py-2 rounded-full">
          Unblock User
        </button>
      </div>
    </div>
  );
};

export default UserDetails;