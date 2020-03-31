import axios from 'axios';
import {
  userLoginSuccess,
  userLogin,
  userLoginFail
} from '../action/authAction';

const SERVER_URL = 'https://jsonplaceholder.typicode.com/todos/1';

class authMiddleware {
  static userLoginMiddleware = () => {
    return dispatch => {
      axios
        .get(SERVER_URL)
        .then(res => {
          dispatch(userLogin());
          dispatch(userLoginSuccess());
        })
        .catch(err => {
          dispatch(userLoginFail());
        });
    };
  };
}

export default authMiddleware;
