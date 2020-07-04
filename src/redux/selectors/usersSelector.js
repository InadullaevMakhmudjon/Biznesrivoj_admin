import { createSelector } from "reselect";
import moment from "moment";

export const tgUsersList = (state) => state.tgUsers.data;

export const isLoading = (state) => state.tgUsers.loading;

const createFormattedUsers = (item) => ({
  id: item.id,
  firstName: item.first_name || "",
  lastName: item.last_name || "",
  username: item.username ? `@${item.username}` : "",
  phoneNumber: item.phone_number,
  point: item.point.value,
  createdAt: moment(item.createdAt).format("MMM Do YYYY"),
});

export const tgUsersSelector = createSelector(tgUsersList, (users) => (users ? users.map(createFormattedUsers) : []));

export const isLoadingSelector = createSelector(
  isLoading,
  (loading) => loading,
);
