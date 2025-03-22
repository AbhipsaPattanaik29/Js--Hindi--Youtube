const name = "abhipsa"
const repoCount = 5

console.log(name + repoCount + "value" ) //this string is not that much valid

console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`); // this is good for using

const gameName = new String('Abhipsaap');

// console.log(gameName[0])

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('p'))

const newString = gameName.substring(0, 4)
console.log(newString) 

const String1 = gameName.slice(0, 4)
console.log(String1)
const String2 = gameName.slice(-8, 4)
console.log(String2)


const newStringOne = "         abhipsa      "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://abhipsa.com/abhipsa%20pattanaik"

console.log(url.replace('%20', '-'))
console.log(url.includes('gudu'))


const gameName1 = new String('Abhipsa-ap-gudu');
console.log(gameName1.split('-'))
