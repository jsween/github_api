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
  $('form#search-user').submit(function(event) {
    event.preventDefault();

    var user_name = $('#user_name').val(); //move into submit

    var data = getRepos(apiKey, user_name);
    var new_user = new User(data);
    console.log('The new user object is: ' + new_user);
  }); //end of submit form
}); //end of when ready
