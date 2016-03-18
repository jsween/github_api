var User = require('./../js/user.js').User;

exports.getUserData = function(apiKey, user_name){
  $.get('https://api.github.com/users/' + user_name + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#avatar_image').empty();
    var new_user = new User(response);
    console.log(new_user);
    $('#avatar_image').append(new_user.avatar_url).append('<hr>');
    $('#display_name').text(new_user.name);
    $('#display_login').text(new_user.login).append('<hr>');
    $('#display_num_repos').text(new_user.public_repos).append(' repos');
    $('#display_repo_url').append('<a href="' + new_user.repos_url + '">View Repositories</a>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
    return alert(user_name + ' could not be found.');
  });
};
