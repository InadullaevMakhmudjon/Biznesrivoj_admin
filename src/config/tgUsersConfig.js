/* eslint-disable react/prop-types */
import React from "react";

export default [
  {
    Header: "ID",
    accessor: "id",
    width: '10%',
  },
  {
    Header: "First Name",
    accessor: "firstName",
    width: '10%',
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    width: '10%',
  },
  {
    Header: "Username",
    accessor: "username",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center", fontStyle: "italic" }}>{value}</p>
    ),
    width: '10%',
  },
  {
    Header: 'Phone Number',
    accessor: 'phoneNumber',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
    width: '10%',
  },
  {
    Header: "Points",
    accessor: "point",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
    width: '5%',
  },
  {
    Header: "CreatedAt",
    accessor: "createdAt",
    width: '10%',
  },
];
