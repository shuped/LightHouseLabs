const requestPromise = require('request-promise');
const fs = require('fs');
const token = require('./secret.js');

const [owner, repo] = process.argv.slice(2);

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName) {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

  function downloadImageByURL(urlForImg, filePath) {
    requestPromise({
      url: urlForImg,
      encoding: null,
    })
      .then((res) => {
        fs.writeFile(filePath, res, (err) => {
          if (err) {
            throw err;
          }
        });
      });
  }

  requestPromise({
    url,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      Authentication: token,
    },
    json: true,
  }).then((response) => {
    console.log(response);
    response.map((contrib) => {
      const filePath = `./avatars/${contrib.login}.jpg`;
      return downloadImageByURL(contrib.avatar_url, filePath);
    });
  });
}

getRepoContributors(owner, repo);
