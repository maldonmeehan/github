var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
};

exports.Repo.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    $('.showUserName').empty();
    $('.showUserName').append('<h3>Username: '  + response.login + '</h3>');
    // console.log(response);
  }).fail(function(error){
    // console.log(error.responseJSON.Repo);
  });
};
