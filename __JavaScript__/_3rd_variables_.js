/*
Variables in JavaScript?
- Variables are like containers that store data values.
- There are three ways to declare variables in JavaScript: using var, let, or const.
- Each has its own characteristics and use cases:
    var:
    The old way to declare variables.
    It has function scope and can be redeclared and updated.
    example: var x = 5; var x = 10; // This is allowed with var

    let: 
    The modern way to declare variables. 
    It has block scope and can be updated but not redeclared within the same scope.
    example: let y = 5; y = 10; // This is allowed with let

    const:
    Used to declare constants. 
    It has block scope and cannot be updated or redeclared. 
    The value must be assigned at the time of declaration.
    example: const z = 5; // z = 10; // This will cause an error

summary :
- Use var for function-scoped variables (older code).
- Use let for block-scoped variables that may change.
- Use const for block-scoped constants that won't change.
- var variables are function-scoped, meaning they are accessible within the function they are declared in.
- let and const variables are block-scoped, meaning they are only accessible within the block (enclosed by {}) they are declared in.
- const variables must be initialized at the time of declaration and cannot be reassigned later.
- let variables can be declared without initialization and can be reassigned later.
- let and const were introduced in ES6 (ECMAScript 2015) to provide better scoping rules compared to var.
- let variables can be updated but not redeclared in the same scope, while const variables cannot be updated or redeclared.

Simple way to remember:
- var = function scope, can be redeclared and updated.
- let = block scope, can be updated but not redeclared.
- const = block scope, cannot be updated or redeclared.


Variables naming rules :
- Must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
- Subsequent characters can also include digits (0-9).
- Cannot be a reserved keyword (like var, let, const, function, etc.).
- Case-sensitive (myVar and myvar are different).
- Cannot contain spaces or special characters (except _ and $).
    Examples:
    var myVariable = 10;
    let another_variable = 20;
    const $constantValue = 30;
*/



myVariable = 10;   // if we not declar let/const/var before variable name , it will be treated as var by default
$constValue = "wizard"; // so for best practice use strict mode to avoid this issue to enhance code quality
console.log(myVariable);
console.log($constValue);

"use strict";  // Enabling strict mode. It helps catch common coding mistakes and "unsafe" actions such as defining global variables unintentionally.
myVar = 15.10; // Remember, "use strict mode"  needs to put at the top of the file to work for entire file or top of function to work inside function only 
console.log(myVar);



// Basic example of let/var/const
"use strict"; // enabling strict mode for entire file alway give at top of the file like on line 1st for proper code quality
var variable1 = "I am a var variable"; // older way not recommended now / old keyword, avoid using it in modern js code
let variable2 = "I am a let variable"; // modern way to declare variable / use for variables that can change later.
const variable3 = "I am a const variable"; // constant variable value cannot be changed / use for values that should not change.
console.log(variable1);
console.log(variable2);
console.log(variable3);




//function scope example of var or use strict mode
function fun() {
    "use strict"; // enabling strict mode inside function top only then it will work
    var anothervar = "wizardry";  // no error are generate here because var is function scoped
    urVariable = 50;          // ❌ error will be generate here because urVariable is not declared with
    console.log(urVariable); //let/const/var in strict mode
    console.log(anothervar);
}
fun(); // function call 

console.log(anothervar); // ❌ error will be generate here because anothervar is function scoped.




/*
EXTAR NOTE : -
- JavaScript is dynamically typed → variables don’t have fixed types.
- const just means the variable cannot be reassigned (the value is constant).
- The value itself can be any type: number, string, boolean, object, etc.
- So const anotherconst = "magic"; is perfectly valid — it stores a string.
- In strict mode, if you try to assign a value to a variable that hasn't been declared 
  with var, let, or const, it will throw an error.
*/

