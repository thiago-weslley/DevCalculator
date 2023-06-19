const resultElement = document.querySelector('#result');

const insert = (number) => {
    const expression = resultElement.value;
    const lastChar = expression[expression.length - 1];

    if (!isOperator(lastChar) || !isOperator(number)) {
        resultElement.value = expression + number;
    }
}

const clean = () => {
    resultElement.value = '';
}

const backspace = () => {
    let result = resultElement.value;
    resultElement.value = result.substring(0, result.length - 1);
}

const calculate = () => {
    let result = resultElement.value;

    if (result) {
        resultElement.value = eval(result);
    }
}

const isOperator = (char) => {
    return ['+', '-', '*', '/', '.'].includes(char);
}