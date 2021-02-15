"use strict"

hexToRGB("#c0ffee"); 
hexToRGB("#bada55"); 
hexToRGB("#facade"); 
hexToRGB("#f00b42"); 
hexToRGB("#c0de25"); 


function hexToRGB(string){
    let r = parseInt(string.substring(1, 3), 16);
    let g = parseInt(string.substring(3, 5), 16);
    let b = parseInt(string.substring(5, 7), 16);

    console.log(`${r} ${g} ${b}`);
}

//It works
