import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DataTable from '../../components/DataTable';
import { tgBooksSelector, isLoadingSelector } from '../../redux/selectors/booksSelector';
import { getAllTgBooks } from '../../redux/modules/tg-books/tgBooksActions';

import booksConfig from '../../config/tgBooksConfig';

const TGBooks = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  const books = useSelector((state) => tgBooksSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));

  useEffect(() => {
    if (!books.length) {
      dispatch(getAllTgBooks());
    }
  }, [dispatch]);


  return (
    <DataTable
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      data={books}
      columnConfig={booksConfig}
      isLoading={isLoading}
      history={history}
      createPath="/telegram-books-create"
    />
  );
};


export default TGBooks;
