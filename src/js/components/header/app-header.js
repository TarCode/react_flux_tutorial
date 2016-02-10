/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         app-header.js
 *  Description:  The header component for the app. Pretty straight forward.
 *
 ******************************************************************************************************/
import React from 'react';

export default () => {
	var headerStyle = {
		backgroundColor: "#000",
		paddingTop: 19,
		paddingBottom: 19,
		textAlign: "center",
    color: "white"
	};

	return (
		<header role="header" className="main-header" style={headerStyle}>
			<div className="container">
				<h1>React and Flux Tutorial</h1>
			</div>
		</header>
	);
}
