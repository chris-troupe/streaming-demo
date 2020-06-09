// Created by: Chris Troupe 
// Date Modified: June 9th
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import MainApp from './containers/MainApp.js'



ReactDOM.render(
  <React.StrictMode>
    <div> 
      <MainApp/> 
    </div> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
