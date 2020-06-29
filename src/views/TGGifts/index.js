import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DataTable from '../../components/DataTable';

import { tgGiftsSelector, isLoadingSelector } from '../../redux/selectors/giftsSelector';
import { getAllTgGifts } from '../../redux/modules/tg-gifts/tgGiftActions';

import giftsConfig from '../../config/tgGiftsConfig';

const TGBooks = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  const gifts = useSelector((state) => tgGiftsSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));

  useEffect(() => {
    if (!gifts.length) {
      dispatch(getAllTgGifts());
    }
  }, [dispatch]);

  return (
    <DataTable
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      data={gifts}
      columnConfig={giftsConfig}
      isLoading={isLoading}
      history={history}
      createPath="/telegram-gift-create"
    />
  );
};


export default TGBooks;
