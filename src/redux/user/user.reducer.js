import {types} from './user.types';

export const initialState = {
  isLoading: false,
  error: null,
  userIsLoggedIn: false,
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_USER_REQUEST:
      
      return {...state, isLoading: true};

    case types.SIGN_IN_USER_REQUEST_SUCCESS:
      window.localStorage.setItem('isUserLoggedIn', true);
      return {...state, isLoading: false, userIsLoggedIn: true, user: action.payload[0]};

    case types.SIGN_IN_USER_REQUEST_FAILURE:
      return {...state, isLoading: false, error: action.payload};

    case types.SIGN_UP_USER_REQUEST:
      return {...state, isLoading: true};

    case types.SIGN_UP_USER_REQUEST_SUCCESS:
      return {...state, isLoading: false};

    case types.SIGN_UP_USER_REQUEST_FAILURE:
      return {...state, isLoading: false, error: action.payload};

    case types.SIGN_OUT_USER_REQUEST:
      window.localStorage.setItem('isUserLoggedIn', false);
      return {...state, isLoading: false, error: null, userIsLoggedIn: false, user: {}};

    default:
      return state;
  }
};
