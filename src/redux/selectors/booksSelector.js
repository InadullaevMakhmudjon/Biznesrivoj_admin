import { createSelector } from 'reselect';

export const tgBooksList = (state) => state.tgBooks.data;

export const isLoading = (state) => state.tgBooks.loading;

const createFormattedBooks = (item) => ({
  id: item.id,
  title_kr: item.title_kr,
  title_uz: item.title_lat,
  price: item.price,
  description_kr: item.description_kr,
  description_uz: item.description_lat,
  route: `/telegram-books/${item.id}`,
});

export const tgBooksSelector = createSelector(
  tgBooksList,
  (books) => (books ? books.map(createFormattedBooks) : []),
);


export const isLoadingSelector = createSelector(
  isLoading,
  (loading) => loading,
);
