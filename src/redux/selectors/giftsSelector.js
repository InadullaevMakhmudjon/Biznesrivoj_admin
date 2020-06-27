import { createSelector } from 'reselect';

export const tgGiftsList = (state) => state.tgGifts.data;

export const tgSingleGift = (state) => state.tgSingleGift.data;

export const isLoading = (state) => state.tgGifts.loading;

export const isGiftLoading = (state) => state.tgSingleGift.loading;

const createFormattedGift = (item) => ({
  id: item.id,
  title_kr: item.title_kr,
  title_uz: item.title_lat,
  bonus: item.point,
  description_kr: item.description_kr,
  description_uz: item.description_lat,
  route: `telegram-gifts/${item.id}`,
});

export const tgGiftsSelector = createSelector(
  tgGiftsList,
  (gifts) => (gifts ? gifts.map(createFormattedGift) : []),
);

export const tgSingleGiftSelector = createSelector(
  tgSingleGift,
  (gift) => gift && createFormattedGift(gift),
);

export const isLoadingSelector = createSelector(
  isLoading,
  (loading) => loading,
);

export const isGiftLoadingSelector = createSelector(
  isGiftLoading,
  (loading) => loading,
);
