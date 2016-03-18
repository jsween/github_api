$(function(){
  $('form#search-user').submit(function(event) {
    event.preventDefault();

    var user_name = $('#user_name').val(); //move into submit

    var data = getRepos(apiKey, user_name);
    var new_user = new User(data);
    console.log('The new user object is: ' + new_user);
  }); //end of submit form
}); //end of when ready
