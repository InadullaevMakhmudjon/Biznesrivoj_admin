
/* eslint-disable react/prop-types */
import React from "react";
import PreviewButton from '../components/PreviewButton';
import { paymeStatus, paymentType } from "../constants/paymeTypes";

export default [
  {
    Header: "Transaction ID",
    accessor: "transactionId",
    width: '30px',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: 'UserID',
    accessor: 'userId',
    width: '40px',
  },
  {
    Header: "Username",
    accessor: "username",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center", fontStyle: "italic" }}>{value}</p>
    ),
    width: '100px',
  },
  {
    Header: 'Phone Number',
    accessor: 'phoneNumber',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
    width: '60px',
  },
  {
    Header: "Order Status",
    accessor: "status",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
    width: '50px',
  },
  {
    Header: 'Created At',
    accessor: 'createdAt',
    width: '45px',
  },
  {
    Header: "Sum",
    accessor: "sum",
    width: '30px',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: 'Payment state',
    accessor: 'paymentState',
    width: '5%',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{(paymeStatus[value] || value)}</p>
    ),
  },
  {
    Header: 'Payment Type',
    accessor: 'paymentType',
    width: '5%',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{(paymentType[value])}</p>
    ),
  },
  {
    Header: 'Order type',
    accessor: 'orderType',
    width: '5%',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: 'Order',
    accessor: 'route',
    Cell: ({ cell: { value } }) => <PreviewButton route={value} />,
    width: '70px',
  },
];
