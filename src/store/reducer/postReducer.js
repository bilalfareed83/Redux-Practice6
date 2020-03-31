import { USER_POST } from '../action/actionType';

const initialState = {
  post: []
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_POST: {
      return { ...state, post: [payload] };
    }
    default:
      return state;
  }
};

export default postReducer;
