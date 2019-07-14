const userInput = require('./userInput');

function performVowelCounter(str) {
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of str) {
        const upperChar = char.toUpperCase();
        if (counts.hasOwnProperty(upperChar)) {
            counts[upperChar]++;
        }
    }
    console.log('\n A: ' + counts['A'] + '\n E: ' + counts['E'] + '\n I: ' + counts['I'] + '\n O: ' + counts['O'] + '\n U: ' + counts['U'])
}

exports.calculate = function() {
    const stringToCount = userInput.getString('\n Please enter a string:')
    console.log('\n The vowel counts are:')
    performVowelCounter(stringToCount)
}