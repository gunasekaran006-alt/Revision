// Conditional Statement

// if else
type: 1
let age = 17;
if (age >= 18) {
    console.log("You're eligible to vote");
    console.log("Please collect your voter id proof");
} else {
    console.log("You are not eligible to vote");
}
type: 2
let marks = 30;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Interview Scenario (product companies interview question)
// optimized code
// nested conditions
let score = 43;
if (score >= 50) {
    // grade checking
    if (score >= 90) {
        console.log("Grade A");
    }
    else if (score >= 75) {
        console.log("Grade B");
    }
    else {
        console.log("Grade C");
    }
} else {
    console.log("Fail");
}
// Alternate method:(Guard Clause)
function checkGrade(score) {
if (score < 50) {
    return "Fail";
}
if (score >=90) return "Grade A";
if (score >=75) return "Grade B";
return "Grade C"
}
console.log(checkGrade(43)); // Fail
console.log(checkGrade(85)); // Grade B

// switch case
let day = 2; // monday
switch(day){
    case 1:
        console.log("Sunday");
        break;    
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid Day");
}


// Looping Statement:-
// 1) initial value
// 2) conditions
// 3) iteration
// for loop : (type: 1) - Definite Loop
for(let i=0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4 
}

// while loop (type: 2) - Indefinite Loop
let j = 1; // initial value
while(j <=5) { // condition
    console.log(j); //  1 2 3 4 5
    j++;  // iteration
}
//more example
let playerAlive = true;
while (playerAlive === true){
if(score === 0){
    playerAlive = false;
}
}

// Do-While loop (type: 3)
let k = 1;
do{
    console.log(k);
    k++;
}while(k <=10);

// Industry scenario
// User Authentication - Login validation
let username = "narasimhan";
let password = "narasimhan@321";
let enteredUsername = "narasimha";
let enteredPassword = "narasimhan@321";
// Logical Operator (AND)
if(enteredUsername === username && enteredPassword === password){
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}


