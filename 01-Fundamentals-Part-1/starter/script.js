/*
let js = 'amazing';
console.log(40 + 8 + 23 -10);
console.log('jonas');

let firstName = 'jonas';
console.log(firstName);

let person = 'jonas';
let PI = 3.14;
// variable name convesion
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);
console.log(myCurrentJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999
console.log(typeof year);
*/
// variable declarations
/*
let age = 19;
age = 18;
console.log(age);
const birthYear = 2019;
birthYear = 2001;
console.log(birthYear);
*/
// math operators
/*
const now = 2037;
const ageJonas = now - 2012;
const ageSarah = now - 2019;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, ageJonas ** 2);
const firstName = 'jonas';
const lastName = 'richard';
console.log(firstName + ' ' + lastName);
// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 15 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 2012 > now - 2019);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
 //console.log(20 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x , y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
// coding challenge
/*const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.92;
*/

/*const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;


const bmiMark = (markMass) / (markHeight ** 2);
const bmiJohn = (johnMass) / (johnHeight ** 2);

const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);
*/
/*
const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " +  firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// Template lateral
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!,`;
console.log(jonasNew);
console.log(`Just a regular string...`);
console.log(`string
mutilple
lines`);
*/
// if statement
/*const age = 15;
if (age >= 18) {
    console.log('sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;
*/
/*const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.92;

const bmiMark = (markMass) / (markHeight ** 2);
const bmiJohn = (johnMass) / (johnHeight ** 2);
let higherBMI;

if (bmiMark > bmiJohn) {
    higherBMI = `mark's BMI (${bmiMark}) is higher than john's (${bmiJohn})!`;
} else {
    higherBMI = `john BMI  (${bmiJohn})is higher than mark's (${bmiMark})`;
}
console.log(bmiMark, bmiJohn);
console.log(`${higherBMI}`);
*/
// type conversion and coercion
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('jonas'));
console.log(typeof(NaN));
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + 'years old');
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/
// 5 falsy values: 0, "", undefined, null, NAN
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ");
} else {
    console.log('you should get a job!');
}

let height = 123;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log('height is UNDEFINED');
}
*/
/*
const age = '18';
if (age === 18) console.log('You just became an adult:D (strict)');

if (age == 18) console.log('You just become an adult:D (loose)');

const favourite = Number(prompt('what is you favourite number?'));
console.log(favourite);
console.log(typeof(favourite));

if (favourite === 23) {
    console.log('cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also cool number')
} else if (favourite === 9) {
    console.log('9 is also cool number!')
}
else {
    console.log('Number is not 7 0r 23 or 9')
}

if (favourite != 23) {
    console.log('why not 23')
}
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/*if (hasDriversLicense && hasGoodVision) {
    console.log('sarah is able to drive')
} else {
    console.log('someone else should drive')
}
*/
/*
const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('sarah is able to drive')
} else {
    console.log('someone else should drive')
}
*/

// calculate the average score for each team 
/*
const dophinsScore_1 = 97 ;
const dophinsScore_2 = 112 ;
const dolphinScore_3 = 80;
const koalasScore_1 = 109;
const koalasScore_2 = 95;
const koalasScore_3 = 50;
const averageDophins = Number(dophinsScore_1 + dophinsScore_2 + dolphinScore_3) / (3);
const averageKoalas = Number(koalasScore_1 + koalasScore_2 + koalasScore_3) / (3);

// winner of competition
if (averageDophins > averageKoalas && averageDophins >= 100) {
    console.log('winer is dophins')
} else if (averageDophins === averageKoalas && averageDophins >= 100 && averageKoalas >= 100) {
    console.log('its a draw')
}
else if ( averageDophins < averageKoalas && averageKoalas >= 100) {
    console.log('koala is the winner')
} else {
    console.log('no one wins the trophy')
}
*/
// switch
/*const day = 'thursday';
switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meet up');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;  
    case 'wednesday' :
    case 'thursday'  :
        console.log('write code examples');
        break;
    case 'friday' :
        console.log('record videos');
        break;
    case 'saturday' :
    case 'sunday' :    
        console.log('enjoy the weekend');  
        break;
    default:
        console.log('not a valid day');      

}
*/
/*const day = 'thursday';
if (day === 'monday') {
    console.log('plan course structure')
} else if (day === 'tuesday') {
    console.log('prepare theory videos')
} else if (day === 'wednesday' || day ==='thursday') {
    console.log('write code examples')

} else if (day === 'friday') {
    console.log('record videos')
} else if (day === 'saturday' || day ==='sunday') {
    console.log('enjoy the weekend')
} else {
    console.log('not a day')
}
*/
/*
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

console.log(`I'm ${2037 - 1991} years old.`)
*/

//const age = 23;
/*age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink water');
*/
/*
const diff = age >= 18 ? 'wine' : 'water';
console.log(diff);

let drink2;
if (age >= 10) {
    drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
/*const bill = 430;
let tip;
 const tip1 = bill >= 50 && bill <= 300 ? console.log(tip = bill * 0.15) : console.log(tip = bill * 0.2);
 console.log(`${bill} ${ bill + tip}`);
 */















 




























































 


       
