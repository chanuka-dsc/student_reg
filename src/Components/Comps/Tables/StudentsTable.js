import React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";

export default function StudentsTable() {
  const students = useSelector((state) => state.studentDetails);

  const drawTable = () => {
    return <Table columns={colums} dataSource={students} />;
  };

  return <div>{drawTable()}</div>;
}

const colums = [
  { title: "ID", dataIndex: "key", key: "key" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Date of Birth", dataIndex: "dob", key: "dob" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Stream", dataIndex: "stream", key: "stream" },
  {
    title: "Subject line 1",
    dataIndex: "subject_line_1",
    key: "subject_line_1",
  },
  {
    title: "Subject line 2",
    dataIndex: "subject_line_2",
    key: "subject_line_2",
  },
  {
    title: "Subject line 3",
    dataIndex: "subject_line_3",
    key: "subject_line_3",
  },
];
