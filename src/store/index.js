import { combineReducers } from 'redux';
import postReducer from './reducer/postReducer';
import authReducer from './reducer/authReducer';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer,
  user: userReducer
});

export default rootReducer;
