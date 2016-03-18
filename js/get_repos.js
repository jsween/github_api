var User = require('./../js/user.js').User;

exports.getRepos = function(apiKey, user_name){

  $(function() {
    $('form#search-user').submit(function(event) {
      event.preventDefault();
      $.get('https://api.github.com/users/' + user_name + '?access_token=' + apiKey).then(function(response){
        console.log(response);
        var new_user = new User(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
        return alert(user_name + ' could not be found.');
      });
    });
  });/*end of when ready $ func*/
};/*end of get repos*/
