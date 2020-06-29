/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Table from "../Table";
import Spinner from "../Spinner";

import { CloseIcon, SearchIcon } from '../../constants/icons';

import {
  TableWrapper,
  TableHeaderWrapper,
  TableActionsWrapper,
  AddButtonStyled,
  InputWrapper,
  InputStyled,
} from './style';

const DataTable = ({
  searchValue,
  setSearchValue,
  isFocused,
  setIsFocused,
  data,
  columnConfig,
  isLoading,
  history,
  createPath,
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <TableWrapper>
      <TableHeaderWrapper>
        <TableActionsWrapper isFocussed>
          <InputWrapper>
            <InputStyled
              type="text"
              search={searchValue}
              value={searchValue}
              isFocussed={isFocused}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => !searchValue.length && setIsFocused(false)}
              onReset={() => {
                searchValue('');
                setIsFocused(false);
              }}
            />
            {searchValue.length ? (
              <span
                onClick={() => {
                  setSearchValue('');
                  setIsFocused(false);
                }}
              >
                <CloseIcon />
              </span>
            ) : (
              <span
                onClick={() => {
                  setSearchValue('');
                  setIsFocused(true);
                }}
              >
                <SearchIcon />
              </span>
            )}
          </InputWrapper>
        </TableActionsWrapper>
        {createPath.length && (
        <AddButtonStyled type="button" onClick={() => history.push(createPath)}>
          +
        </AddButtonStyled>
        )}
      </TableHeaderWrapper>
      <Table columns={columnConfig} data={data} />
    </TableWrapper>
  );
};

DataTable.defaultProps = {
  searchValue: '',
  setSearchValue: () => {},
  isFocused: false,
  setIsFocused: () => {},
  data: [],
  columnConfig: [],
  isLoading: false,
  history: {},
  createPath: '',
};

DataTable.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  isFocused: PropTypes.bool,
  setIsFocused: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  columnConfig: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  isLoading: PropTypes.bool,
  history: PropTypes.objectOf(PropTypes.any),
  createPath: PropTypes.string,
};

export default DataTable;
