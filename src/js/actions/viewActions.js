/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         viewActions.js
 *  Description:  This file contains the actions you would use in directly from
 *                the component you are manipulating data from.
 *
 ******************************************************************************************************/
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
//var AppAPI = require('../apis/AppAPI');

var viewActions = {
  addThing: function(storeData) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.ADD_THING,
      data: storeData
    });
    //AppAPI.post(storeData);
  },
  removeThing: function(index) {
    AppDispatcher.handleViewAction({
      actionType: appConstants.REMOVE_THING,
      data: index
    });
  }

};

module.exports = viewActions;
