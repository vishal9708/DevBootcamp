//document.getElementById('heading').classList.add("some-class");
//Doing it by jquery=>
$("#heading").append(" Appended text is there!")
$('h1').addClass("someclass");
//$('h1').removeClass("someclass");
$("button").on("mouseenter",function(){
  alert("clicked!!");
  $(this).css("background","pink");
})






















/*
//for all color blinking

function getRandomColor(){
  var color ='#';
  color+=Math.floor(100000+Math.random()*900000);
  return color;
}

setInterval(function(){
  document.querySelector('body').style.backgroundColor=getRandomColor();
}, 500);

//----------------------------------------------------------------------------------------


var isBlue = false;
setInterval(() => {
  if(!isBlue){
    document.querySelector('h1').style.backgroundColor="blue";
  }
  else{
     document.querySelector('h1').style.backgroundColor="red";
  }
  isBlue=!isBlue;
}, 300);
*/