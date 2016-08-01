var Memory = require('./../js/memory.js').memoryModule;

$(document).ready(function(){
  var count = 0;
  var array = [];

  $(".image").click(function(event){
    console.log(($(this).attr('value')));

    event.preventDefault();
    count += 1;
    $(this).children().show();
    if (count == 2){
      $(".image").children().hide();
      count = 0;
    }

  });

});
