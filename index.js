/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log (tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const result = part1.slice(0, -1) + part1.slice(-1).toUpperCase() + part2.slice(0, -1) + part2.slice(-1).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(result);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random() * 10) + 1;
//Math.random() returns a random number from 0 to 1 (including 0 but not including 1)
//Multiplying by 10 to obtain a range between 0 and 10 (not including 10)
//Math.floor() rounds the number down to the nearest whole number
//Adding 1 to obtain a range from 0-9 to 1-10 (including 10)

// Print the generated random number
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//The and operator, represented by &&, returns true just if all the evaluated expressions are true
//If one of the expressions is false, the result will be false. In this case, b is false so the result will be FALSE

const expression2 = a || b;
//The or operator, represented by ||, returns true if one of the evaluated expressions is true
//If one of the expressions is true, the result will be true. In this case, a is true so the result will be TRUE

const expression3 = !a && b;
//!a negates a, so !a becomes false. false && b = false && false. Both operands are false so the result will be FALSE.

const expression4 = !(a && b);
//a && b = true && false. Since one of the expressions is false, the result will be false. !false becomes true so the result will be TRUE.

const expression5 = !a || !b;
//!a negates a, so !a becomes false. !b negates b, so !b becames true. 
//false || true returns true if one of the evaluated expressions is true. So, the result will be TRUE.

const expression6 = !(a || b);
//true || false returns true if one of the evaluated expressions is true. 
//!true becomes false. So, the result will be FALSE.

const expression7 = a && a;
//true && true returns true just if all the evaluated expressions are true. So, the result will be TRUE.

// Printing the expressions
console.log(expression1); // false
console.log(expression2); // true
console.log(expression3); // false
console.log(expression4); // true
console.log(expression5); // true
console.log(expression6); // false
console.log(expression7); // true