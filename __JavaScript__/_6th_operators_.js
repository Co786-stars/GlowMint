// what is operators in JavaScript?
/* 
Operators are special symbols or keywords in JavaScript that perform operations on one or more operands (values or variables) to produce a new value. 
They are used to manipulate data and perform calculations, comparisons, logical operations, and more.
JavaScript supports various types of operators, including:
1. Arithmetic Operators: Used for mathematical calculations.
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%)
   - Exponentiation (**)
   - Increment (++)
   - Decrement (--)

2. Assignment Operators: Used to assign values to variables.
   - Assignment (=)
   - Addition assignment (+=)
   - Subtraction assignment (-=)
   - Multiplication assignment (*=)
   - Division assignment (/=)
   - Modulus assignment (%=)
   - Exponentiation assignment (**=)


3. Comparison Operators: Used to compare two values.
   - Equal to (==)
   - Not equal to (!=)
   - Strict equal to (===)
   - Strict not equal to (!==)
   - Greater than (>)
   - Less than (<)
   - Greater than or equal to (>=)
   - Less than or equal to (<=)


4. Logical Operators: Used to combine or invert boolean values.
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)


5. Bitwise Operators: Used to perform bit-level operations on binary numbers.
   - AND (&)
    - OR (|)
    - XOR (^)
    - NOT (~)
    - Left shift (<<)
    - Right shift (>>)
    - Unsigned right shift (>>>)


6. Unary Operators: Operators that operate on a single operand to produce a new value.
    there are several unary operators in JavaScript, including:
   - Unary Plus (+)
   - Unary Minus (-)
   - Increment (++)
   - Decrement (--)


7. Ternary Operator: A shorthand for an if-else statement.

    - Syntax: condition ? expression if true : expression if false


8. Type Operators: Used to check the type of a variable or convert types.
   - typeof
   - instanceof
These operators are fundamental to programming in JavaScript and are used extensively in various applications, from simple calculations to complex logical operations.



__NOTE__ :
- This code demonstrates the use of various operators in JavaScript, including arithmetic, assignment, comparison, logical, ternary, type, and bitwise operators.
- Each section includes examples and explanations of how the operators work.

*/



// Example of different operators in JavaScript:
// Arithmetic Operators
let a = 10;
let b = 30;
console.log("Addition:", a + b); // Addition: 40
console.log("Substraction:", b - a); // Substraction: 20
console.log("Multiplication:", a * b); // Multiplication: 300)
console.log("Division", a / b); // Division 0.3
console.log("Modules", a % b); // Modules 10
console.log("Exponentiation:", a **b) // Exponentiation: 1000000000000000000000000000000
console.log("Increment:", ++a); // Increment: 11
console.log("Decrement:", --b); // Decrement: 29


// Assignment Operators
let c = 20;
c += 10; // c = c + 10
console.log("Addition Assignment:", c); // Addition Assignment: 30
c -= 5; // c = c - 5
console.log("Subtraction Assignment:", c); // Subtraction Assignment: 25
c *= 2; // c = c * 2
console.log("Multiplication Assignment:", c); // Multiplication Assignment: 50
c /= 5; // c = c / 5
console.log("Division Assignment:", c); // Division Assignment: 10
c %= 3; // c = c % 3
console.log("Modulus Assignment:", c); // Modulus Assignment: 1
c **= 4; // c = c ** 4
console.log("Exponentiation Assignment:", c); // Exponentiation Assignment: 16



// Comparison Operators
let x = 15;
let y = 20;
console.log("Equal to:", x == y); // Equal to: false
console.log("Not equal to:", x != y); // Not equal to: true
console.log("Greater than:", x > y); // Greater than: false
console.log("Less than:", x < y); // Less than: true
console.log("Greater than or equal to:", x >= y); // Greater than or equal to: false
console.log("Less than or equal to:", x <= y); // Less than or equal to: true
console.log("Strict equal to:", x === y); // Strict equal to: false
console.log("Strict not equal to:", x !== y); // Strict not equal to: true 


// Logical Operators
let p = true;
let q = false;
console.log("Logical AND:", p && q); // Logical AND: false
console.log("Logical OR:", p || q); // Logical OR: true
console.log("Logical NOT:", !p); // Logical NOT: false 


// Ternary Operator
let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Ternary Operator:", eligibility); // Ternary Operator: Eligible to vote


// Type Operators
let str = "Hello, World!";
console.log("Type of str:", typeof str); // Type of str: string

let isArray = str instanceof String;
console.log("Is str an instance of String?:", isArray); // Is str an instance of String?: true

let str1 = "hello";              // primitive string
let str2 = new String("hello");  // wrapper object

console.log(typeof str1); // "string"
console.log(typeof str2); // "object"

console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // true
/*
why String("hello") is true and "hello" is false in instanceof String?
- When we use String("hello"), it creates a String object, which is an instance of the String constructor. Therefore, instanceof String returns true.
- On the other hand, when you use "hello", it is a primitive string value, not an object. Primitive values are not instances of their corresponding wrapper objects, so instanceof String returns false.
*/


// Bitwise Operators
let m = 5;  // In binary:  0101
let n = 3;  // In binary:  0011
console.log("Bitwise AND:", m & n); // Bitwise AND: 1  (In binary: 0001)
console.log("Bitwise OR:", m | n); // Bitwise OR: 7   (In binary: 0111)
console.log("Bitwise XOR:", m ^ n); // Bitwise XOR: 6  (In binary: 0110)
console.log("Bitwise NOT:", ~m); // Bitwise NOT: -6 (In binary: 1010)
console.log("Left Shift:", m << 1); // Left Shift: 10 (In binary: 1010)
console.log("Right Shift:", m >> 1); // Right Shift: 2 (In binary: 0010)
console.log("Unsigned Right Shift:", m >>> 1); // Unsigned Right Shift: 2 (In binary: 0010)


// Unary Operators
let v = 10;
console.log("Unary Plus:", +v); // Unary Plus: 10
console.log("Unary Minus:", -v); // Unary Minus: -10

v++;
console.log("Postfix Increment:", v); // Postfix Increment: 11
v--; // value changed from next line
console.log("Postfix Decrement:", v); // Postfix Decrement: 10

++v;
console.log("Prefix Increment:", v); // Prefix Increment: 11
--v; // value changed here/current line 
console.log("Prefix Decrement:", v); // Prefix Decrement: 10

// The unary operators perform operations on a single operand. postfix and prefix increment/decrement operators increase or decrease the value of a variable by 1.
// In postfix form (v++ or v--), the current value is returned before the increment/decrement.
// In prefix form (++v or --v), the value is incremented/decremented first, and then the new value is returned.
// for example : console.log(v++); // will print current value of v and then increase it by 1
//             : console.log(++v); // will increase the value of v by 1 first and then print the new value


let _x = 10; // basic example from two statement
console.log("Pre Increment", ++_x); // 11
console.log("Post Increment", _x++); // 11
console.log("_next_ value _x", _x); // 12 



// EXTRA---------------EXTRA---------EXTRA---------EXTRA---------EXTRA------------EXTRA-------EXTRA--------
/*
Compare loose equality (==) and strict equality (===) operators in JavaScript with examples?

loose Equality (==) is known as equality operator/equal to
strict Equality (===) is known as identity operator/ strict equal to
loose Inequality (!=) is known as not equal operator/ not equal to
strict Inequality (!==) is known as not identity operator/ strict not equal to

The main difference between loose equality (==) and strict equality (===) operators in JavaScript lies in 
how they compare values :-

// Example 1: Loose Equality (==)
console.log(5 == "5");   // true
// The values are the same, but the types are different (number vs string).
// == converts "5" into a number before comparing, so it returns true.

// Example 2: Strict Equality (===)
console.log(5 === "5");  // false
// The values look the same, but the types are different.
// === does not convert types, so it returns false.

// Example 3: Loose Inequality (!=)
console.log(5 != "5");   // false
// The values are the same after type conversion,
// so != returns false.

// Example 4: Strict Inequality (!==)
console.log(5 !== "5");  // true
// The values are the same, but the types are different.
// !== checks both value and type, so it returns true.

*/

