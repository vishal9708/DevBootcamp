var array=[];
var value = prompt("What would you like to do?");



while(value!="quit"){
  if(value=="new"){
    var task = prompt("Enter your to do?");
    array.push(task);
  }
  else if(value=="list"){
    console.log(array);
  } 
}