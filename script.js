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

function example() {
  // Using var
  var x = 10;
  if (true) {
    var x = 20;
  }
  document.getElementById("output").innerHTML += "Using var: " + x + "<br>";

  // Using let
  let y = 30;
  if (true) {
    let y = 40;
  }
  document.getElementById("output").innerHTML += "Using let: " + y + "<br>";

  // Using const
  const z = 50;
  if (true) {
    // z = 60; // Uncommenting this line would result in an error
  }
  document.getElementById("output").innerHTML += "Using const: " + z + "<br>";
}

example();
