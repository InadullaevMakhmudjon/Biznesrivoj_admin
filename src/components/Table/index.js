import React from 'react';
import PropTypes from 'prop-types';
import ReactTable, { useTable, usePagination } from 'react-table';


import { TableContainer } from './style';

const Table = ({ columns, data, handleRowClick }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  },
  usePagination);

  // Render the UI for your table
  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  handleRowClick: PropTypes.func,
};

Table.defaultProps = {
  columns: [],
  data: [],
  handleRowClick: () => {},
};

export default Table;
