const insert = (number) => {
    const num = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = num + number;
}

const clean = () => {
    document.querySelector('#result').innerHTML = '';
}

const backspace = () => {
    let result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = result.substring(0, result.length -1);
}

const calculate = () => {
    let result = document.querySelector('#result').innerHTML;

    if (result) {
        document.querySelector('#result').innerHTML = eval(result);
    }
}