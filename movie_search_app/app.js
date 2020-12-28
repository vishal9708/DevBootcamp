$(document).ready(function(){
var url = "https://www.omdbapi.com/?apikey=ccffb766&s=star";

   $.getJSON(url, function(data) {
      console.log(data);
   })
});