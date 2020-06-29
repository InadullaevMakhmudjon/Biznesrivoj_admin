import { createSelector } from "reselect";

export const tgBooksList = (state) => state.tgBooks.data;

export const isLoading = (state) => state.tgBooks.loading;

const createFormattedBooks = (item) => ({
  id: item.id,
  title_kr: item.title_kr,
  title_uz: item.title_lat,
  price: item.price,
  point: item.point,
  images: item.images.map((image) => image.url),
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

const tgSingleBook = (state) => state.tgSingleBook.data;

const isSingleBookLoading = (state) => state.tgSingleBook.loading;

export const isLoadingSingleBookSelector = createSelector(
  isSingleBookLoading,
  (loading) => loading,
);

export const tgSingleBookSelector = createSelector(
  tgSingleBook,
  (book) => book && createFormattedBooks(book),
);
