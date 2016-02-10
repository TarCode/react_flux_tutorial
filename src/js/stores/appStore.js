/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         appStore.js
 *  Description:  This file should be used if you're requesting data from an external API.
 *                Configure the variables to your needs.
 *
 ******************************************************************************************************/
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');

var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  finalCounts: []
};

var appStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function() {
    return _store;
  }
});

AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.actionType) {

    case appConstants.ADD_THING:
      var data = action.data;
      _store.finalCounts.push({party: data.party, count: data.count})
      appStore.emit(CHANGE_EVENT);
      break;

    case appConstants.REMOVE_THING:
      var data = action.data;
      _store.finalCounts.splice(data.index, 1);
      appStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = appStore;
