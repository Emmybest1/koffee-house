import {createSelector} from 'reselect';

const selectProductsState = (state) => state.products;

export const selectIsLoading = createSelector([selectProductsState], (products) => products.isLoading);
export const selectProducts = createSelector([selectProductsState], (products) => products.products);
export const selectError = createSelector([selectProductsState], (products) => products.error);
