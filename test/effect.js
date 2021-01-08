$('button').on("click",function(){
  $('div').fadeToggle(1000,function() {
    console.log("fade is successfully done!");
  });
})