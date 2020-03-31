import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import authMiddleware from './store/middleware/authMiddleware';
import postMiddleware from './store/middleware/postMiddleware';

const App = props => {
  console.log(props.post);
  return (
    <div className="App">
      <h2>Redux Middleware</h2>
      <button onClick={props.userLogin}>Fetch data</button>
      <button onClick={props.userPost}>Fetch post</button>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  userLogin: () => {
    dispatch(authMiddleware.userLoginMiddleware());
  },
  userPost: () => {
    dispatch(postMiddleware.userPostMiddleware());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
