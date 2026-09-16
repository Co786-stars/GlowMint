/*
While loop
syntax : -
while (condition) {
    //instructions of code
};
Defination:
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
syntax : -
do {
    instructionof code 
} while (condition);

Definition:
speciality at list run single time always
*/
let j = 1;
do {
    console.log(j);
    j++;
}while (j <= 5);





/*
forof and forin loop
syntax : -
for (let val of strVar) {
    //instruction of code 
}
Definition:

*/



