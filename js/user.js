exports.User = function(user_data) {
  this.login = user_data.login;
  this.name = user_data.name;
  this.avatar_url = '<img src ="' + user_data.avatar_url + '" alt="Avatar image for ' + this.name + '" />';
  this.public_repos = user_data.public_repos;
  this.repos_url = user_data.html_url + '?tab=repositories';
};
