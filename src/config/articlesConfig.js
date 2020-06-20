import React from "react";

import Pills from "../components/Pills";
import PreviewButton from "../components/PreviewButton";

function createMarkup(value) {
  return { __html: value };
}
export default [
  {
    Header: "Title",
    accessor: "title_uz",
    width: "20%",
  },
  {
    Header: "Description",
    accessor: "description_uz",
    width: "35%",
    Cell: ({ cell: { value } }) => (
      <p dangerouslySetInnerHTML={createMarkup(value)} />
    ),
  },
  {
    Header: "Created At",
    accessor: "createdAt",
    widht: "10%",
  },
  {
    Header: "Views",
    accessor: "views",
    width: "5%",
  },
  {
    Header: "Categories",
    accessor: "categories",
    Cell: ({ cell: { value } }) => <Pills values={value} />,
    widht: "15%",
  },
  {
    Header: "Preview",
    accessor: "route",
    width: "15%",
    Cell: ({ cell: { value } }) => <PreviewButton route={value} />,
  },
];
