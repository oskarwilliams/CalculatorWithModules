const userInput = require('./userInput');

function getOperator() {
    return userInput.getString('\n What operator do you want to use?')
}

function getNumbers(operator) {
    const totnum = userInput.getNum('How many numbers do you want to ' + operator + '?'); 
    var numbers = new Array();
    for (i = 0; i <totnum; i++) {
        var j = i+1
        const x1 = userInput.getNum('Enter number ' + j);
        numbers = numbers.concat([x1]);
    }
    return numbers
}

function performOneCalculation(a,b,c) {
    switch(a) {
        case '+':
            return b += c;
            break;
        case '-':
            return b -= c;
            break;        
        case '*':
            return b *= c;
            break;
        case '/':
            return b /= c;
            break;
    
    }
}

function performFullCalculation(operator,numbers) {
    var answer = numbers[0]
    for (var i = 1; i <numbers.length; i++) {
        answer = performOneCalculation(operator,answer,numbers[i])
    }
    return answer
}


exports.calculate = function() {
    const operator = getOperator();
    const numbers = getNumbers(operator);
    const answer = performFullCalculation(operator,numbers);
    console.log('The answer is ' + answer);
}