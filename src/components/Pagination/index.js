import React from "react";

import { PaginationContainer, ButtonStyled } from "./style";

const labels = {
  next: ">",
  previous: "<",
  gotoPage: "Go To   ",
};

const Pagination = ({
  gotoPage,
  previousPage,
  nextPage,
  pageIndex,
  pageOptions,
  setPageSize,
  pageSize,
  canPreviousPage,
  canNextPage,
  pageCount,
}) => (
  <PaginationContainer>
    <ButtonStyled onClick={() => previousPage()} disabled={!canPreviousPage}>
      {labels.previous}
    </ButtonStyled>
    <span>
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>
    </span>
    <ButtonStyled onClick={() => nextPage()} disabled={!canNextPage}>
      {labels.next}
    </ButtonStyled>
    <span>
      {labels.gotoPage}
      <input
        type='number'
        defaultValue={pageIndex + 1}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(page);
        }}
        style={{ width: "50px" }}
      />
    </span>
    <select
      value={pageSize}
      onChange={(e) => {
        setPageSize(Number(e.target.value));
      }}
    >
      {[10, 15, 20, 25, 30].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  </PaginationContainer>
);

export default Pagination;
