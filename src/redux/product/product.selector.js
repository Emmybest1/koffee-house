import {createSelector} from 'reselect';

const selectProductState = (state) => state.product;

export const selectIsLoading = createSelector([selectProductState], (product) => product.isLoading);

export const selectProduct = createSelector([selectProductState], (product) => product.product);

export const selectError = createSelector([selectProductState],(product)=>product.error);




