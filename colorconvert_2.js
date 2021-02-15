"use strict"

function componentToHex(component) {
    let hex = component.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  console.log(rgbToHex(186, 218, 85)); // #bada55
  console.log(rgbToHex(250, 202, 222)); // #facade
  console.log(rgbToHex(192, 255, 238)); // #c0ffee
  console.log(rgbToHex(240, 11, 66)); // #f00b42
  console.log(rgbToHex(192, 222, 37)); // #c0de25
 
  console.log(rgbToHex(12, 2, 17)); // #0c0211
  console.log(rgbToHex(1, 2, 3)); // #010203
  console.log(rgbToHex(9, 0, 37)); // #090025

  //It works