export const selectisLoading = state => state.adverts.isLoading;
export const selectCampers = state => state.adverts.items;
export const selectError = state => state.adverts.error;
export const selectFavorites = state => state.adverts.favorites;
export const selectItemsForFilter = state => state.adverts.filter.items;
export const selectFiltered = state => state.adverts.filter.filtered;
