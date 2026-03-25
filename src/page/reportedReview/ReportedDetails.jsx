import React from "react";
import { Navigate } from "../../Navigate";
import UserDtailsIco from "../../components/icon/UserDtailsIco";

const ReportedDetails = () => {
  const data = {
    reportedBy: {
      name: "Emily Carter",
      role: "Customer",
      email: "Emily@gmail.com",
      phone: "+1 720-555-0641",
      date: "Jul 12, 2025",
      status: "Active",
      image: "https://i.pravatar.cc/100?img=5",
    },
    reportedTo: {
      name: "John Miller",
      role: "Provider",
      email: "John@gmail.com",
      phone: "+1 720-555-0641",
      date: "Jul 12, 2025",
      status: "Active",
      image: "https://i.pravatar.cc/100?img=6",
    },
  };

  const photos = [
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
  ];

  const Card = ({ title, children }) => (
    <div className="border border-borderColor rounded-xl ">
      <div className="border-b border-borderColor font-semibold p-3 italic text-textColor">
        {title}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );

  const UserRow = ({ user }) => (
    <div className="flex items-center justify-between  p-3 rounded-xl">
      <div className="flex items-center gap-3">
        <img src={user.image} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-textColor">{user.name}</p>
          <p className="text-xs text-textColor italic">{user.role}</p>
        </div>
      </div>

      <p className="text-textColor text-sm">{user.email}</p>
      <p className="text-textColor text-sm">{user.phone}</p>
      <p className="text-textColor text-sm">{user.date}</p>

      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
        {user.status}
      </span>
      <button className="w-[30px] h-[30px] bg-primary-light flex justify-center items-center text-lg rounded-md">
        <UserDtailsIco></UserDtailsIco>
      </button>
    </div>
  );

  return (
    <div className="p-3 h-[87vh] overflow-auto ">
      <Navigate title="Report Review" />

      <div className="space-y-4 mt-4">
        {/* Reported By */}
        <Card title="Reported By">
          <UserRow user={data.reportedBy} />
        </Card>

        {/* Reported To */}
        <Card title="Reported To">
          <UserRow user={data.reportedTo} />
        </Card>

        {/* Task Details */}
        <Card title="Task Details">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-textColor italic">Service Type</p>
              <p>Snow Shoveling</p>
            </div>

            <div>
              <p className="text-gray-400 italic">Location</p>
              <p>221B Maple Street, New York, NY</p>
            </div>

            <div>
              <p className="text-gray-400 italic">Scheduled Time</p>
              <p>23 February 2026, 4:00 PM</p>
            </div>

            <div>
              <p className="text-gray-400 italic">Task Value</p>
              <p>$80.00</p>
            </div>

            {/* Photos */}
            <div className="col-span-2">
              <p className="text-gray-400 italic mb-2">Task Reference Photos</p>
              <div className="flex gap-2">
                {photos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-400 italic mb-2">
                Before completion photos
              </p>
              <div className="flex gap-2">
                {photos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-400 italic mb-2">
                After completion photos
              </p>
              <div className="flex gap-2">
                {photos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Report Details */}
        <Card title="Report Details">
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-400 italic">Reason for Report</p>
              <p>Task not completed</p>
            </div>

            <div>
              <p className="text-gray-400 italic">Report Status</p>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                Resolved
              </span>
            </div>

            <div className="col-span-2">
              <p className="text-gray-400 italic">Additional Notes</p>
              <p className="text-gray-300">
                The provider did not complete the task as agreed. Several areas
                were left unfinished, and the work quality did not meet the
                expected standard. Customer requests review and action.
              </p>
            </div>

            <div className="col-span-2">
              <p className="text-gray-400 italic mb-2">
                After completion photos
              </p>
              <div className="flex gap-2">
                {photos.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="bg-gradient-to-tr  from-[#2B7FFF] to-[#69A5FF] px-5 py-2 rounded-full text-white">
            Refund Customer
          </button>

          <button className="bg-gradient-to-tr  from-[#2B7FFF] to-[#69A5FF] px-5 py-2 rounded-full text-white">
            Release Payment to Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportedDetails;
