import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../../components/DataTable';
import Spinner from '../../components/Spinner';

import { tgOrdersSelector, isLoadingSelector } from '../../redux/selectors/ordersSelector';
import { getTGOrderHistory } from '../../redux/modules/tg-order-history/tgOrderHistoryActions';
import ordersConfig from '../../config/tgOrdersConfig';


const TGOrderHistory = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  const orders = useSelector((state) => tgOrdersSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));

  useEffect(() => {
    if (!orders.length) {
      dispatch(getTGOrderHistory());
    }
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <DataTable
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      data={orders}
      columnConfig={ordersConfig}
      isLoading={isLoading}
      history={history}
    />
  );
};


export default TGOrderHistory;
