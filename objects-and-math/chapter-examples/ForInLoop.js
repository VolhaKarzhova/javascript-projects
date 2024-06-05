let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (item in tortoiseOne) {
   console.log(item);
}

console.log("experiments below");
console.log(Math.floor(-3.87));
console.log(Math.random(-3.87));
console.log(Math.round(-3.87));
console.log(Math.trunc(-3.87));



let num = Math.floor(Math.random()*10);

console.log(num + " from 0 to 9");


let num1 = Math.round(Math.random()*10);

console.log(num1 + " from 0 to 10");