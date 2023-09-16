// Difference between Var, Let and Const
// var declarations are globally scoped or function scoped
// var variables can be updated and re-declared within its scope;  const variables can neither be updated nor re-declared.
// var variables are initialized with undefined, let and const variables are not initialized.
// var variables can be declared without being initialized.

// let variables are block scoped.
// let variables can be updated but not re-declared;
// let variables can also be declared without being initialized

// const variables are block scoped
// const variables can neither be updated nor re-declared
// const variables must be initialized during declaration

// JAVASCRPIT DATA TYPES
// Undefined: undefined is when a value is not assigned. If a variable is declared, but not assigned, then its value is undefined:
// null: It’s just a special value which represents “nothing”, “empty” or “value unknown”.
// Symbols: A Symbol is a unique and immutable primitive value.The symbol type is used to create unique identifiers for objects.
// Objects: Object is a value in memory which is possibly referenced by an identifier.Objects are the only mutable values.
// Difference between Var, Let, and Const
// - var declarations are globally scoped or function-scoped.
// - var variables can be updated and re-declared within their scope.
// - var variables are initialized with undefined; let and const variables are not initialized.
// - var variables can be declared without being initialized.

// Using var
var globalVar = 10; // Declare a global variable
function varExample() {
  var localVar = 20; // Declare a local variable within a function
  if (true) {
    var localVar = 30; // This reassigns the outer localVar
  }
  console.log("Using var: " + localVar); // Outputs 30
}
varExample();
console.log("Global var: " + globalVar); // Outputs 10

// - let variables are block scoped.
// - let variables can be updated but not re-declared.
// - let variables can also be declared without being initialized.

// Using let
let blockVar = 40; // Declare a block-scoped variable
function letExample() {
  let blockVar = 50; // Declare a new block-scoped variable inside a block
  if (true) {
    let blockVar = 60; // This creates a new blockVar within the block
  }
  console.log("Using let: " + blockVar); // Outputs 50
}
letExample();
console.log("Block scoped var: " + blockVar); // Outputs 40

// - const variables are block scoped.
// - const variables can neither be updated nor re-declared.
// - const variables must be initialized during declaration.

// Using const
const constantVar = 70; // Declare a constant variable
function constExample() {
  const constantVar = 80; // Declare a new constant variable inside a block
  if (true) {
    // constantVar = 90; // This would result in an error (can't reassign const)
  }
  console.log("Using const: " + constantVar); // Outputs 80
}
constExample();
console.log("Constant var: " + constantVar); // Outputs 70

// JavaScript Data Types
// - Undefined: undefined is a variable without a value, usually when not assigned.
let undefinedVar;
console.log("Undefined: " + undefinedVar); // Outputs undefined

// - Null: Represents "nothing," "empty," or "value unknown."
let nullVar = null;
console.log("Null: " + nullVar); // Outputs null

// - Symbol: A unique and immutable primitive value used to create unique identifiers.
const uniqueSymbol = Symbol("description");
console.log("Symbol: " + typeof uniqueSymbol); // Outputs "symbol"

// - Object: A value in memory that can be referenced by an identifier. Objects are mutable.
const person = { firstName: "John", lastName: "Doe" };
console.log("Object: " + typeof person); // Outputs "object"