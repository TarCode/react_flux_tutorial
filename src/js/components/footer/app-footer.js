/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         app-footer.js
 *  Description:  Footer component. Self explanatory.
 *
 ******************************************************************************************************/
import React from 'react';

export default () => {
  var footerStyle = {
    textAlign: "center"
  }
  return (
    <footer id="footer clearfix" style={footerStyle}>
      <div className="container">
        <div className="row">
          <div id="copyright" className="col-md-8" role="copyright">
            <span>TarCode 2016</span>
          </div>
          <div id="credit" className="col-md-4" role="credit">
            <p>Tutorial created by <a href="http://tarcode.github.io">Taariq Isaacs</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
