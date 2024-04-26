import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;
export const selectPage = state => state.campers.page;
export const selectIsLoadMore = state => state.campers.isLoadMore;
export const selectIsLoading = state => state.campers.isLoading;
export const selectIsLoaded = state => state.campers.isLoaded;
export const selectError = state => state.campers.error;

export const selectIsFilterActive = state => state.filter.isActive;
export const selectFilterValues = state => state.filter.values;
export const selectIsEquipmentFilterActive = createSelector(
  selectFilterValues,
  ({ transmission, equipment }) => {
    return transmission || equipment.length > 0;
  }
);

export const selectFavorites = state => state.favorites.items;
export const selectCampersShown = createSelector(
  selectCampers,
  selectFavorites,
  (campers, favoriteCampers) => {
    return campers.map(camper => ({
      ...camper,
      isFavorite: favoriteCampers.some(({ _id }) => _id === camper._id),
    }));
  }
);
export const selectModals = state => state.modal.modals;
export const selectModalsStack = state => state.modal.stack;
export const selectIsOverlay = createSelector(selectModalsStack, stack => {
  return stack.length > 0;
});
