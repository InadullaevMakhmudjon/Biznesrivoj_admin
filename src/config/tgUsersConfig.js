import React from "react";

export default [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Firt Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Username",
    accessor: "username",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center", fontStyle: "italic" }}>{value}</p>
    ),
  },
  {
    Header: "Points",
    accessor: "point",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: "CreatedAt",
    accessor: "createdAt",
  },
];
