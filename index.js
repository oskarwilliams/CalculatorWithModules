const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

function printWelcomeMessage() {
    console.log('Welcome to the calculator! \n ==========================');
}

printWelcomeMessage();
while (true) {
    const calculatorMode = userInput.getNum('\n Which calculator mode do you want? \n  1) Arithmetic \n  2) Vowel counting \n  3) Exit')
    if (calculatorMode == 1) {
        arithmetic.calculate() ;
    } else if (calculatorMode == 2) {
        vowelCounting.calculate() ;
    } else if (calculatorMode == 3) {
        break
    } else {
        console.log('That is not a valid mode')
    }

}