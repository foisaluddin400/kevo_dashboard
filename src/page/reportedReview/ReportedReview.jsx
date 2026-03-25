import React from "react";
import { Input, Select, Table } from "antd";
import { Link } from "react-router-dom";

import { Navigate } from "../../Navigate";
import { FaChevronDown } from "react-icons/fa";
import EyeIco from "../../components/icon/EyeIco";

const ReportedReview = () => {

  const showModal2 = (record) => {
    console.log("View:", record);
  };

  const data = [
    {
      key: 1,
      sl: 1,
      reportedBy: {
        name: "John Doe",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=1",
      },
      reportedTo: {
        name: "Alex Smith",
        role: "Provider",
        image: "https://i.pravatar.cc/100?img=3",
      },
      serviceType: "Bartending",
      submittedOn: "12 Jun 2026",
      status: "Resolved",
    },
    {
      key: 2,
      sl: 2,
      reportedBy: {
        name: "Jane Smith",
        role: "Provider",
        image: "https://i.pravatar.cc/100?img=2",
      },
      reportedTo: {
        name: "Michael Lee",
        role: "Customer",
        image: "https://i.pravatar.cc/100?img=4",
      },
      serviceType: "Cleaning",
      submittedOn: "10 Jun 2026",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "SL",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Reported By",
      key: "reportedBy",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.reportedBy.image}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <div>
            <p>{record.reportedBy.name}</p>
            <p className="text-xs text-gray-400 italic">
              {record.reportedBy.role}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Reported To",
      key: "reportedTo",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.reportedTo.image}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <div>
            <p>{record.reportedTo.name}</p>
            <p className="text-xs text-gray-400 italic">
              {record.reportedTo.role}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Service Type",
      dataIndex: "serviceType",
      key: "serviceType",
    },
    {
      title: "Submitted On",
      dataIndex: "submittedOn",
      key: "submittedOn",
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <span
          className={`px-3 py-1 rounded-full italic text-sm ${
            record.status === "Pending"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {record.status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Link to={`/dashboard/reported/details/${record.key}`}>
          <button
            className="text-xl text-blue-500"
            onClick={() => showModal2(record)}
          >
            <EyeIco />
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div>
       <div className="flex mb-3 justify-between ">
        <Navigate title={"Reported Review"} />
        <div className="flex  items-center">
          

          <div className=" px-3 border-[#2A2448] justify-between items-center">
               <Select
          className="custom-select -mt-2"
          placeholder="Select Reporter"
          dropdownClassName="custom-select-dropdown"
          suffixIcon={<FaChevronDown className="text-[#C9C6D6] text-sm mt-2" />} // Optional: Remove default icon if you want a custom one
        >
          <Option value="all">All </Option>
          <Option value="snack">Last 24 Hours</Option>
          <Option value="main-course">Last Week</Option>
          


        </Select>
          </div>
          <Input placeholder="Search By Name..." className="custom-input" />
        </div>
      </div>

      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        rowKey="key"
        className="custom-table"
      />
    </div>
  );
};

export default ReportedReview;