import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';

import { tgBooksSelector, isLoadingSelector } from '../../redux/selectors/booksSelector';
import { getTGOrderHistory } from '../../redux/modules/tg-order-history/tgOrderHistoryActions';

import Spinner from '../../components/Spinner';

import { CloseIcon, SearchIcon } from '../../constants/icons';

import booksConfig from '../../config/tgBooksConfig';
import {
  TableWrapper,
  TableHeaderWrapper,
  TableActionsWrapper,
  AddButtonStyled,
  InputWrapper,
  InputStyled,
} from './style';

const TGOrderHistory = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  const books = useSelector((state) => tgBooksSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));

  useEffect(() => {
    if (!books.length) {
      dispatch(getTGOrderHistory());
    }
  }, [dispatch]);

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
        <AddButtonStyled type="button" onClick={() => {}}>
          +
        </AddButtonStyled>
      </TableHeaderWrapper>
      {/* <Table columns={booksConfig} data={books} /> */}
    </TableWrapper>
  );
};


export default TGOrderHistory;
