/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useTable,
  usePagination,
  useFilters,
  useGroupBy,
  useSortBy,
  useExpanded,
  useRowSelect,
  useGlobalFilter,
} from 'react-table';

import Pagination from '../Pagination';

import { TableContainer, TableHeaderStyled } from './style';

const Table = ({
  columns, data, handleRowClick, searchValue,
}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: {
      pageIndex, pageSize,
    },
  } = useTable(
    {
      columns,
      data,
      autoResetPage: true,
      autoResetSelectedRows: true,
      disableMultiSort: true,
    },
    useFilters,
    useGroupBy,
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    useExpanded,
    usePagination,
  );

  useEffect(() => {
    setGlobalFilter(searchValue || '');
  }, [searchValue]);
  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeaderStyled
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ width: column.width }}
                  isSorted={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                </TableHeaderStyled>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        setPageSize={setPageSize}
        pageSize={pageSize}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageCount={pageCount}
      />
    </TableContainer>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  handleRowClick: PropTypes.func,
  searchValue: PropTypes.string,
};

Table.defaultProps = {
  columns: [],
  data: [],
  handleRowClick: () => {},
  searchValue: '',
};

export default Table;
