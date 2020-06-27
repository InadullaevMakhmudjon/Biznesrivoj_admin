import React from 'react';

import PreviewButton from '../components/PreviewButton';

export default [
  {
    Header: 'ID',
    accessor: 'id',
    width: '5%',
  },
  {
    Header: 'Title',
    accessor: 'title_kr',
    width: '10%',
  },
  {
    Header: 'Description',
    accessor: 'description_kr',
    width: '40%',
  },
  {
    Header: 'Bonus Point',
    accessor: 'bonus',
    width: '10%',
  },
  {
    Header: 'Preview',
    accessor: 'route',
    width: '10%',
    Cell: ({ cell: { value } }) => <PreviewButton route={value} />,
  },
];
