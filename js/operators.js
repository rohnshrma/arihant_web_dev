// arithmetic operators
let a = 23;
let b = 3;

// console.log(a + b); // sum
// console.log(a - b); // difference
// console.log(a * b); // product
// console.log(a / b); // quotient
// console.log(a % b); // remainder
// console.log(a ** b); // exponent / power

// comparison operators

// console.log(a > b); // greater than
// console.log(a < b); // lesser than
// console.log(a >= b); // greater than or equals to
// console.log(a <= b); // lesser than or equals to

// equals to  (==)
// console.log(12 == 12); // equals too (checks for value)
// console.log(12 == "12"); // equals too (checks for value)

// strict equals to (===)
// console.log(12 === "12"); // (checks for values and data types)
// console.log(12 === 12); // (checks for values and data types)

// not equals (!=) (returns true if two values are not equals)
console.log(12 != 23); // (checks for value )
console.log(12 != 12); // (checks for value )
console.log(12 != "12"); // (checks for value )

// strict not equals (!==) (returns true if two values are not equals)
console.log(12 !== 23); // (checks for value and data types)
console.log(12 !== 12); // (checks for value and data types)
console.log(12 !== "12"); // (checks for value and data types)

// assignment
var z = 23;
console.log(z);
// z = z + 10
z += 10; // add and assign
console.log(z);
z -= 10; // subtract and assign
console.log(z);
z *= 10; // multiply and assign
console.log(z);
z /= 10; // divide(quotient) and assign
console.log(z);
z %= 10; // divide(remainder) and assign
console.log(z);
z **= 10; // power / exponent and assign
console.log(z);

// logical operators
// and : &&
// or : ||
// not : !

console.log(12 > 10 && 10 < 12); // t && t = t
console.log(12 > 10 && 10 > 12); // t && f = f
console.log(12 < 10 && 10 > 12); // f && f = f

console.log(12 > 10 || 10 < 12); // t || t = t
console.log(12 > 10 || 10 > 12); // t || f = t
console.log(12 < 10 || 10 > 12); // f || f = f

console.log(!true);
console.log(!12 > 10);
