/*
Array:
An array is a special variable that can store multiple values in a single variable.
Values are written inside square brackets [ ] and separated by commas.

Example:
let arr = [10, 20, 30, 40, 50];
Here:
10, 20, 30, 40, 50 → are called elements of the array.

An array can store:
- Numbers
- Strings
- Boolean values
- Objects
- Other arrays
- Different data types together

Array Length:
We use arr.length to find the total number of elements present in an array.
Example:
let arr = [10, 20, 30, 40, 50];
arr.length → 5

Note:
The length gives the total number of elements,
not the last index.

Array Index:
Each element in an array has a position called an index.
Index starts from 0.

Example:
let arr = [10, 20, 30, 40, 50];
Index:    0   1   2   3   4
Value:   10  20  30  40  50
arr[0] → 10
arr[1] → 20
arr[2] → 30
arr[4] → 50

The last index is always:
array.length: (n-1), n means number of item

Example:
arr.length = 5
Last index = 5 - 1 = 4

Accessing Array Values:
We use the index number inside square brackets [] to access an element.
Example:
let arr = [10, 20, 30, 40, 50];
arr[0] → first element
arr[2] → third element
arr[4] → fifth element
*/


let arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // 10
console.log(arr[2]); // 30
console.log(arr[4]); // 50


/*
Looping over an Array:
Looping means accessing each element of an array one by one.
There are different ways to loop through an array.
1. for loop
2. for-of loop
*/

// Using normal for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
/*
Explanation:
i = 0
→ Loop starts from index 0.

i < arr.length
→ Loop continues until the last index.

i++
→ Index increases by 1 after every iteration.

arr[i]
→ Accesses the value stored at the current index.

This method gives us both:
- index
- value
*/



// Using for-of loop
for (let i of arr) {
    console.log(i);
}

/*
for-of loop directly gives the value of each element.
Example:
arr = [10, 20, 30]

i → 10
i → 20
i → 30

Use for-of when you only need the values
and do not need the index.
*/



// Accessing index and value using for-of
let k = 0;
for (let i of arr) {
    console.log(`arr${k}`, i);
    k++;
}

/*
Here:
k → keeps track of the index.
i → contains the current array value.
Output:
arr0 10
arr1 20
arr2 30
arr3 40
arr4 50
*/



/*Example of looping through an array of strings:*/
let devices = [
    "laptop",
    "monitor",
    "mouse",
    "keyboard",
    "cpu",
    "speaker",
    "penTab"
];

for (let device of devices) {
    console.log(device.toUpperCase());
}



/*
Base Question:
Find the average price of products.
price = [90, 30, 50, 80, 15]
Formula:
Average = Total Sum / Total Number of Values
*/

let price = [90, 30, 50, 80, 15];
let sum = 0;
for (let p of price) {
    sum += p;
}
let avg = sum / price.length;
console.log(`Average price of the products is ${avg}`);




/*
Built-in Methods for Arrays:
JavaScript provides many built-in methods to work with arrays.
Important Array Methods:

push()       → Adds element at the end
pop()        → Removes element from the end

unshift()    → Adds element at the beginning
shift()      → Removes element from the beginning

toString()   → Converts array into a string
concat()     → Joins two or more arrays

slice()      → Extracts a part of an array
splice()     → Adds, removes, or replaces elements

Some methods change the original array,
while some methods return a new result without changing it.
*/



/*
.push():

The push() method adds one or more elements to the END of an array.
It changes the original array.

Syntax:
array.push(element);
*/

let x = ["p", "k", "t"];
x.push("N");
console.log(x);

/*
Output:
["p", "k", "t", "N"]
"N" is added at the end of the array.*/

/*.push() can also add multiple elements:*/
x.push("A", "B");
console.log(x);

/*
Output:
["p", "k", "t", "N", "A", "B"]*/



/*
.pop():
The pop() method removes the LAST elementfrom an array.
It changes the original array.

Syntax:
array.pop();
*/

x.pop();
console.log(x);
/*
The last element is removed from the array.
If the array was:
["p", "k", "t", "N"]

After pop():
["p", "k", "t"]
*/



/*
.toString():
The toString() method converts an array into a string.
It does NOT change the original array.

Syntax:
array.toString();
*/

let letters = ["p", "k", "t"];
let stringValue = letters.toString();
console.log(stringValue);
/*
Output:
p,k,t
The array is converted into a stringwith elements separated by commas.*/

console.log(letters);
/*
Output:
["p", "k", "t"]
The original array is not changed.*/



/*
.concat():
The concat() method is used to join two or more arrays.
It returns a NEW array.
It does NOT change the original arrays.

Syntax:
array1.concat(array2);
*/
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];
let newArr = arr1.concat(arr2);
console.log(newArr);
/*
Output: [10, 20, 30, 40, 50, 60]*/

console.log(arr1);
/*
Output:
[10, 20, 30]
Original array is unchanged.*/



/*
.unshift():
The unshift() method adds one or more elements to the BEGINNING of an array.
It changes the original array.

Syntax:
array.unshift(element);
*/


let fruits = ["Apple", "Banana", "Mango"];
fruits.unshift("Orange");
console.log(fruits);
/*
Output:
["Orange", "Apple", "Banana", "Mango"]*/



/*
.shift():
The shift() method removes the FIRST element from an array.
It changes the original array.

Syntax:
array.shift();
*/


fruits.shift();

console.log(fruits);

/*
Output:

["Apple", "Banana", "Mango"]

"Orange" was removed because it was
the first element.
*/



/*
.slice():
The slice() method extracts a part of an array.
It returns a NEW array.
It does NOT change the original array.

Syntax:
array.slice(start, end);

start → starting index
end   → ending index (not included)

Example:
Index:    0   1   2   3   4
Value:   10  20  30  40  50
*/


let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(1, 4);
console.log(result);

/*
Output:

[20, 30, 40]
Why?
Start index = 1
End index   = 4
Index 4 is NOT included.
*/


console.log(numbers);
/*
Output:
[10, 20, 30, 40, 50]
Original array remains unchanged.
*/



/*
.slice() with only one argument:
If only the start index is given, slice() extracts elements from that index until the end of the array.
*/
let result2 = numbers.slice(2);
console.log(result2);

/*
Output:
[30, 40, 50]*/



/*
.splice():
The splice() method is used to:
- Add elements
- Remove elements
- Replace elements
It changes the original array.

Syntax:
array.splice(start, deleteCount, item1, item2, ...);
start       → index where the operation starts
deleteCount → number of elements to remove
item1...    → elements to add
*/



/*
Removing elements using splice():*/
let nums = [10, 20, 30, 40, 50];
nums.splice(1, 2);
console.log(nums);
/*
Output:
[10, 40, 50]

Explanation:
Start index = 1

Index:    0   1   2   3   4
Value:   10  20  30  40  50

Starting from index 1:
20 → removed
30 → removed

The final array is:
[10, 40, 50]
*/



/*
Adding elements using splice():
If deleteCount is 0,
no existing element is removed.
New elements are simply inserted.
*/

let values = [10, 20, 50];
values.splice(2, 0, 30, 40);
console.log(values);

/*
Output:
[10, 20, 30, 40, 50]

Explanation:
Start from index 2.
Delete 0 elements.
Add 30 and 40.
*/


/*
Replacing elements using splice():
We can remove an existing element
and add a new element at the same position.
*/


let data = [10, 20, 30, 40, 50];
data.splice(2, 1, 100);
console.log(data);

/*
Output:
[10, 20, 100, 40, 50]

Explanation:
Start index = 2
Delete 1 element → 30
Add 100

Therefore:
30 → replaced by → 100
*/


/*
IMPORTANT DIFFERENCE BETWEEN ARRAY METHODS:
push()
→ Adds element at the END.
→ Changes original array.

pop()
→ Removes element from the END.
→ Changes original array.

unshift()
→ Adds element at the BEGINNING.
→ Changes original array.

shift()
→ Removes element from the BEGINNING.
→ Changes original array.

toString()
→ Converts array into a string.
→ Does NOT change original array.

concat()
→ Joins two or more arrays.
→ Returns a new array.
→ Does NOT change original arrays.

slice()
→ Extracts a part of an array.
→ Returns a new array.
→ Does NOT change original array.

splice()
→ Adds, removes, or replaces elements.
→ Changes the original array.
*/


/*
QUICK MEMORY TRICK:

END:
push() → Add
pop()  → Remove

START:
unshift() → Add
shift()   → Remove

COPY / EXTRACT:
slice() → Does NOT change original array

MODIFY:
splice() → Changes original array

JOIN:
concat() → Join arrays

CONVERT:
toString() → Array to String
*/







// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
//  Roughfly explain in sort:-
// /*
//     Explanation :-
//     → An array is a special variable that can store multiple values.
//     → Values are written inside square brackets [].
//     → Each value is separated by a comma.

//     Array indies (pural from in index)
//     looping over an array.
//     Built-in method for Arrays.
//     PUsh(), Pop(), toString(), concat(0), unshift(), shift(0), Slice(), Splice().
// */

// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// console.log(arr.length); // to find the length of an array



// // looping using array
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// } // manually display the array value using loop

// let k = 0
// for (let i of arr) {
//     console.log(`arr${k}` , i);
//     k++;
// }; // access using for-of 


// let devices = ["laptop", "monitor", "mouse", "keyboard", "cpu", "spaker", "penTab"];
// //loop using for-off
// for (let device of devices) {
//     console.log(device.toUpperCase());
// };




// // Base Question 
// // Find the avg price of product, price = [90, 30, 50, 80, 15]
// let price = [90, 30, 50, 80, 15]
// let sum = 0
// for (let p of price) {
//     sum += p;
// }
// let avg = sum/price.length
// console.log(`avarage price fo the product is ${avg}`);



// // built-in method
// // .push()
// let x = ["p", "k", "t"];
// x.push("N");
// console.log(x); // changes in original array
// x.pop()
// console.log(x) // remove the last item from orriginal array remove N
// console.log(x.toString()) // return new_astring not changed the original array




