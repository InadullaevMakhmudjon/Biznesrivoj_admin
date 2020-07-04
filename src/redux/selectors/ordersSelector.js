import { createSelector } from "reselect";
import moment from "moment";

export const tgOrderHistoryList = (state) => state.tgOrders.data;

export const isLoading = (state) => state.tgOrders.loading;

const createFormattedOrders = (item) => ({
  id: item.id,
  createdAt: moment(item.createdAt).format("MMM Do YYYY, h:mm"),
  userId: item.user.id || '',
  username: item.user.username ? `@${item.user.username}` : "",
  phoneNumber: item.user.phone_number || '',
  status: item.status.name_lat || '',
  sum: item.payment.price,
  paymentState: item.payment.state.id,
  paymentType: item.payment.type.id,
  orderType: item.type.name,
  transactionId: item.payment.transaction,
  route: `/telegram-orders/${item.id}`,
});

export const tgOrdersSelector = createSelector(tgOrderHistoryList, (orders) => (orders ? orders.map(createFormattedOrders) : []));

export const isLoadingSelector = createSelector(
  isLoading,
  (loading) => loading,
);
