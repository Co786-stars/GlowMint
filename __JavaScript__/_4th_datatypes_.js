/*
What is data types in JavaScript?
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

*/



