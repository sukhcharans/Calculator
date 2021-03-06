let result;
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator: ');

switch(operator){
    case '+':
         result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
         result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
         result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
         result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);
        break;
    default:
        alert('Invalid operator');
        break;
}