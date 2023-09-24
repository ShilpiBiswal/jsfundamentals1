/*let js='amazing';
if(js==='amazing')  alert ('javascript is fun');
console.log(40+8+23-10);
console.log("jonas");
console.log(23);

let firstName="bob";
console.log(firstName);
true;

let javaScriptIsFun=true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 243);
console.log(typeof 'shilpi');

javaScriptIsFun='YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age=30;
age=31; //mutating/reassigning age variable

const birthYear=1991;
//birthYear=1990//will show error since its a constant

//const job="loser";

var job ="programmer";
job='teacher';


const now=2046;
const ageShilpi=now-2004;
const ageShiv=now-1999;
console.log(ageShilpi, ageShiv);

const firstName="Shilpi";
const lastname="biswal";
console.log(firstName+ ' ' +lastname);

let x = 10+5;
x+=10;
console.log(x);

//comparison operators output in true or false 

console.log(ageShilpi>ageShiv);
if(ageShiv>ageShilpi)console.log("shiv older");
else console.log("shilpi older");


const firstName="shilpi";
const job="student";
const birthYear=2004;
const year=2023;

const shilpi="I'm "+firstName+", a "+ (year-birthYear)+ " years old"+ " student";
console.log(shilpi);

const shilNew = `I am ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(shilNew);

console.log(`string
multiple
lines`);


const age=15;


if(age>=18){
    console.log("sarah can start driving license ☺️");
}else{
    const yearsleft=18-age;
    console.log(`sarah is too young, wait another ${yearsleft} years`);
}

const birthYear=1991;
let century;
if(birthYear<=2000){
     century=20;
}else{
     century=21;
}
console.log(century)

 
//type conversion
const inputyear="1990";
console.log(Number(inputyear),inputyear);
console.log(Number(inputyear)+18);

console.log(Number('Jonas'));

console.log(String(23),23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23'-'10'); //- triggers conversion
console.log('23'+'10');

let n='1'+1 //output is 11
n=n-1; //output is 10
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('shilpi'));
console.log(Boolean({}));
console.log(Boolean(''));

const money=0;
if(money){
    console.log("dont spend it all");
}else{
    console.log("you should get a job");
}

let height;
if(height){
    console.log("yay! height is defined");
}else{
    console.log("height is undefined");
}


const favourite=Number(prompt("whats your favorite number"));
console.log(favourite);



const hasDriverslicense=true;
const hasGoodVision=true;

console.log(hasDriverslicense && hasGoodVision);
console.log(hasDriverslicense || hasGoodVision);
console.log(!hasDriverslicense);

const shouldDrive=hasDriverslicense && hasGoodVision;

if(shouldDrive){
    console.log("sarah able to drive");
}else{
    console.log("someone else should drive");
}

const istired=true;
console.log(hasDriverslicense && hasGoodVision && istired);

if(hasDriverslicense && hasGoodVision && !istired)
{
    console.log("drive");
}else{
    console.log("dont");
}


let var day=prompt('enter day');
switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy weekend ');
        break;
    default:
        console.log('invalid');
        break;
}
*/

const age=23; //ternary operators
age>=18 ? console.log('i like to drink wine '):
console.log('i like to drink water');

const drink=age>=18? 'wine': 'water';
console.log(drink);

console.log(`i like to drink ${age>=18? 'wine': 'water'}`);

















