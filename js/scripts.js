var bookendCapitalize = function(inputSentence){
  var capitalizeFirstLetter = inputSentence.charAt(0).toUpperCase();
  var length = inputSentence.length;
  var capitalizeLastLetter = inputSentence.charAt(length-1).toUpperCase();

  return capitalizeFirstLetter + capitalizeLastLetter; //outputs IE
}

var invert = function(sentence){
  return sentence.split("").reverse().join("");
};

var capitalizeInvert = function(sentence){ //With input "I am a sentence"
  return sentence + invert(bookendCapitalize(sentence)); //output: "I am a sentenceEI"
}

var findMiddle = function(sentence){
  middle = (sentence.length)/2;
  return sentence.charAt(middle) +capitalizeInvert(sentence); //outputs sI am a sentenceEI
}

var totalReverse = function (sentence){

}

var reverseCapitalize = function (inputSentence){
  var capitalizeFirstLetter = inputSentence.charAt(0).toUpperCase();
  var length = inputSentence.length
  var capitalizeLastLetter = inputSentence.charAt(length-1).toUpperCase();

  return capitalizeLastLetter + capitalizeFirstLetter;  //outputs EI
}


var sentence = prompt("Please enter a sentence!"); //use input "I am a sentence"
var result = findMiddle(sentence);
alert(result);
