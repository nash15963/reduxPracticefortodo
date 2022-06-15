import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import useReducer from './components/feature/user'
import todoSlice from './components/feature/todoList'

const store = configureStore({
  reducer:{
    user:useReducer ,
    todo : todoSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
