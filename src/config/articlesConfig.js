export default [{
  Header: 'Title',
  accessor: 'title_uz',
},
{
  Header: 'Description',
  accessor: 'description_uz',
},
{
  Header: 'Created At',
  accessor: 'createdAt',
},
{
  Header: 'Views',
  accessor: 'views',
},
{
  Header: 'Categories',
  accessor: 'categories',
  Cell: ({ cell: { value } }) => value.map((i) => i.label),
},
];
