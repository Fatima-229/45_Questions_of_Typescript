//Equality and Inequality Test 1.
console.log("Equality test with string:", "Grapes" === "Grapes");
//Equality and Inequality Test 2.
console.log("Inequality test with string:", ("Grapes" as string) != "Cherry");

//Tests using the lower case function.
console.log("Lower case function test:", "HELLO".toLowerCase() === "hello");

//Numerical tests involving equality,
console.log("Equality test with numbers:", 29 === 29);
//Numerical tests involving inequality,
console.log("Inequality test with numbers:", (29 as number) != 49);

//greater than test.
console.log("Greater than test:", 20 > 10);
//less than test.
console.log("Less than test:", 10 < 20);

//greater than or equal to.
console.log("Greater than or equal to test:", 10 >= 10);
//less than or equal to
console.log("Less than or equal to test:", 5 <= 10);

// Tests using "and" operator.
console.log("And operator test:", 6 === 6 && 25 > 10);
// Tests using "or" operator.
console.log("Or operator test:", 6 === 6 || false);

//Test whether an item is in a array
const animals: string[] = ["Snow leopard", "Giant panda", "Wolf"];
console.log('Test "Wolf" in the array:', animals.includes("Wolf"));

//Test whether an item is not in a array
console.log('Testing "Dog" is not in array:', !animals.includes("Dog"));
