/*
What is a control statement in JavaScript?
Control statements in JavaScript are statements that control the flow of execution in a program.
They decide which code should execute, how many times it should execute, and when the program should move to another part of the code.

Why / How are control statements used?
Control statements are used to control how a program behaves based on different conditions or situations.
Control statements allow a program to make decisions, repeat tasks, and change the normal flow of execution instead of simply running code from top to bottom.
They are mainly used to:
1. Make decisions using if, else, and switch.
2. Repeat code using for, while, and do-while.
3. Skip or stop loop execution using continue and break.
*/

// for loop: counting number
for (let i = 1; i <= 5; i++) {
    console.log(i);
}; 
/*
Explanation (clear and readable):

Initialization condition: i = 1  
→ The loop starts with i set to 1.

Stopping condition: i <= 5  
→ The loop continues only while this condition is true.

Updation condition: i++  
→ After every iteration, i increases by 1.

How the control flow works step‑by‑step:
i = 1 → i <= 5 is true → prints 1 → i becomes 2  
i = 2 → i <= 5 is true → prints 2 → i becomes 3  
i = 3 → i <= 5 is true → prints 3 → i becomes 4  
i = 4 → i <= 5 is true → prints 4 → i becomes 5  
i = 5 → i <= 5 is true → prints 5 → i becomes 6  
i = 6 → i <= 5 is false → loop terminates
*/


// for loop: sum of the counting number
let sum = 0;
for (let i=1; i<=5; i++) {
    sum += i;
};
console.log("sum of total count", sum); 
/*
simple i = 1, 2, 3,  4, 5, 6 → false: terminate
       s = 1, 3, 6, 10, 15,
explanation (clear and readable):
Control Flow:
i = 1 → i <= 5 is true → sum (00 + 1): 01 → i becomes 2  
i = 2 → i <= 5 is true → sum (01 + 2): 03 → i becomes 3  
i = 3 → i <= 5 is true → sum (03 + 3): 06 → i becomes 4  
i = 4 → i <= 5 is true → sum (06 + 4): 10 → i becomes 5  
i = 5 → i <= 5 is true → sum (10 + 5): 15 → i becomes 6  
i = 6 → i <= 5 is false → loop terminates
output: sum of total count 15
*/

// basic variable concept: scope
// local scope with let
for (let j = 1; j <= 3; j++) {
    console.log(j); // 1, 2, 3
}
console.log(j); // Error: j is not defined (j is local to the for block)

// local scope with let
for (let k = 1; k <= 3; k++) {
    console.log(k); // 1, 2, 3
}
console.log(k); // Error: k is not defined (k is local to the for block)

// global scope with let (declared outside)
let l = 1;
for (l; l <= 3; l++) {
    console.log(l); // 1, 2, 3
}
console.log(l); // 4 (l is global, updated by the loop)

// function/global scope with var
for (var p = 1; p <= 3; p++) {
    console.log(p); // 1, 2, 3
}
console.log(p); // 4 (p is NOT block-scoped, accessible outside the loop)

/*
Concept explanation:

1) let inside for:
   - When you write: for (let j = 1; j <= 3; j++)
   - j exists only inside the loop block.
   - After the loop ends, j is not accessible → console.log(j) gives an error.

2) let declared outside:
   - When you declare: let l = 1; before the loop
   - l is in the outer (global or higher) scope.
   - The loop changes l (1 → 2 → 3 → 4).
   - After the loop, console.log(l) prints 4.

3) var inside for:
   - When you write: for (var p = 1; p <= 3; p++)
   - p is NOT block-scoped; it is function/global scoped.
   - So p is still accessible after the loop.
   - After the loop, p becomes 4 → console.log(p) prints 4.

Key idea:
- let inside the for loop → local to the loop (block scope).
- let outside the loop → can be used and updated by the loop, still available after.
- var in the loop → behaves like a global/function variable, available after the loop.
*/





