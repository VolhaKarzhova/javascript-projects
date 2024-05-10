const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(3, str.length+1).concat(str.slice(0,3));
console.log(newString);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original string is ${str}. Modifed string is ${newString}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numberOfLetters = input.question("Step 1: How many letters would you like to relocate? ");
newString = str.slice(numberOfLetters, str.length+1).concat(str.slice(0,numberOfLetters));
console.log(`Original string is ${str}. Modifed string is ${newString}.`);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
numberOfLetters = input.question("Step 2: How many letters would you like to relocate? ");
if (numberOfLetters > str.length) {
    console.log(`Entered value ${numberOfLetters} is too big, so defaulting it to 3`);
    numberOfLetters = 3;
}
newString = str.slice(numberOfLetters, str.length+1).concat(str.slice(0,numberOfLetters));
console.log(`Original string is ${str}. Modifed string is ${newString}.`);