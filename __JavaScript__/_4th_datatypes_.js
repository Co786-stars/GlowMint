/*
What is datatypes in JavaScript?
- Data types are the classification or categorization of data items. They determine the type of data that can be stored 
  and manipulated within a program.


What are the types of datatypes in JavaScript?
- JavaScript has several built-in data types, which can be broadly categorized into two types: 
  Primitive and Non-Primitive (Reference) data types.

  
What are Primitive and Non-Primitive data types?
- Primitive data types are the most basic data types in JavaScript. They include:
    1. Number: Represents both integer and floating-point numbers. Example: 42, 3.14 
    2. String: Represents sequences of characters. Example: "Hello, World!"
    3. Boolean: Represents logical entities and can have two values: true or false.
    4. Undefined: A variable that has been declared but not assigned a value has the value undefined.
    5. Null: Represents the intentional absence of any object value.
    6. Symbol (ES6): Represents a unique identifier, often used as keys in objects to avoid name collisions.
    7. BigInt (ES2020): Represents integers with arbitrary precision, allowing for the representation of very large numbers.

- Non-Primitive (Reference) data types are more complex and include:
    1. Object: A collection of key-value pairs. Example: {name: "Alice", age: 25}
    2. Array: An ordered list of values. Example: [1, 2, 3, 4, 5]
    3. Function: A block of code designed to perform a particular task.
    4. Date: Represents dates and times.
    5. RegExp: Represents regular expressions, used for pattern matching within strings.

Key differences between Primitive and Non-Primitive data types:
- Primitive data types are stored directly in the variable, while non-primitive data types store a reference to the location in memory where the object is stored.
- Primitive data types are compared by their values, while non-primitive data types are compared by their references.
- Primitive data types are immutable (cannot be changed), while non-primitive data types are mutable (can be changed).

summary:
- JavaScript has both Primitive and Non-Primitive data types.
- Primitive data types include Number, String, Boolean, Undefined, Null, Symbol, and BigInt.
- Non-Primitive data types include Object, Array, Function, Date, and RegExp.
- Understanding these datatypes is crucial for effective programming in JavaScript, as they influence how data is stored, manipulated, and compared.


Important notes (js/python about tuple):-💫
→ Pure JavaScript does not have tuples.
→ If you want tuple-like behavior, use arrays in JS 
→ Or switch to TypeScript, which supports tuples with fixed length and type safety.    
  TypeScript: Tuples are non‑primitive, mutable in values but fixed in structure.
    let person: [string, number] = ["Aditya", 21];
    person[0] = "Raj";   // ✅ allowed
    person.push(true);   // ⚔️ error (structure fixed)
  
  Python: Tuples are non‑primitive and fully immutable.
    person = ("Aditya", 21)
    # person[0] = "Raj"   ⚔️ error (tuple is immutable)
→ Both are non‑primitive, but TypeScript allows value changes while Python does not.


When use let and const ?
- const
    → Use when the value never changes.
    → Think of it like permanent storage.
    → Example: const pi = 3.14;   // pi will always stay 3.14
- let
    → Use when the value can change later.
    → Think of it like a box you can refill.
    → Example: let score = 0;     
    →          score = 10;   // score changed
*/


//🍏Primitive Datatype/examples in JavaScript 🍏
// Number
let num = 42; 
console.log(num);

// String
let str = "Hello";     
console.log(str);    

// Boolean
let bool = true;
console.log(bool);

// Undefined
let undef;             
console.log(undef);

// Null
let n = null;          
console.log(n);

// Symbol
let sym = Symbol("id"); 
console.log(sym);




//🍏Object Declaration(Non-Premetive/Mutable)🍏 
const myvar = {
  fName:"wizard",
  roll: 123,
  avMarks: 32.5,
  isPass: false 
}; // example of object datatype
console.log(myvar["avMarks"]);  
console.log(myvar) 

// basic operations on value of object datatype
myvar["roll"] = myvar["roll"]+10;  
myvar["fName"] = myvar["fName"]+10;
console.log(myvar["roll"]); // output : 123+10 : 133
console.log(myvar["fName"]); // outpur : wizard+10 :  wizard10  

// inserting the value to object variable myvar
myvar["tMarsk"] = 30;    
console.log(myvar["tMarsk"]);

// typeof to check type data
console.log(typeof myvar["isPass"]);




//🍏Array Decleration(Non-Premetive/Mutable)🍏
const arry = [10, 20, 30, 40, 50]; 

// Accessing elements
console.log(arry[0]);  // 10
console.log(arry.slice(1, 3)) // [20, 30] 

//Updating elements
arry[0] = 30 // [30, 20, 30, 40, 50]
arry[1] = arry[1]+10 // [30, 30, 30, 40, 50]
console.log(arry) 

// Adding new elements
arry.push(60) // [30, 30, 30, 40, 50, 60]
arry.push(70, 80, 90, 100)  // Add elements at the end → [30, 30, ..., 90, 100] 
arry.unshift(5, 6, 7, 8, 9) // Add elements at the beginning → [5, 6, 7, 8, 9, 30, 30,...., 100]
console.log(arry) 

// Removing last elements
arry.pop()
console.log(arry) // [30, 30, 30, 40, 50]

// Checking length
console.log(arry.length)




//🍏Function Decleration(Non-Premetive/Mutable)🍏
function greet() {
  console.log('Hello wizard')
}
//Calling the function
greet(); //output: Hello Wizard
console.log(typeof greet); // display the origin of datatype


// function with parameter
function add(x, y) {
  return x + y;
}
console.log(add(10, 20));   // display the output 30


// function with expression/another format
const multiply = function(x, y) {
  return x * y;
}
console.log(multiply(10, 10)); // disply the output 100


// arrow function/modern style 
const square = (n) => n*n;
console.log(square(6)); // output 36

/* 
function functionName(parameters) {
  // code
  return result;
}
functionName(arguments)*/




//🍏Date Decleration(Non-Premetive/Mutable)🍏
let now = new Date()
//Shows full date + time in local timezone. → .toString()
console.log(now.toString()); //"Sun Dec 21 2025 02:28:00 GMT+0530 (India Standard Time)" → Default

//Standardized format (UTC). Great for APIs and databases. → .toISOString()
console.log(now.toISOString()); //"2025-12-21T02:28:00.000Z" →  ISO Format

// Adjusts to your system’s locale (India → dd/mm/yyyy format). → toLocaleString()
console.log(now.toLocaleString()) // "21/12/2025, 2:28:00 am" →  Localized String


// Custom Formatting
let d = new Date(); // 
let formatted = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
console.log(formatted); // "21/12/2025" → months are 0-based (January = 0).



//🍏RegularExp Decleration(Non-Premetive/Mutable)🍏
// it’s a special object designed for text searching and manipulation
let regex = /[0-9]+/;   // matches one or more digits
console.log(regex.test("abc123"));   // true
console.log(regex.exec("abc123"));   // ["123"]

