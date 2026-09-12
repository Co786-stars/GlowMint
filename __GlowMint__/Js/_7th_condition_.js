/*
What is condition in javaScript?
- Conditions in JavaScript are used to perform different actions based on different situations. They allow you to execute certain blocks of code only if a specified condition is true.
- The most common way to implement conditions in JavaScript is by using conditional statements such as if, else if, else, and switch.

Types of conditional statements in JavaScript:

1. if statement: Executes a block of code if a specified condition is true.
   Example:
        if (condition) {
            // code to be executed if condition is true
        }


2. else statement: Executes a block of code if the same condition is false.
   Example:
        if (condition) {
            // code to be executed if condition is true
        } else {
            // code to be executed if condition is false
        }


3. else if statement: Specifies a new condition to test if the first condition is false.
   Example:
        if (condition1) {
            // code to be executed if condition1 is true
        } else if (condition2) {
            // code to be executed if condition2 is true
        } else {
            // code to be executed if both conditions are false
        }


4. switch statement: Used to perform different actions based on different possible values of a variable or expression.
   Example:
        switch(expression) {
            case value1:
                // code to be executed if expression === value1
                break;
            case value2:
                // code to be executed if expression === value2
                break;
            default:
                // code to be executed if expression doesn't match any case
        }

summary:
- Conditions in JavaScript allow you to control the flow of your program by executing different blocks of code based on whether certain conditions are true or false. 
- The primary conditional statements in JavaScript are: if, else if, else, and switch. 
- Use if to execute code when a condition is true, else to execute code when it is false, else if to check multiple conditions, and switch for multiple possible values of a variable.

Additional points:
- Conditions help your program make decisions dynamically.
- They prevent unnecessary code execution and improve efficiency.
- You can combine conditions using logical operators like &&, ||, and !.
- Nested conditions allow deeper decision-making inside other conditions.
- Switch is cleaner when checking many fixed values instead of multiple if-else blocks.
- Proper use of conditions makes your code readable, structured, and easier to debug.


Example:
let age = 18;
if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You just became an adult.");
} else {
    console.log("You are an adult.");
}
Output: You just became an adult.

*/

// examples

let a = "wizard";
if (a == "wizard") {
    console.log("You are a ", a);
}


// switch case : concept
let match = 15
switch (match) {
    case 10:
        console.log("Day 10");
        break;
    case 15:
        console.log("Day 15");
        break;
    case 30:
        console.log("Day 30");
        break;
    default:
        console.log("Invalid Day");

};


// if, else if, else:concept
// check the number is divisibal of 5 or not ?
let num = Number(prompt("Enter the Number "));
// console.log(num);
if(num%5 === 0) {
  console.log("Yes the number ", num, "is divisibal by 5");
} else {
  console.log("No the number ", num, "is not divisible by 5");
};


// wap which we can gives grade to students according to their score 
// 00 to 29, F
// 30 to 49, E
// 50 to 59, D
// 60 to 69, C
// 70 to 79, B
// 80 to 100,A
let total_maks;
total_marks = Number(prompt("Enter the total marks : "));
if (total_marks >= 0 && total_marks <=29) {
    console.log("Total Marks is ", total_marks, "F");
} else if (total_marks >= 30 && total_marks <= 49) {
    console.log("Total Marks is ", total_marks, "E");
} else if (total_marks >= 50 && total_marks <= 59) {
    console.log("Total Marks is ", total_marks, "D");
} else if (total_marks >= 60 && total_marks <= 69) {
    console.log("Total Marks is ", total_marks, "C");
} else if (total_marks >= 70 && total_marks <= 79) {
    console.log("Total Marks is ", total_marks, "B");
} else if (total_marks >= 80 && total_marks <= 100) {
    console.log("Total Marks is ", total_marks, "A");
} else {
    console.log("Invalid number shoud be b/w 0 to 100");
}

