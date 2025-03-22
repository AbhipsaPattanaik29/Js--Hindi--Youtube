//Primitive dataType
//7 Categories : String, Number, Boolean, null, undefined, Symbol, BigInt

//number define
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

const bigNumber = 68975755555555555555555555n //bigInt

//Reference (Non- Primitive)
//Array, Objects, Functions (non primitive ka data types function hi he)

const heros = ["Abhipsa", "DevJyoti", "Sunidhi", "Raj"]

let myObj = {
    name : "Abhipsa",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}

// to find out any value's dataType 
console.log(typeof bigNumber)

console.log(typeof outsideTemp)
console.log(typeof score)

console.log(typeof myFunction) //we say it as obj fxn or fxn obj for  fxn's datatype only

console.log(typeof myObj)

console.log(typeof scoreValue)

console.log(typeof heros)