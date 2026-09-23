/*
    ARRAY THEORY :-
    → An array is a special variable that can store multiple values.
    → Values are written inside square brackets [].
    → Each value is separated by a comma.

    Array indies (pural from in index)
    looping over an array.
    Built-in method for Arrays.
    PUsh(), Pop(), toString(), concat(0), unshift(), shift(0), Slice(), Splice().
*/

let arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(arr.length); // to find the length of an array



// looping using array
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
} // manually display the array value using loop

let k = 0
for (let i of arr) {
    console.log(`arr${k}` , i);
    k++;
}; // access using for-of 


let devices = ["laptop", "monitor", "mouse", "keyboard", "cpu", "spaker", "penTab"];
//loop using for-off
for (let device of devices) {
    console.log(device.toUpperCase());
};




// Base Question 
// Find the avg price of product, price = [90, 30, 50, 80, 15]
let price = [90, 30, 50, 80, 15]
let sum = 0
for (let p of price) {
    sum += p;
}
let avg = sum/price.length
console.log(`avarage price fo the product is ${avg}`);



// built-in method
// .push()
let x = ["p", "k", "t"];
x.push("N");
console.log(x); // changes in original array
x.pop()
console.log(x) // remove the last item from orriginal array remove N
console.log(x.toString()) // return new_astring not changed the original array

