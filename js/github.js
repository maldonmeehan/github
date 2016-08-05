var apiKey = require('./../.env').apiKey;

function Repo(userName){
  this.userName = userName;
}

Repo.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('.showUserName').empty();
    $('.showUserName').append('<h3>Username: '  + response.login + '</h3>');
    $('.showImg').empty();
    $('.showImg').append("<img src=" + response.avatar_url + ">");
    $('.showNumberOfRepos').empty();
    $('.showNumberOfRepos').append('<h3>Number of Repos: ' + response.public_repos + '</h3>');
  }).fail(function(error){
});

  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $('.showRepos').append('<h3>' + 'Repo name: ' + response[i].name + '</h4><p>' + response[i].description + ' <a target="_blank" href="' + response[i].html_url + '"><br> <h4> Repo Link </h4> </a></p>');
    }
    $('.showRepos').append('</ol>');
  }).fail(function(error){
  });
};

exports.repoModule = Repo;
