// BizLogic
var emptyArray = []

var enteredNumber = function(number) {
  if (number % 15 === 0){
    emptyArray.push("pingpong");
    $(".result").text(emptyArray);
  } else if (number % 5 === 0){
    emptyArray.push("pong");
    $(".result").text(emptyArray);
  } else if (number % 3 === 0){
    emptyArray.push("ping");
    $(".result").text(emptyArray);
  }
  else {
    emptyArray.push(number);
    $(".result").text(emptyArray);
  }
};


// UI Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#pingorpong").val());
    var result = enteredNumber(number);
    //enteredNumber(number);
  });
});
