/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         app-template.js
 *  Description:  The basic layout of the app with header and footer (No need to
 *                split everything up into so many different files. It's just a habit
 *                of mine)
 *
 ******************************************************************************************************/
import React from 'react';
import Header from './components/header/app-header';
import Footer from './components/footer/app-footer';

export default ( props ) => {
	return (
		<div>
      <Header></Header>
			{ props.children }
      <Footer></Footer>
    </div>

	)
}
