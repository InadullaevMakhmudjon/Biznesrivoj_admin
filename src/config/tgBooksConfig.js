/* eslint-disable react/no-danger */
import React from 'react';

import PreviewButton from '../components/PreviewButton';
import { createMarkup } from "../utils";

export default [
  {
    Header: 'ID',
    accessor: 'id',
    width: '5%',
  },
  {
    Header: 'Title',
    accessor: 'title_uz',
    width: '10%',
  },
  {
    Header: 'Description',
    accessor: 'description_uz',
    width: '35%',
    Cell: ({ cell: { value } }) => (
      <div dangerouslySetInnerHTML={createMarkup(value)} />
    ),
  },
  {
    Header: 'Price',
    accessor: 'price',
    width: '10%',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: 'Point',
    accessor: 'point',
    width: '10%',
    Cell: ({ cell: { value } }) => (
      <p style={{ textAlign: "center" }}>{value}</p>
    ),
  },
  {
    Header: 'Preview',
    accessor: 'route',
    width: '10%',
    Cell: ({ cell: { value } }) => <PreviewButton route={value} />,
  },
];
