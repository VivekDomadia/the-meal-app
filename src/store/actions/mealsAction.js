import { SET_FILTERS, TOGGLE_FAVORITE } from '../type';

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = (filterSetting) => {
  return { type: SET_FILTERS, filters: filterSetting };
};
