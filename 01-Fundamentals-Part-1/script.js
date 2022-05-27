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