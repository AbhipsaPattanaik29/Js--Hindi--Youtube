//console.log(2 > 1)
//console.log(2 >= 1)

// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0) 

//these comparison such as ==, >=, > can confuse us


// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)
// //undefined always give false

// === => strict check
//check values as well as its data types


console.log("2" == 2) // true
console.log("2" === 2) // false



//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Premitive),  Heap(Non-Primitive)
//stack -> variable ka copy and heap -> reference of the original value

let myName = "Abhipsa"
let anotherName = myName
console.log(anotherName)

anotherName = "Naina"
console.log(myName)
console.log(anotherName)


let user1={
    email: "patt@gmail.com",
    name: "Gudu"
}

let user2 = user1

user2.email = "pattanaik@gmail.com"
console.log(user1.email);
console.log(user2.email);
