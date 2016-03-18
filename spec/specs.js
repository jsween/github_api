var expect = require('chai').expect;
var User = require('./../js/user.js').User;

describe("Class", function() {
  it("will return the avatar_url property", function() {
    var user_data = {avatar_url: "avatar.com", name: "user_name", public_repos: 15, repos_url: "repos.com"};
    var testUser = new User(user_data);
    expect(testUser.avatar_url).to.be.a('string');
  });
  it("will return the name property", function() {
    var user_data = {avatar_url: "avatar.com", name: "user_name", public_repos: 15, repos_url: "repos.com"};
    var testUser = new User(user_data);
    expect(testUser.name).to.equal("user_name");
  });
  it("will return the name property", function() {
    var user_data = {login: "login", avatar_url: "avatar.com", name: "user_name", public_repos: 15, repos_url: "repos.com"};
    var testUser = new User(user_data);
    expect(testUser.login).to.equal("login");
  });
  it("will return the public_repos property", function() {
    var user_data = {avatar_url: "avatar.com", name: "user_name", public_repos: 15, repos_url: "repos.com"};
    var testUser = new User(user_data);
    expect(testUser.public_repos).to.equal(15);
  });
  it("will return the repos_url property", function() {
    var user_data = {avatar_url: "avatar.com", name: "user_name", public_repos: 15, html_url: "repos.com"};
    var testUser = new User(user_data);
    expect(testUser.repos_url).to.equal("repos.com?tab=repositories");
  });
});
