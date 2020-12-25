var rp = require('request-promise')
var val ='chori';
rp(`https://www.omdbapi.com/?apikey=ccffb766&s=${val}`)
 .then((body)=> {
   var parsedData = JSON.parse(body);
   console.log(parsedData);
 })
 .catch((err)=>{
   console.log(err);
 });