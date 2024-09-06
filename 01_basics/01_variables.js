const accountId= 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "Jaipur"
accountCity="Jaipur" // withoout dataTypebDeclared Variable possible not use
let accountState // Value not assigned
// accountId = 2 // not Allowed


accountEmail = "hc@hc.com"
accountPassword = "1245242542"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in Block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
