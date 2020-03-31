import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN
} from './actionType';

export const userLogin = payload => ({
  type: USER_LOGIN,
  payload
});

export const userLoginSuccess = payload => ({
  type: USER_LOGIN_SUCCESS,
  payload
});

export const userLoginFail = payload => ({
  type: USER_LOGIN_FAILED,
  payload
});
