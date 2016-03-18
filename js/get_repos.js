var User = require('./../js/user.js').User;

exports.getRepos = function(apiKey){

  $(function() {
    $('form#search-user').submit(function(event) {
      event.preventDefault();
      var user_name = 'jsween';
      $.get('https://api.github.com/users/' + user_name + '?access_token=' + apiKey).then(function(response){
        console.log(response);
        var new_user = new User(response);
        console.log('the new user is: ' + new_user);
      }).fail(function(error){
        console.log(error.responseJSON.message);
        return alert(user_name + ' could not be found.');
      });
    });
  });/*end of when ready $ func*/
};/*end of get repos*/
