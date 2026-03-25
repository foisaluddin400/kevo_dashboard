import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import EyeIco from "../icon/EyeIco";

const RecentShifts = () => {

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
      <div className="flex pt-4 text-white justify-between items-center mb-4">
        <h1 className="text-xl font-semibold italic">
          Recent Help & Support
        </h1>
        <Link to={"/dashboard/HelpSupport"}>
          <button className="text-[#3D8BFF] font-medium">View All</button>
        </Link>
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

export default RecentShifts;