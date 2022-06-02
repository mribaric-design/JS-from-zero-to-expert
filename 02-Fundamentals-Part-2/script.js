'use strict';

// 031 Strict mode

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) {
//     hasDriverLicence = true;
// }

// if (hasDriversLicence) {
//     console.log('I can drive');
// }

//  strict will not allow to use some words which could be used by the language in the future.
// const interface = 'Audio';
// const private = 282;

/*
// 032 Functions


function logger() {
    console.log('My name is Marko');
}

// Running / invoking / calling a function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/


// Function declaration

const age1 = calcAge1(1993);

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1993);
console.log(age2);


// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1993, 'Marko'));
