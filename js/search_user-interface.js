$(function() {
  $('form#search-user').submit(function(event) {
    event.preventDefault();
    var user_name = 'jsween';
    getRepos(apiKey, user_name);
  });/*end of when ready $ func*/
});/*end of get repos*/
