const readline = require('readline-sync');

getString = function getString(a) {
    console.log(a);
    return readline.prompt();
}

exports.getString = getString;

exports.getNum = function getNum(a) {
    var num = getString(a)
    if (isNaN(num)) {
        console.log('That is not a number, try again');
        return getNum(a)
    } else {
        return +num
    }
}