import {createSelector} from 'reselect';

const selectUserState = (state) => state.user;

export const selectIsLoading = createSelector([selectUserState], (user) => user.isLoading);
export const selectError = createSelector([selectUserState], (user) => user.error);
export const selectIsUserLoggedIn = createSelector([selectUserState], (user) => user.userIsLoggedIn);
export const selectUser = createSelector([selectUserState], (user) => user.user);
