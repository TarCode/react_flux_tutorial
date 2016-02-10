/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         serverActions.js
 *  Description:  You would use this file if you're getting data from an external API
 *
 ******************************************************************************************************/
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var actions = {
  receiveAPIData: function(data) {
    AppDispatcher.handleServerAction({
      actionType: appConstants.RECEIVE_API_DATA,
      data: data
    });
  },

  receiveAPIError: function(err) {
    AppDispatcher.handleServerAction({
      actionType: appConstants.RECEIVE_API_ERROR,
      err: err
    });
  }

};

module.exports = actions;
