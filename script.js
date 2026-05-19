// Arithmetic operator
let a = 0;
let b = 10;
console.log(a+b); // 10 - Addition operator
console.log(a-b); // -10 - Subtraction operator
console.log(a*b); // 0 -  Multipilcation operator
console.log(b/a); // ~ Infinity - Division operator
console.log(a/b); // 0 - Division operator
// ***Future Topic:
let c = 9;
let d = 2;
console.log(c%d); // 1 Remainder - Modulus operators
let base = 2; // (Base)
let power = 3; // (Exponent)
console.log(base ** power); // 8 - Exponentiation operators

// Assignment operator
const name = "gk"; // Basic Assignment
// pre-increment | post-increment
let num = 10;
num += 18; // pre-increment - 28
console.log(num);

let age = 13;
age =+ 18; // post-increment - 18
age = 18; // post-increment - 18 ( generally this type common used)
console.log(age);


// Comparison Operator
let eligibleAge = 18; 
let userAge = 28;
console.log(userAge < eligibleAge ); // false - lesser than
console.log(userAge > eligibleAge ); // true - greater than
console.log(userAge >= eligibleAge); // true - greater than or equal
console.log(userAge <= eligibleAge); // false - lesser than or equal

// == | ===
// == (double equal to checks the value)
// === (triple equal to checks the value and data-type)
let myNumber = 18; 
let myString = "18";
console.log(myNumber == myString); // type coercion
console.log(myNumber === myString); // Strict Equality - mostltly preferrable - best way 

// Ternary operator
// ? -> true block : -> false block
Type:1
let loginIn = true;
loginIn ? console.log("login successfully")
: console.log("please login");
Type:2
let mark = 340;
// mark >=345 ? console.log("pass")
// : console.log("fail");
let result = mark >=345 ? "Pass" : "Fail"
console.log(result);
Type:3
let mail = "guna@gmail.com"
mail === "guna@gmail.com" ? console.log("Email Register SuccessFully")
: console.log("Check Your Email");

// Expressions
let userName = "gk";
console.log("You're successfully logged in" + userName); // You're successfully logged ingk - avoid this method
console.log("You're successfully logged in", userName); // You're successfully logged in gk - avoid this method
// backtricks (``) - used this way only global standard
// curly brackets {}
console.log(`You're Successfully Logged in ${userName} Welcome Back `);//