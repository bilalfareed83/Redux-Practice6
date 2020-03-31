import axios from 'axios';
import { userPostAction } from '../action/userPostAction';

const SERVER_URL = 'https://jsonplaceholder.typicode.com/posts';

class postMiddleware {
  static userPostMiddleware = () => {
    return dispatch => {
      axios
        .get(SERVER_URL)
        .then(res => {
          dispatch(userPostAction(res.data));
        })
        .catch(err => {
          'error';
        });
    };
  };
}

export default postMiddleware;
