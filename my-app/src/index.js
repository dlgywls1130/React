import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Libray from './chaper_03/Livray';
import Clock from './chaper_04/Clock';
import CommentList from './chaper_05/CommentList';

ReactDOM.render(
  <React.StrictMode>
    <CommentList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
