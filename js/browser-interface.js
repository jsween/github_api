/*
1.  Search for User
2.  Get name & avatar
3.  Get all public repos
*/
var User = require('./../js/user.js').User;
var moment = require('moment');
var apiKey = require('./../.env').apiKey;
var getUserData = require('./../js/get_user_data.js').getUserData;
