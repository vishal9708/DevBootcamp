$('button').on("click",function(){
  $('button').text("click me to toggle");
  $('.part').slideToggle(1000,function(){
    console.log("slide toggled successfully!!");
  })
});
