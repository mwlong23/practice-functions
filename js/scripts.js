var bookendCapitalize = function(inputSentence){
  var capitalizeFirstLetter = inputSentence.charAt(0).toUpperCase();
  var length = inputSentence.length;
  var capitalizeLastLetter = inputSentence.charAt(length-1).toUpperCase();
  return capitalizeFirstLetter + capitalizeLastLetter; //outputs IE
}

var reverseCapitalize = function (inputSentence){
  var capitalizeFirstLetter = inputSentence.charAt(0).toUpperCase();
  var length = inputSentence.length
  var capitalizeLastLetter = inputSentence.charAt(length-1).toUpperCase();
  return capitalizeLastLetter + capitalizeFirstLetter;  //outputs EI
}

var invert = function(sentence){ //input "hello"
  return sentence.split("").reverse().join(""); //outputs "olleh"
};

var capitalizeInvert = function(sentence){ //With input "I am a sentence"
  return sentence + invert(bookendCapitalize(sentence)); //output: "I am a sentenceEI"
}

var findMiddle = function(sentence){
  middle = (sentence.length)/2;
  return sentence.charAt(middle) +capitalizeInvert(sentence); //outputs sI am a sentenceEI
}

var sentence = prompt("What is your favorite Sentence."); //use input "I am a sentence"
var result = findMiddle(sentence);
alert(result);

$(document).ready(function() {
  $("img").click(function() {
    alert(sentence);
  });

  $("h1").click(function(){
    alert(findMiddle(sentence));
  });
});
