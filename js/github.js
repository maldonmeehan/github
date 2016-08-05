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

  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++){
      $('.showRepos').append('<h3>' + 'Repo name: ' + response[i].name + '</h4><p>' + response[i].description + ' <a href="' + response[i].html_url + '"><br> <h4> Repo Link </h4> </a></p>');
    }
    $('.showRepos').append('</ol>');
  }).fail(function(error){
  });
};
