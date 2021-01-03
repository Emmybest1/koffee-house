import {types} from './user.types';
import {api} from '../../data/api/httpRequest';
import {generateApiKey} from '../../utils/api-key-generator';

/*********
 *@action
 *signInUserActions
 *********/
export const signInUserRequestStarted = () => ({
  type: types.SIGN_IN_USER_REQUEST,
});

export const signInUserRequestSuccess = (payload) => ({
  type: types.SIGN_IN_USER_REQUEST_SUCCESS,
  payload,
});

export const signInUserRequestFailure = (payload) => ({
  type: types.SIGN_IN_USER_REQUEST_FAILURE,
  payload,
});

export const signInUserRequest = (payload) => (dispatch) => {
  dispatch(signInUserRequestStarted());

  api
    .get(`${process.env.REACT_APP_DEV_URL}users?email=${payload.email}&password=${payload.password}`)
    .then((res) => {
      dispatch(signInUserRequestSuccess(res.data));
    })
    .catch((error) => {
      dispatch(signInUserRequestFailure(error.message));
    });
};
/***********
 *@action
 *signUpUserActions
 ***********/
export const signUpUserRequestStarted = () => ({
  type: types.SIGN_UP_USER_REQUEST,
});

export const signUpUserRequestSuccess = (payload) => ({
  type: types.SIGN_UP_USER_REQUEST_SUCCESS,
  payload,
});

export const signUpUserRequestFailure = (payload) => ({
  type: types.SIGN_UP_USER_REQUEST_FAILURE,
  payload,
});

export const signUpUserRequest = (payload) => (dispatch) => {
  dispatch(signUpUserRequestStarted());
  const apiKey = generateApiKey();
  const data = {...payload, 'api-key': apiKey};

  api
    .post(`${process.env.REACT_APP_DEV_URL}users`, data)
    .then((res) => {
      dispatch(signUpUserRequestSuccess(res.data));
    })
    .catch((error) => {
      dispatch(signUpUserRequestFailure(error.message));
    });
};

/***********
 *@action
 *signOutUserActions
 ***********/
export const signOutUserRequestStarted = () => ({
  type: types.SIGN_OUT_USER_REQUEST,
});

export const signOutUserRequestSucess = (payload) => ({
  type: types.SIGN_OUT_USER_REQUEST_SUCCESS,
  payload,
});

export const signOutUserRequestFailure = (payload) => ({
  type: types.SIGN_OUT_USER_REQUEST_FAILURE,
  payload,
});

export const signOutUserRequest = () => ({
  type: types.SIGN_OUT_USER_REQUEST,
});
