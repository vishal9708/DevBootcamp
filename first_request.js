const requestPromise = require('request-promise');
requestPromise("https://jsonplaceholder.typicode.com/users/1")
 .then((body) =>{
    const parsedData = JSON.parse(body);
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
  })
  .catch((err) =>{
    console.log('something went wrong!!', err);
  });