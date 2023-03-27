let currentNumber = '';
let currentOperator = '';
let result = '';

function addNumber(number) {
  currentNumber += number;
  document.getElementById('result').value = currentNumber;
}

function addOperator(operator) {
  if (currentOperator !== '') {
    calculate();
  }
  currentOperator = operator;
  result = currentNumber;
  currentNumber = '';
}

function addDecimal(decimal) {
  if (currentNumber.indexOf('.') === -1) {
    currentNumber += decimal;
    document.getElementById('result').value = currentNumber;
  }
}

function calculate() {
  let value1 = parseFloat(result);
  let value2 = parseFloat(currentNumber);
  let calculatedValue;
  switch (currentOperator) {
    case '+':
      calculatedValue = value1 + value2;
      break;
    case '-':
      calculatedValue = value1 - value2;
      break;
    case '*':
      calculatedValue = value1 * value2;
      break;
    case '/':
      calculatedValue = value1 / value2;
      break;
    default:
      calculatedValue = value2;
  }
  currentNumber = calculatedValue.toString();
  currentOperator = '';
  result = '';
  document.getElementById('result').value = currentNumber;
}

function clearResult() {
  currentNumber = '';
  currentOperator = '';
  result = '';
  document.getElementById('result').value = '';
}