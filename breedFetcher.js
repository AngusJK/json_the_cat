const args = process.argv.slice(2);

const request = require('request');

let urlStart = 'https://api.thecatapi.com/v1/breeds/search?q=';
let urlComplete = urlStart.concat(args[0]);

request(urlComplete, (error, response, body) => {
  if (error !== null) {
    console.log("Something went wrong. Try again later.");
    return;
  }
  console.log('error: ', error);
  console.log('status: ', response && response.statusCode);
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Sorry. This breed does not appear in our database.");
    return;
  }
  console.log(data[0]['description']);
});