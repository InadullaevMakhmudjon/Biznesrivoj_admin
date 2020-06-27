import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';

import { tgGiftsSelector, isLoadingSelector } from '../../redux/selectors/giftsSelector';
import { getAllTgGifts } from '../../redux/modules/tg-gifts/tgGiftActions';

import Spinner from '../../components/Spinner';

import { CloseIcon, SearchIcon } from '../../constants/icons';

import giftsConfig from '../../config/tgGiftsConfig';

import {
  TableWrapper,
  TableHeaderWrapper,
  TableActionsWrapper,
  AddButtonStyled,
  InputWrapper,
  InputStyled,
} from './style';

const TGBooks = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  const gifts = useSelector((state) => tgGiftsSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));

  useEffect(() => {
    if (!gifts.length) {
      dispatch(getAllTgGifts());
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
      <Table columns={giftsConfig} data={gifts} />
    </TableWrapper>
  );
};


export default TGBooks;
