/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         AppDispatcher.js
 *  Description:  This is all the Flux dispatcher really is. Basically like broken
 *                telephone (If you remember that silly game).
 *
 ******************************************************************************************************/
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

AppDispatcher.handleServerAction = function(action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action: action
  });
}
module.exports = AppDispatcher;
