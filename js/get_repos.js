exports.getRepos = function(apiKey, user_name){
  $.get('https://api.github.com/users/' + user_name + '/repos' + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; ++i) {
      $('#repo_links').append('<a href="#">' + response[i].name + '</a>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
