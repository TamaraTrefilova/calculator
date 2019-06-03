var number1 = parseFloat(prompt("Enter your weight in kgs"));
var number2 = parseFloat(prompt("Enter your height in cm"));


var bmi = function(number1, number2) {
 return number1/(number2/100*number2/100);
}

var result = bmi(number1, number2);

alert(result.toFixed(1));
