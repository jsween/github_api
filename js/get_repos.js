exports.getRepos = function(apiKey, user_name){
  $.get('https://api.github.com/users/' + user_name + '/repos' + '?access_token=' + apiKey + '&sort=created&per_page=100').then(function(response){
    console.log(response);
    $('#repo_links').empty();
    $('#repo_links').append('<h2>Repositories</h2><hr>');
    for(var i = 0; i < response.length; ++i) {
      console.log("response's length is: " + response.length);
      $('#repo_links').append('<div class="links" ><a href="'+ response[i].html_url +'" target="_blank">' + response[i].name + '</a>' + ' - Updated ' + moment(response[i].updated_at).fromNow()).append(response[i].description + '<hr></div>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
