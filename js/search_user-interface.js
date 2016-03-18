$(function(){
  var user_name = 'jsween'; //move into submit
  $('form#search-user').submit(function(event) {
    event.preventDefault();


  }); //end of submit form
  getRepos(apiKey, user_name);
}); //end of when ready
