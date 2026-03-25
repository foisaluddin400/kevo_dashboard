import React from "react";
import { Navigate } from "../../Navigate";
import { FaStar } from "react-icons/fa";

const BartenderDetails = () => {
  const bartender = {
    name: "Roberts Junior",
    email: "robert@canaletto.com",
    phone: "+1 (512) 555-0199",
    address: "Austin, Texas, USA",
    dob: "Feb 20, 1992",
    joinedOn: "Jul 14, 2025",
    serviceType: "Bartending",
    reviews: "112 Reviews",
    totalJobs: "320 Jobs",
    verification: "Verified",
    status: "Active",
    experience: "2 Years",
    skills: "Customer Service",
    rating: "4.4",
    bio: "Experienced bartender with a passion for crafting unique cocktails and delivering excellent customer service.",
    image: "https://i.pravatar.cc/150?img=1",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Provider" />

      {/* Profile */}
      <div className="flex items-center gap-4">
        <img
          src={bartender.image}
          alt="Provider"
          className="w-20 h-20 object-cover rounded-lg"
        />
     
      </div>

      {/* Provider Details */}
      <div className="mt-6 border border-borderColor rounded-xl space-y-3 text-textColor">
        <div className="border-b italic border-borderColor p-3">
          <h1>Provider Details</h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">

          <div>
            <p className="text-gray-400 italic">Name</p>
            <p>{bartender.name}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Email</p>
            <p>{bartender.email}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Phone Number</p>
            <p>{bartender.phone}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Default Address</p>
            <p>{bartender.address}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Date of Birth</p>
            <p>{bartender.dob}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Joined On</p>
            <p>{bartender.joinedOn}</p>
          </div>

          <div>
            <p className="text-gray-400 italic mb-2">Service Type</p>
            <span className="border border-borderColor px-3 py-1 rounded-full text-black ">
              {bartender.serviceType}
            </span>
          </div>

          <div>
            <p className="text-gray-400 italic">Reviews</p>
            <p>{bartender.reviews}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Total Jobs Completed</p>
            <p>{bartender.totalJobs}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Overall Rating</p>
            <p className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              {bartender.rating}
            </p>
          </div>

          <div>
            <p className="text-gray-400 italic">Verification Status</p>
            <span
              className={` py-1 rounded-full text-xs italic ${
                bartender.verification === "Verified"
                  ? " text-green-400"
                  : " text-red-400"
              }`}
            >
              {bartender.verification}
            </span>
          </div>

          <div>
            <p className="text-gray-400 italic">Status</p>
            <span
              className={`px-3 py-1 rounded-full text-xs italic ${
                bartender.status === "Active"
                  ? "bg-[#22C55E33] text-[#22C55E]"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {bartender.status}
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

export default BartenderDetails;