//window.addEventListener('load', getMovieDetails(), false);

function getMovieDetails(){

var rp = require("request-promise");
  //var url;
  
  //var org ="https://www.omdbapi.com/?";
  //var api_key = "apikey=ccffb766&";
  var name = window.document.getElementById('movie_title').value;

  //url = org + api_key + name;
  rp(`https://www.omdbapi.com/?apikey=ccffb766&s=${name}`)
   .then((body)=>{
         var parsed_data = JSON.parse(body);
         console.log(parsed_data);
   })

   .catch((error)=>{
      console.log("error occurs!!!!",error);
   })
}