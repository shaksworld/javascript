const firstNumber = parseFloat(prompt("Please Enter Your First Number: "));
const operator = prompt("Please Enter Your Value(pick =, -, * or /): ");
const secondNumber = parseFloat(prompt("Please Enter Your Second Number: "));
if(operator == '+') {
    result = firstNumber + secondNumber;
}
else if (operator == '-') {
    result = firstNumber - secondNumber;
}
else if (operator == '*') {
    result = firstNumber * secondNumber;
}
else {
    result = firstNumber / secondNumber
}
window.prompt("Your result is " + result)