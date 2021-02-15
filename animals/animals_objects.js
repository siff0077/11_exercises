"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}


const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
        

        const firstSpace = jsonObject.fullname.indexOf(" ");
        const lastSpace = jsonObject.fullname.lastIndexOf(" ");
        const name = jsonObject.fullname.split(" ")[0].trim();
        const desc = jsonObject.fullname.substring(firstSpace, lastSpace).trim();
        const type = jsonObject.fullname.split(" ")[3].trim();
        const age = jsonObject.age; 

        const animal = Object.create(Animal);
        animal.name = name;
        animal.type = type;
        animal.desc = desc;
        animal.age = age;
        allAnimals.push(animal);

        // TODO: MISSING CODE HERE !!!

        

       console.log(name, type, desc, age);
    });

    displayList();
}

function displayList() {
    console.log("displayList");
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );

}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );

    console.log("displayAnimal");
}


