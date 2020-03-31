import { SUCCESS } from '../action/actionType';

const initialState = {
  user: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS: {
      return { ...state, user: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
