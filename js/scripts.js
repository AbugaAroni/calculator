
//add fuction
var add = function(number1, number2) {
  return number1 + number2;
};

//subtract function
var sub = function(number1, number2) {
  return number1 - number2;
};

//multiply function
var mult = function(number1, number2) {
  return number1 * number2;
};

//divide function
var divid = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
alert("The addition " + add (number1, number2)+  " " + "The subtraction " + sub(number1, number2) + " " + "The multiplication " + mult(number1, number2) + " " + "The divison " + divid(number1, number2)  );
