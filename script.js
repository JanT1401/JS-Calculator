const display = document.getElementById('display');
let result = 0, calcWay = '', upcomingNum = null;

function clearDisplay(){
    display.textContent = 0;
    document.querySelector('.key:nth-child(1)').textContent = 'AC';
    result = 0, calcWay = '';
}

function appendToDisplay(input){
    document.querySelector('.key:nth-child(1)').textContent = 'C';
    if(input === '+/-'){
        result *= -1;
    }
    else if(input === '%'){
        result /= 100;
    }
    else if(input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6' || input === '7' || input === '8' || input === '9' || input === '0'){
        calcWay = calcWay.concat(input);
        result = eval(calcWay);
        console.log(result);
    }
    else {
        if(result === 0){
            display.textContent = 'Error';
            pass
        }
        else {
            calcWay = String(result) + input;
        }
    }
    display.textContent = result;
}