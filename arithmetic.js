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

function performFullCalculation(operator,numbers) {
    switch(operator) {
        case '+':
            return total = numbers.reduce(function(accumulator, currentValue) {return accumulator + currentValue;});
            break;
        case '-':
            return total = numbers.reduce(function(accumulator, currentValue) {return accumulator - currentValue;});
            break;        
        case '*':
            return total = numbers.reduce(function(accumulator, currentValue) {return accumulator * currentValue;});
            break;
        case '/':
            var filtered = numbers.filter(function(item) {return item !== 0})
            return total = filtered.reduce(function(accumulator, currentValue) {return accumulator / currentValue;});
            break;
    }
}

exports.calculate = function() {
    const operator = getOperator();
    const numbers = getNumbers(operator);
    const answer = performFullCalculation(operator,numbers);
    console.log('The answer is ' + answer);
}