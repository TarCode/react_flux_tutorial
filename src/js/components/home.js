/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         home.js
 *  Description:  The home page component
 *
 ******************************************************************************************************/
import React from 'react';
import { Link } from 'react-router';
export default class Home extends React.Component {

  constructor(props) {
    super( props );
  }

  // This will be called when the user clicks on the login button
  login(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container text-center">
        <div className="home-login">
          <h1>Enter the tutorial</h1>
          <Link to={'/dashboard/test'} className="btn btn-default btn-block">TEST</Link>
          <hr></hr>
        </div>
      </div>
    );
  }
}
