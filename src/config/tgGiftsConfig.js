/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from "react";

import PreviewButton from "../components/PreviewButton";
import { createMarkup } from "../utils";

export default [
  {
    Header: "ID",
    accessor: "id",
    width: "5%",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: "Title",
    accessor: "title_uz",
    width: "10%",
  },
  {
    Header: "Description",
    accessor: "description_uz",
    width: "40%",
    Cell: ({ cell: { value } }) => (
      <div dangerouslySetInnerHTML={createMarkup(value)} />
    ),
  },
  {
    Header: "Bonus Point",
    accessor: "point",
    width: "10%",
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: "Preview",
    accessor: "route",
    width: "10%",
    Cell: ({ cell: { value } }) => <PreviewButton route={value} />,
  },
];
