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
- The primary conditional statements in JavaScript are if, else if, else, and switch.
- Use if to execute code when a condition is true, else to execute code when it is false, else if to check multiple conditions, and switch for multiple possible values of a variable.

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

let a = "wizard";
if (a == "wizard") {
    console.log("You are a ", a);
}

