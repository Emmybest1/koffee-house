import {createSelector} from 'reselect';

const selectCartState = (state) => state.cart;
export const selectIsLoading = createSelector([selectCartState], (cart) => cart.isLoading);
export const selectError = createSelector([selectCartState], (cart) => cart.error);
export const selectCartItem = createSelector([selectCartState], (cart) => cart.fetchedCartItems);
