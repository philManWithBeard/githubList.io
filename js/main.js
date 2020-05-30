'use strict';

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function handleUserSubmit() {
  $('.getGithubRepoByUser').submit(function(event) {
    event.preventDefault()
    let githubUser = $('.githubUser').val()
    fetchGithubRepos(githubUser);
  })
}

function fetchGithubRepos(user) {
  fetch(`https://api.github.com/users/${user}/repos`, requestOptions)
    .then(response => response.json())
    .then(result => displayUsersRepos(result))
    .catch(error => console.log('error', error));
}

function displayUsersRepos(result) {
  let answerThing = result.reduce((result, item, index) => {
    result += `<li><a href="${item.svn_url}">${item.name}</a></li>`;
    return result;
  }, '');;
  $(".repos").html(`<ul>${answerThing}</ul>`);
}

handleUserSubmit()
