





//for all color blinking
/*
function getRandomColor(){
  var color ='#';
  color+=Math.floor(100000+Math.random()*900000);
  return color;
}

setInterval(function(){
  document.querySelector('h1').style.backgroundColor=getRandomColor();
}, 500);

----------------------------------------------------------------------------------------
//for blue,red blinking
/*
var isBlue = false;
setInterval(() => {
  if(!isBlue){
    document.querySelector('h1').style.backgroundColor="blue";
  }
  else{
     document.querySelector('h1').style.backgroundColor="red";
  }
  isBlue=!isBlue;
}, 300);*/