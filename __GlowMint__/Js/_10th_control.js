/*
While loop
syntax : -
while (condition) {
    //instructions of code
};
Definition:
    - The while loop checks the condition "first".
    - If the condition is true → the loop runs.
    - If the condition is false → the loop does NOT run even once.
    - It is used when we don't know the exact number of iterations,
      but we know the condition.

Speciality:
    - Condition is checked BEFORE entering the loop.
    - May run 0 times if condition is false initially.

Example:
*/
let i = 1;
while (i <= 10) {
    console.log(i);
    ++i;
}
console.log(i) // Pre Increment


// WAP to check the number is odd or even from 50 to 100 using while loop?
let n = 50;
while (n <= 100) {
    if (n%2 === 0) {
        console.log(n, "even");
    } else {
        console.log(n, "odd");
    };
    n++;
};




/* 
do While loop
Syntax:
    do {
        // instructions of code
    } while (condition);

Definition:
    - The do-while loop always runs "at least one time".
    - First the code inside `do { }` executes.
    - After that, the condition is checked.
    - If the condition is true → loop continues.
    - If the condition is false → loop stops.

Speciality: 
    - Guaranteed first execution even if condition is false.
*/
let j = 1;
do {
    console.log(j);
    j++;
}while (j <= 5);

/*
DIFERENCE SUMMARY
while loop:
    ✔ Condition checked first
    ✔ Runs only if condition is true
    ✖ May run 0 times

do-while loop:
    ✔ Runs at least once (speciality)
    ✔ Condition checked after first execution
    ✔ Useful when you want guaranteed first run
*/





/*
for-of LOOP  (ES6 Feature)
syntax:
    for (let value of iterableVariable) {
        // code instructions
    }

Definition:
    - The for-of loop is used to iterate over **iterable** data.
    - Iterable means: String, Array, Map, Set, etc.
    - It gives **values** directly.
    - It is NOT used for normal objects (because objects are not iterable).

Example:
*/
let val1 = "Hello_World";
let size = 0;

for (let i of val1) {
    console.log("i =", i);   // i contains each character of the string
    size++;                  // counting characters
}

console.log("str size :", size);  // prints total length of the string


/*
for-in LOOP
syntax:
    for (let key in objectVariable) {
        // code instructions
    }

Definition:
    - The for-in loop is used to iterate over **objects**.
    - It gives **keys** of the object.
    - Using the key, we can access the value → object[key]
    - It can also iterate over arrays, but not recommended because
      order is not guaranteed.

Example:
*/
let shoap = {
    p_name: "unknown",
    p_price: 20,
    p_brand: "Nava",
    issale: "No"
};  // this is an object (similar to dictionary in Python)

for (let j in shoap) {
    console.log(j);        // prints key name
    console.log(shoap[j]); // prints value of that key
}


/*
DIFFERENCE SUMMARY
for-of:
    ✔ Works on iterable data (String, Array, Map, Set)
    ✔ Returns VALUES
    ✖ Does NOT work on normal objects

for-in:
    ✔ Works on objects
    ✔ Returns KEYS
    ✔ Can work on arrays (but not recommended)
*/


