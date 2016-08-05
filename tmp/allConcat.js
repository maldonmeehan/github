var Repo = require('./../js/github.js').repoModule;

$(document).ready(function() {
  var newUser = new Repo();
  $("#formId").submit(function(event) {
    event.preventDefault();
    var userName = $('#userInput').val();
    $('#userInput').val('');
    newUser.getRepos(userName);
  });
});
