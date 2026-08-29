/* 
Write a JavaScript program to create a simple object representing a personal computer 
(PC) with properties like brand, model, processor, RAM, and storage. Then, log the object to the console ?
*/
const pc= {
  brand: "Lenvo",
  model: "Rizen 5",
  processor: "Rizen 5 5600H",
  RAM: "16gb",
  Storage: "512gb SSD"
}
console.log(pc);


/*Explain the concept of "use strict" in JavaScript and provide an example of its usage?
"Use strict" is a directive in JavaScript that enables strict mode, which is a way to opt in to a restricted variant of JavaScript. 
Strict mode helps catch common coding mistakes and "unsafe" actions such as defining global variables unintentionally. 
It can be applied to an entire script or to individual functions.
When strict mode is enabled, it changes the behavior of JavaScript in several ways, including:
1. Eliminating some silent errors by changing them to throw errors.
2. Fixing mistakes that make it difficult for JavaScript engines to perform optimizations.
3. Prohibiting certain syntax likely to be defined in future versions of ECMAScript.
Example of using "use strict":
*/
"use strict";  // Enabling strict mode. It helps catch common coding mistakes and "unsafe" actions such as defining global variables unintentionally.
myVar = 15.10; // Remember, "use strict mode"  needs to put at the top of the file to work for entire file or top of function to work inside function only 
console.log(myVar);

