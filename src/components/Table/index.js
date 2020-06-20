import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  usePagination,
  useFilters,
  useGroupBy,
  useSortBy,
  useExpanded,
  useRowSelect,
} from "react-table";

import Pagination from "../Pagination";

import { TableContainer } from "./style";

const Table = ({ columns, data, handleRowClick }) => {
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
    state: { pageIndex, pageSize, sortBy, groupBy, expanded, filters },
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
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );
  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ width: column.width }}
                >
                  {column.render("Header")}
                </th>
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
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
};

Table.defaultProps = {
  columns: [],
  data: [],
  handleRowClick: () => {},
};

export default Table;
