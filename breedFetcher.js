const request = require('request');
//const fs = require('fs');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log('error: ', error);
  console.log('status: ', response && response.statusCode);
  console.log("body: ", body);
});