const insert = (number) => {
    const resultElement = document.querySelector('#result');
    const expression = resultElement.innerHTML;
    const lastChar = expression[expression.length - 1];

    if (!isOperator(lastChar) || !isOperator(number)) {
        resultElement.innerHTML = expression + number;
    }
}

const clean = () => {
    document.querySelector('#result').innerHTML = '';
}

const backspace = () => {
    let result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = result.substring(0, result.length - 1);
}

const calculate = () => {
    let result = document.querySelector('#result').innerHTML;

    if (result) {
        document.querySelector('#result').innerHTML = eval(result);
    }
}

const isOperator = (char) => {
    return ['+', '-', '*', '/', '.'].includes(char);
}