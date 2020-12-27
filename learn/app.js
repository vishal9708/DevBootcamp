function validate(){

  const myForm = document.getElementById('myForm');
  myForm.addEventListener("submit",function(event){
    event.preventDefault();
  })

  var name = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  console.log(`username is ${name} and password is ${pass}`);
  if(name)
  {
    alert(`Hello, ${name} how can i help you??`);
    document.getElementById('para').innerHTML=name;
  }
  else{
    alert(`unsuccessfull attemp try once again!!`);
    
  }
}