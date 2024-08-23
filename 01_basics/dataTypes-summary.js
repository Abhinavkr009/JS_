// the categorization of data types has done on the basis of how the data is stored in memory 
//and accessed through the memory..***************

//Primitive
//7 types : String, Number, Boolean, null, undefined, Symbol(for making a value unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

const bigNumber = 32667624623674672652765787877787887878787n

//*******************JavaScript is Dynamically typed language
//What is Dynamically Typed?
//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables 
//a type at runtime based on the variable's value at the time.

// Reference (Non primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "batman", "doga"];
let myObj = {
    name: "Abhinav Kumar",
    age: 23,
}

const myFunction = function(){
  console.log("Hello world");
}

console.log(typeof bigNumber)
