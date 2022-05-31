/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);

//Varibale name conventions
//camelCase
//Variable name could consist of letters, numbers, "underscore _" and dolar sign $. Variable name cannot start with number
let lastName = 'Ribarić';
let jonas_matilda_1 = 'JM';
// let 1number = 27;
// let function = 27;
let $function = 27;

// It's a bad practice to use name keyword as variable name
let name = 'Jonas';

//Constants to be declared with all uppercase.
let PI = 3.1415;
console.log(PI);

//Boolean value
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof operator
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//Reassign variable

javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);

//Undefined variable will hold value of undefined
let year;
console.log(year);
console.log(typeof year);


//Redeclaring
year = 1991;
console.log(year);
console.log(typeof year);

//typeof bug of null will return objest which is a bug
console.log(typeof null);
*/





/*
//013 Let, Const, Var

//Let - to be used if we wanna mutate variable. And to be used to declaere undefined

let age = 30;
age = 31;

//const - Inmutable variable

const birthYear = 1991;

//const job; - error. const need inital value

//var - to be avoided

var job = 'programmer';
job = 'teacher'


//It's best practice to declare variables
lastName = 'Schmedtmann';
console.log(lastName);  

*/



/*
//Basic Operators

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assigmnet operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // X = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);

*/



/*
// 015 Operator Precedence 

const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSara) / 2
console.log(ageJonas, ageSara, averageAge);
*/





/*
// 016 Coding Challenge #1 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. 

GOOD LUCK 😀  
 */
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);
*/



/*
// 017 Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines')

console.log(`String
multiple
lines`)
*/



/*
// 018 Taking Decisions

const age = 13;
const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('Sara can start drive 🥰')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is to young. Wait another ${yearsLeft} years`)
}

const birthYear = 2012;
let century;

if(birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/*
// 019 Coding chalange #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 140 ;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is greater than John's BMI (${BMIJohn})`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is smaller than John's BMI (${BMIJohn})`)
}
*/


/*
// 020 Type Conversion an Coercion
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old'); // + operator converst number to string 
console.log('23' - '10' - 3); // - operator converst string to number 
console.log('23' * '2'); // * operator convert string to number
console.log('23' / '2'); // / operator convert string to number
console.log('23' > '18'); // > operator convert string to number

let n = '1' + 1;
n = n - 1;
console.log(n);
*/


/*
// 021 Truthy and falsy values

// 5 falsy values - 0, '', undefined, null, NaN

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;

if(money) {
    console.log("Don't spend it all")
} else {
    console.log('You should get a job!')
}

let height;
if(height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is undefined!');
}
*/


/*
// 022 Equality Operators

const age = 18;
 
if(age === 18){
    console.log('You just became an adult (strict)')
}

if(age == '18'){
    console.log('You just became an adult (loose)')  // Loose equality operator should be avoided
}

const favourite = Number(prompt('What is your favorite number?')); 
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log('Cool 23 is amazing number');
} else if(favourite === 7) {
    console.log('7 is also cool number');
} else {
    console.log('Number is not 7 or 23')
}

if(favourite !== 23){
    console.log('Why not 23');
}
*/


/*
// 024 Logicacl Operators

const hasDriversLicence = true; // a
const hasGoodVision = true; // B

const isTired = false; // 

console.log(hasDriversLicence && hasGoodVision); // && AND operator
console.log(hasDriversLicence || hasGoodVision); // || OR operator
console.log(!hasDriversLicence); // ! NOT operator

const shouldDrive = hasDriversLicence && hasGoodVision && !isTired;

if(shouldDrive){
    console.log('Sara is good to drive');
} else {
    console.log('Someone else should drive');
}

console.log(hasDriversLicence && hasGoodVision && isTired); // && AND operator
*/




//025 Coding challenge #3

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 90;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 90;

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log('Doplhins average: ', dolphinsAverageScore);
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log('Koalas average: ', koalasAverageScore);

if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("It's a draw");
} else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log('Dolphins wins!');
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log('Koalas wins!');
} else {
    console.log('There is no winner!')
}