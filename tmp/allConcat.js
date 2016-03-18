/*
1.  Search for User
2.  Get name & avatar
3.  Get all public repos
*/
var User = require('./../js/user.js').User;
var moment = require('moment');
var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/get_repos.js').getRepos;

$(function() {
  $('form#search_user').submit(function(event) {
    event.preventDefault();
    var user_name = $('#user_name').val();
    getRepos(apiKey, user_name);
  });/*end of when ready $ func*/
});/*end of get repos*/
