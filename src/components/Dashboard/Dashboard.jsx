import { RiUserForbidLine } from "react-icons/ri";

import { HiOutlineUserGroup } from "react-icons/hi2";
import { VscNote } from "react-icons/vsc";
import { PiMoneyLight } from "react-icons/pi";
import CategoryIco from "../icon/CategoryIco";
import ProductIco from "../icon/ProductIco";
import ShiftsIco from "../icon/ShiftsIco";
import Activity from "./Activity";
import RecentShifts from "./RecentShifts";
import ReportedReviewIco from "../icon/ReportedReviewIco";
const Dashboard = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-3 gap-4">
        <div className=" gap-4 items-center border border-primary bg-primary-light p-6 rounded-xl shadow">
          <div>
            <h1 className="font-semibold text-2xl text-textColor italic">
              {" "}
              Total User
            </h1>
            <div className="flex pt-5 justify-between items-center ">
              <h1 className="text-primary font-extrabold text-3xl italic ">17</h1>
              <div className="bg-primary-light w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                <CategoryIco color={"#2B7FFF"}></CategoryIco>
              </div>
            </div>
          </div>
        </div>
        <div className=" gap-4 items-center border border-[#2B7FFF] bg-primary-light p-6 rounded-xl shadow">
          <div>
            <h1 className="font-semibold text-2xl text-textColor italic">
              {" "}
              Total Providers
            </h1>
            <div className="flex pt-5 justify-between items-center ">
              <h1 className="text-primary text-3xl font-bold italic">17</h1>
              <div className="bg-primary-light w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                <ProductIco color={"#2B7FFF"} />
              </div>
            </div>
          </div>
        </div>
     <div className=" gap-4 items-center border border-[#2B7FFF] bg-primary-light p-6 rounded-xl shadow">
          <div>
            <h1 className="font-semibold text-2xl text-textColor italic">
              {" "}
              Pending Reporter
            </h1>
            <div className="flex pt-5 justify-between items-center ">
              <h1 className="text-primary text-3xl font-bold italic">17</h1>
              <div className="bg-primary-light w-[40px] h-[40px] flex justify-center items-center rounded-lg">
                <ReportedReviewIco color={"#2B7FFF"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Activity></Activity>
        <RecentShifts></RecentShifts>
      </div>
    </div>
  );
};

export default Dashboard;
