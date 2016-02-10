/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         AppAPI.js
 *  Description:  This file should be used if you're requesting data from an external API.
 *                Configure the variables to your needs.
 *
 ******************************************************************************************************/
var serverActions = require('../actions/serverActions');
var request = require('superagent');

var endpoint = null;

function getEndpoint() {
  if (!endpoint) {
    if (window.location.host.match( /* your url here */ )) {
      endpoint = 'yourURL'
    } else {
      endpoint = 'http://localhost:3000'
    }
  }
  return endpoint;
}

var AppAPI = {
  get: function(param) {
    request.get(getEndpoint() + '/yourRoute/' + param)
    .set('Accept', 'application/json')
    .end(function(err, response) {
      if (err) return console.error(err);
      if (response.body){
        serverActions.recieveApiData(response.body);
      } else {
        serverActions.receiveApiData(0);
      }
    });
  },

  post: function(param) {
    request.post(getEndpoint() + '/yourRoute/')
    .send(param)
    .end(function(err, response) {
      if (err) return console.error(err);
      window.alert("Successfully Updated")
    });
  }
};

module.exports = AppAPI;
