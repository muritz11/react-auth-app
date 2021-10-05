import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import { Provider } from "react-redux"

const initialState = {
  loggedIn: false,
  err: null,
  success: null,
  redirect: null,
  auth: [],
  users: [{
    email: 'bradley@gmail.com',
    name: 'maurice abuguja',
    occupation: 'web dev',
    phone: '0812983829',
    username: 'dondaddy',
    password: 'dondaddy',
    auth: true
  },{
    email: 'bradley@gmail.com',
    name: 'maurice abuguja',
    occupation: 'web dev',
    phone: '0812983829',
    username: 'dondaddy',
    auth: true
  },{
    email: 'bradley@gmail.com',
    name: 'maurice abuguja',
    occupation: 'web dev',
    phone: '0812983829',
    username: 'dondaddy',
    auth: false
  }]
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: [...state.users, action.data]}
    
    case 'NEW_ERR':
      return { ...state, err: action.data }
    
    case 'NEW_SUCC':
      return { ...state, success: action.data }
    
    case 'LOGGED_IN':
      return { ...state, loggedIn: action.data }
    
    case 'AUTH':
      return { ...state, auth: [...state.auth, action.data] }
    
    case 'REDIRECT':
      return { ...state, redirect: action.data }
    
    default:
      return state;
  }
  
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
