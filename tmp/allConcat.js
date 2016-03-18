/*
1.  Search for User
2.  Get name & avatar
3.  Get all public repos
*/
var User = require('./../js/user.js').User;
var moment = require('moment');
var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/get_repos.js').getRepos;

$(function(){
  var user_name = 'jsween'; //move into submit
  $('form#search-user').submit(function(event) {
    event.preventDefault();


  }); //end of submit form
  getRepos(apiKey, user_name);
}); //end of when ready
