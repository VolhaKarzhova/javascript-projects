let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};



// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

const animals = [superChimpOne, salamander, chimpanzee, dog, waterBear];

// Print out the relevant information about each animal.

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

console.log(crewReports(dog));

// Start an animal race!

function fitnessTest(animals) {
   let results = [];
   for (let index = 0; index < animals.length; index++) {
      let steps = 0;
      let count = 0;
      while (steps < 20) {
         steps += animals[index].move();
         count++;
      }
      results.push(`${animals[index].name} took ${count} turns to take 20 steps.`)
   }
   return results;
}

console.log(fitnessTest(animals));
