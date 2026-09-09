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

// 1. if statement: Executes a block of code if a specified condition is true.
//    Example:
//         if (condition) {
//             // code to be executed if condition is true
//         }

// if condition test 
if (q == 10) {
  console.log("The Value of q is ", q);
};


// else condition test
if (q != 10) {
  console.log("The value of q is equal to ", q);
} else {
  console.log("the value of q is not equal to ", q);
}


// else if condition statment
if (q > 10) {
  console.log(q, "is greater then ", q+20);
} else if (q == 10) {
  console.log(q, "is equal to variable q");
} else {
  console.log(q,"is smaller then ", q-10);
};


// voting system management very basic conditional code 
let age = 18;
if (age >= 18) {
  console.log("you vote it. eligibal above then 18 ");
} else if (age < 18) {
  console.log("you are no eligibal below then 18");
} else {
  console.log("Not eligbal because document problem");
}



// some Realistic basic example 
let mode = "dark";
let color;
if (mode === "dark") {
  color = "black"
};

if (mode === "blue") {
  color = "yellow"
};
console.log(color) // output : black


// ternary operator
let book_price = 50;
let result = book_price > 50 ? "yes above then 50" : "No below or equal to  50";
console.log(book_price);
console.log(result);




// switch statement
// switch case 
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

// if we want to multipal values  using switch
for (let match = 1; match <= 30; match++) {
    switch (match) {
        case 10:
            console.log(match, "→ Day 10");
            break;
        case 15:
            console.log(match, "→ Day 15");
            break;
        case 30:
            console.log(match, "→ Day 30");
            break;
        case 40:
            console.log(match, "→ Day 31");
        default:
            // skip others
            break;
    }
}

let xyz = prompt("Hello World");
console.log(xyz);

