var request = require('request');
request("http://www.googledsfef.com", function(error, response, body)
{
  if(!error)
  {
    console.log("Hey, It's working smoothly!!");
  }
  else{
    console.log("something went wrong!!");
  }
})