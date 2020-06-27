import React from 'react';

import Pills from '../components/Pills';
import PreviewButton from '../components/PreviewButton';

export default [
  {
    Header: 'Title',
    accessor: 'title_uz',
    width: '35%',
  },
  {
    Header: 'Created At',
    accessor: 'createdAt',
    width: '10%',
  },
  {
    Header: 'Views',
    accessor: 'views',
    width: '10%',
  },
  {
    Header: 'Categories',
    accessor: 'categories',
    Cell: ({ cell: { value } }) => <Pills values={value} />,
    width: '15%',
  },
  {
    Header: 'Preview',
    accessor: 'route',
    width: '20%',
    Cell: ({ cell: { value } }) => <PreviewButton route={value} />,
  },
];
