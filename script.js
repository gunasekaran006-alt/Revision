// Variable Creation

var firstName = 'Guna';
var firstName = 'Ravi'; // this way dont use beacuse false not identify...
console.log(firstName);


let secondName = 'Guna';
secondName = 'Ranvi';
console.log(secondName);



const thirdName = 'Guna';
console.log(thirdName);
// thirdName = 'Ravi'; // Error - Dont used this way
console.log(thirdName);


// Natures of Variable Keywords
var deposit = 5000;
var deposit = 15000;
console.log(deposit);

// Block scope variable
let atmPin = 1234;
let accountbalance = 500;
atmPin = 1235;
accountbalance = 1500;
console.log(atmPin);
console.log(accountbalance);

// const variables value cannot be changed - FIXED
const nationalty = 'Indian';
// const nationalty = 'American';
// nationalty = 'American';
console.log(nationalty);

// * Hoisting only supports the var keyword
// Flag Hoisting
console.log(tax);
var tax = 18; // undefined

console.log(tax);
let tax = 18; // referenceError

console.log(tax);
const tax = 18; // referenceError