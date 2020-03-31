import {
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS
} from '../action/actionType';

const initialState = {
  isLoading: false,
  successMessage: '',
  errorMessage: '',
  isLoggedIn: false,
  data: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      return { ...state, isLoading: true };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        successMessage: 'you are logged in',
        isLoading: false,
        data: payload
      };
    }
    case USER_LOGIN_FAILED: {
      return { ...state, isLoading: false, errorMessage: 'Login fail' };
    }
    default:
      return state;
  }
};

export default authReducer;
