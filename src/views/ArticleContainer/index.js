import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/Table';
import { getAll } from '../../redux/modules/article/actions';
import {
  articlesSelector,
  isLoadingSelector,
} from '../../redux/selectors/articlesSelector';
import Spinner from '../../components/Spinner';

import { CloseIcon, SearchIcon } from '../../constants/icons';
import articlesConfig from '../../config/articlesConfig';

import {
  TableWrapper,
  TableHeaderWrapper,
  TableActionsWrapper,
  AddButtonStyled,
  InputWrapper,
  InputStyled,
} from './style';

const ArticlesContainer = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const articles = useSelector((state) => articlesSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));

  useEffect(() => {
    if (!articles.length) {
      dispatch(getAll());
    }
  }, [dispatch, articles]);
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
      <Table columns={articlesConfig} data={articles} />
    </TableWrapper>
  );
};
// const { fuzzySearchFilter } = useDataTable(searchValue, searchFilter);

ArticlesContainer.propTypes = {};

ArticlesContainer.defaultProps = {};

export default ArticlesContainer;
