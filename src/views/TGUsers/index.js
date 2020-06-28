import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table";

import {
  tgUsersSelector,
  isLoadingSelector,
} from "../../redux/selectors/usersSelector";

import Spinner from "../../components/Spinner";

import { CloseIcon, SearchIcon } from "../../constants/icons";

import tgUsersConfig from "../../config/tgUsersConfig";
import {
  TableWrapper,
  TableHeaderWrapper,
  TableActionsWrapper,
  InputWrapper,
  InputStyled,
} from "./style";
import { getAllTGUsers } from "../../redux/modules/tg-users/tgUserActions";

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
                searchValue("");
                setIsFocused(false);
              }}
            />
            {searchValue.length ? (
              <span
                onClick={() => {
                  setSearchValue("");
                  setIsFocused(false);
                }}
              >
                <CloseIcon />
              </span>
            ) : (
              <span
                onClick={() => {
                  setSearchValue("");
                  setIsFocused(true);
                }}
              >
                <SearchIcon />
              </span>
            )}
          </InputWrapper>
        </TableActionsWrapper>
      </TableHeaderWrapper>
      <Table columns={tgUsersConfig} data={users} />
    </TableWrapper>
  );
};

export default TGUsers;
