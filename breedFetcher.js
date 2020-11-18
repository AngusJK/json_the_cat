const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error === null) {
      if (body === '[]') {
        callback(null, "Sorry. We couldn't find that breed.");
      } else {
        let data = JSON.parse(body);
        let desc = data[0]['description'];
        callback(null, desc);
      }
    } else {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
