// display the value on screen
// alert("Hello World");
console.log("Hello world");



// use strict mode in js
// "use strict" helps catch errors early and prevents bad coding habits.
"use strict" // 
var1 = 15
$constvalue  = 3
console.log(var1);
console.log($constvalue);

function demo() {
  "use strict";
  // strict mode only inside this function
}
// Advantages of use "strict"
// Prevents using undeclared variables
// Blocks duplicate function parameters
// Stops accidental global variables




// undefined or null
let v1, v2;
v2 = null;
console.log(v1); // undefined → variable declared but no value assigned
console.log(v2); // null      → intentionally assigned empty value



// operators basic practic 
let a = 10;
let b = 20;
let c = a + b;
//  Arithmetic operator
console.log("a = ", a, " & b =", b);
console.log("a + b =", a + b);
console.log("a * b", a*b);
console.log("a / b", a/b);
console.log("a % b", a);
console.log('a ** b', a**b);


//Unary operator original value is 10
console.log("increment : a++ post", ++a);
console.log("increment : ++a pre", a++);
console.log("value of a : ", a ); // now the value is 12 


console.log("Decrement : a++ post", --a);
console.log("Decrement : ++a pre", a--);
console.log("value of a : ", a );



// Assignment operator
// assignment value is propragate right to left in assign operator
console.log("a = ", a, " & b =", b);
console.log("a += b =", a + b);
console.log("a *= b", a*b);
console.log("a /= b", a/b);
console.log("a %= b", a);



// comparision operator
let n1 = 20;
let n2 = 21;
let n3 = "20";
// equal (==) → compares only value
console.log("Equal (==)               :", n1 == n3);    

// not equal (!=) → compares only value
console.log("Not Equal (!=)           :", n1 != n2);

// strict equal (===) → compares value + datatype
console.log("Strict Equal (===)       :", n1 === n3);

// strict not equal (!==) → compares value + datatype
console.log("Strict Not Equal (!==)   :", n1 !== n3);

// greater than (>)
console.log("Greater Than (>)         :", n1 > n2);

// smaller than (<)
console.log("Smaller Than (<)         :", n1 < n2);

// greater than or equal (>=)
console.log("Greater or Equal (>=)    :", n1 >= n2);

// smaller or equal (<=)
console.log("Smaller or Equal (<=)    :", n1 <= n2);




// 4. Logical Operators: Used to combine or invert boolean values.
//    - Logical AND (&&)
//    - Logical OR (||)
//    - Logical NOT (!)
let q = 10;
let p = 20;
let chk = p === q
console.log("cond1 && cond2 : ", q==p && chk);
console.log("cond1 or cond2 : ", q==p || p>q);
console.log("!cond1 > con2 : ", !(q<p)) //return false but real value is true




// //conditional statment


