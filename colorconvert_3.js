"use strict"

cssToRGB("rgb(192, 13, 1)"); 
cssToRGB("rgb(13, 1, 123)");
cssToRGB("rgb(1, 2, 3)");
cssToRGB("rgb(23, 45, 63)");
cssToRGB("rgb(134, 414, 134)");

function cssToRGB(string){

const splitTheString = string.split(',');

    let r = parseInt(splitTheString[0].substring(4));

    let g = parseInt(splitTheString[1].trim());

    let b = parseInt(splitTheString[2].trim().substring(0, splitTheString[2].indexOf(")")));


    console.log(`${r} ${g} ${b}`);

    //It works
    
}