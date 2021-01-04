var todos = ["vishal"];
var input = prompt("What would you like to do?");

  while(input!="quit"){
    if(input=="new"){
      var value = prompt("Enter to do?");
      todos.push(value);
    }
    else if(input=="list")
    {
      todos.forEach(function(todo,i){
        console.log(i+": "+todo);
      })
    }
    else if(input=="delete")
    {
      console.log(`Todo Removed is: ${todos.pop()}`);
    }
    var input = prompt("What would you like to do?");
  }
  console.log("OK, you quit the app");

