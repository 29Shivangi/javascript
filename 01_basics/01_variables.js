const accountId = 144553
let accountEmail = "shivangibangar02@gmail.com"
var accountPassword = "shivi@123"
accountCity = "Indore"

// accountId = 2 --> It is not allowed to reinitialize the const

accountEmail="abc@gmail.com"
accountPassword="112233"
accountCity="Bangalore"
let accountState;

console.log(accountId);

//To print and check all the values in once we can use console.table([])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not use var
because of issue in block scope and functional scope
*/