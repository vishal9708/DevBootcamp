const { connected } = require('process');
var request = require('request');
request("", function(error, response, body){
  if(!error && response.statusCode=="200")
  {
    var parsedData = JSON.parse(body);
    console.log(parsedData);
  }
  else
  {
    console.log("something went wrong!!");
  }
});