//WAP to display the even from 1 to 50 ?
for (let n = 1; n <=50; n++) {
    if(n%2===0) {
        console.log("even_number", n);
    }
}


//Apnacollege: create a game where you start with any random game number. Ask the user to keep gussing the game 
// number until the user enter correct value
let guess = Number(prompt("enter the guess number "));
let match = 10
let i = 1;
while (match !== guess) {
    guess = Number(prompt("Wrong number: enter the write : " ));
};
console.log("number is match now");



