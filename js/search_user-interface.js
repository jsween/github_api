$(function() {
  $('form#search_user').submit(function(event) {
    event.preventDefault();
    var user_name = $('#user_name').val();
    getRepos(apiKey, user_name);
  });/*end of when ready $ func*/
});/*end of get repos*/
