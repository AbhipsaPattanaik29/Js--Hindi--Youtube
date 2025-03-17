const account_Id = 13493
let accountEmail = "pattanaikabhi@gmail.com"
var accPass = "12345"
accCity = "Jaipur"
let accState;

// account_Id = 2 (if const keyword u cannot change it further, not allowed)

console.log(account_Id);
accountEmail = "hc@abhipsa.com"
accPass = "1234"
accCity = "Puri"

console.table([accPass, accountEmail, account_Id, accCity, accState])
//instead of const we can change let, var
/*
Prefer not to use var
bcoz of issue in block scope and functional scope
*/ 