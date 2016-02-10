/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         main.js
 *  Description:  The main rendering file for the React app. Again, no need for all
 *                the different files.
 *
 ******************************************************************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
