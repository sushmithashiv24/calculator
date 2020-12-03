// alert('Hello Geeks!');
const initialValue = 0;
let currentResult = initialValue;
let logEntries = [];

// function add(num1, num2) {
//     const result = num1 + num2;
//     // alert('The result is: ' + result);
//     return result;
// }

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, enteredNumber) {
    calDescription = `${resultBeforeCalc} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calDescription); // from vendor file
}

function userEntries(operator, prevValue, newValue, result) {
    const logEntry = {
        operator: operator,
        prevValue: prevValue,
        userEnteredValue: newValue,
        result: result,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculate(operatorType) {
    let enteredNumber = getUserInput();
    let initialResult = currentResult;


    if (operatorType !== 'ADD' && operatorType !== 'SUBTRACT' && operatorType !== 'MULTIPLY' && operatorType !== 'DIVIDE' || //enteredNumber === 0 
        !enteredNumber) {
        return;
    }

    let operatorSymbol = '';
    if (operatorType === 'ADD') {
        currentResult += enteredNumber;
        operatorSymbol = '+';
    } else if (operatorType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operatorSymbol = '-';
    } else if (operatorType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operatorSymbol = '*';
    } else if (operatorType === 'DIVIDE') {
        currentResult /= enteredNumber;
        operatorSymbol = '/';
    }


    createAndWriteOutput(operatorSymbol, initialResult, enteredNumber);
    userEntries(operatorType, initialResult, enteredNumber, currentResult);
}

function add() {
    // plus will convert string to a number
    // currentResult = currentResult + +userInput.value;

    // calDescription = `${currentResult} + ${enteredNumber}`;
    // currentResult = currentResult + enteredNumber;
    calculate('ADD');
}


// currentResult = currentResult + 1;
// Same as 
// currentResult ++;

// currentResult++; Output: 0; We get result before the chnage
// ++currentResult; Output: 1; We get result after the chnage

function subtract() {
    // let enteredNumber = getUserInput();
    // let initialResult = currentResult;
    // // currentResult = currentResult - enteredNumber;
    // currentResult -= enteredNumber;
    // createAndWriteOutput('-', initialResult, enteredNumber);
    // userEntries('SUBTRACT', initialResult, enteredNumber, currentResult);
    calculate('SUBTRACT');
}

function multiple() {
    // let enteredNumber = getUserInput();
    // let initialResult = currentResult;
    // currentResult *= enteredNumber;
    // createAndWriteOutput('*', initialResult, enteredNumber);
    // userEntries('MULTIPLY', initialResult, enteredNumber, currentResult);
    calculate('MULTIPLY');

}

function divide() {
    // let enteredNumber = getUserInput();
    // let initialResult = currentResult;
    // currentResult /= enteredNumber;
    // createAndWriteOutput('/', initialResult, enteredNumber);
    // userEntries('DIVIDE', initialResult, enteredNumber, currentResult);
    calculate('DIVIDE');
}
// add(10, 10);
// currentResult = add(2, 3);

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiple);
divideBtn.addEventListener('click', divide);
// let outputString = `( ${initialValue} + 10) * 2 / 4`;
