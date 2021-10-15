'use strict';

// (1) Use an object literal notation to combine the following
//     variables into an object and store it in "animalObject"
let animalType = "dog";
let animalLegs = 4;
let animalSpeak = function(){ return "woof" };

let animalObject;


// This should print out the animal's details correctly
console.log(`The ${animalObject.animalType} has ${animalObject.animalLegs} legs and says ${animalObject.animalSpeak()}!`);


// (2) Create an object constructor for a "Worker" that
//     takes the following parameters:
//     - name
//     - age
//     - job


// (3) Convert the following variables into an array of
//     equivalent Worker objects using the constructor
//     you created above
let bobName = "Bob";
let bobAge = 20;
let bobJob = "Barista";

let georgeName = "George";
let georgeAge = 30;
let georgeJob = "Chef";

let saraName = "Sara";
let saraAge = 25;
let saraJob = "Programmer";

let samName = "Sam";
let samAge = 27;
let samJob = "Pilot";


// (4) Use a loop to console log everybody's name, age, and job
//     that exists in the array you created