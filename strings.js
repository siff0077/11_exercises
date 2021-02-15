"use strict";


const navn1 = "Simon";
const drink1 = "Pepsi Max";


//kan også sættes direkte i console.log'en
const tekst1 = `Hello ${navn1}, would you like a ${drink1}?`;

console.log (tekst1);


//exercise 1 (Strings 5.1)
const navn2 = "Siff";
const dyr = "cat";
const kattenavn = "Numnum";


////for at lave linjeskift, så kunne man også have skrevet \n
console.log(`My name is ${navn2}
I have a ${dyr} called ${kattenavn}`);

//Fortæller hvad første bogstav i navnet er i konsollen
const letter = navn2[0];
console.log(`the first letter of ${navn2} is ${letter}`);


//exercise 2 (Strings 5.2)
const navn3 = "Albus Percival Wulfric Brian Dumbledore";

const totalLen = navn3.length;

const letter1 = navn3[1];
const letter6 = navn3[6];

const answers = (`${navn3} is ${totalLen} characters long.
The second and sixth letter is ${letter1} and ${letter6}.
The first D and the last E in "Dumbledore" has index ? and ?.`);

console.log(answers);


//exercise 3.1 (Strings 5.3)
const str1 = "   there is    space here \n   ";
const str2 = str1.trim();
//trim fjerner mellemrum/space foran og bagved teksten i stringen (trimmer enderne af teksten)
console.log(str2);

//exercise 3.2 (Strings 5.3)
const fuldenavn = "Siff Leva Jensen";
const fornavn = fuldenavn.substring(0, 4);
//tager en bid af en tekst ud fra indextallet
//vi kan se i konsollen, at der ikke er noget mellem efter Siff, da 'substring' stopper lige inden det sidste index, som man angiver
console.log(`_${fornavn}_`);

//exercise 3.3 (Strings 5.3)
const albus = navn3.substring(0, 5);
const dumb = navn3.substring(29);
const wulf1 = navn3.substring(15, 22);
const wulf2 = navn3.substring(14, 22);
const ian = navn3.substring(25, 28);
const bus = navn3.substring(2, 5);

console.log(`${albus}
${dumb}
${wulf1}
${wulf2}
${ian}
${bus}`);

