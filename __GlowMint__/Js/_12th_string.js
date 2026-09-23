/*
String:
A string is a sequence of characters written inside quotes.
Example: "Hello", "Apna College", "12345"

String Length:
We use str.length to count how many characters are present in the string.

String Index:
Each character in a string has a position (index).
Index starts from 0 and end with (n-1) where n is 'total number of chracter'.
Example: str[0], str[1], str[2] accessed the string value using indexing method

Creating a String:
let strname = "wizard";

Accessing Length:
let strlength = strname.length; // name of variable.length

Accessing Characters using Index:
strname[0]  // first character
strname[5]  // sixth character
*/
let strvalue = "Hello_World";
console.log(strvalue[0]);
console.log(strvalue[5]);



/*
Template Strings (Template Literals):

- Template strings use backticks ` ` instead of single or double quotes.
- They allow you to insert variables and expressions directly using ${ }.
- They support multi-line strings without needing \n.
- They make string formatting cleaner compared to normal concatenation.

Example:
let name = "Spider";
let msg = `Hello ${name}, welcome to JavaScript!`;

Escape Characters:
\n → newline
\t → tab space

Why use Template Strings?
- Easier to read
- Easier to write
- Works like Python f-strings
- Useful for logging, HTML generation, and dynamic messages

Object Example:
let user = { age: 22 };
let info = `User age is ${user.age}`;
*/


// Template literals
let specialstring = `this is a template literal`;
console.log(specialstring);
console.log(typeof specialstring);


let dict = {
    key1: "Hello",
    key2: 20,
    key3: "50"
};

let tempstrfrom  = `${dict.key3} and ${dict.key2} is an object`; // fully work like f-string inn python
let normalstrway = console.log(dict.key3, "and", dict.key2, "is an object" ); // 

console.log(tempstrfrom);
console.log(normalstrway);



/*
Built‑in functions/method that manipulate a string
String Methods:
- methods create the new string format not changes the original state.
  means in js the datatype is immutable(can not changable).

str.toUpperCase();   // Converts the entire string to uppercase
str.toLowerCase();   // Converts the entire string to lowercase
str.trim();          // Removes whitespace from both ends of the string

Additional useful methods:
str.includes("text");     // Checks if the string contains the given text
str.startsWith("text");   // Checks if the string starts with the given text
str.endsWith("text");     // Checks if the string ends with the given text
str.slice(start, end);    // Extracts part of the string
str.replace(a, b);        // Replaces 'a' with 'b' in the string
str.split(" ");           // Splits the string into an array
str1.concat(str2)         // Concatinate the more then one string
*/

let var1 = "Wizard";
console.log(var1, var1.toUpperCase());
console.log(var1.charAt(0)); // find the chracter of the string 


let var2 = "    wizard is vanished    ";
console.log(var2.trim()); //remove the whitespace


let var3 = "spider"
console.log(var3.slice(1, 4));
console.log(var3.concat(var1)) // we also concat using plus(+) method.

let var4 = "spider"
console.log(var4.replace("s","r"));
console.log(var4.replaceAll("der", "k")); // replace all the value of 1st parameter from second


