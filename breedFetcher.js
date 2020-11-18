//const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    
    const data = JSON.parse(body);
    const desc = data[0]['description'];

    if (!error) callback(null, desc);

    
    

  
    //return 'error: ', error;
    //console.log('status: ', response && response.statusCode);
    
    //if (data[0] === undefined) {
      //return "Sorry. This breed does not appear in our database.";
    //}
    //console.log(data[0]['description']);
  });
};

module.exports = { fetchBreedDescription };

/*

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./datum/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

module.exports = breedDetailsFromFile;

*/