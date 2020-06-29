import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from '../../components/DataTable';

import { getAllTGUsers } from "../../redux/modules/tg-users/tgUserActions";
import {
  tgUsersSelector,
  isLoadingSelector,
} from "../../redux/selectors/usersSelector";

import tgUsersConfig from "../../config/tgUsersConfig";

const TGUsers = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const users = useSelector((state) => tgUsersSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));

  useEffect(() => {
    if (!users.length) {
      dispatch(getAllTGUsers());
    }
  }, [dispatch]);

  return (
    <DataTable
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      isFocused={isFocused}
      setIsFocused={setIsFocused}
      data={users}
      columnConfig={tgUsersConfig}
      isLoading={isLoading}
    />
  );
};

export default TGUsers;
