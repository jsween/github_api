exports.getRepos = function(apiKey, user_name){
  $.get('https://api.github.com/users/' + user_name + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    return response;
  }).fail(function(error){
    console.log(error.responseJSON.message);
    return alert(user_name + ' could not be found.');
  });
};
