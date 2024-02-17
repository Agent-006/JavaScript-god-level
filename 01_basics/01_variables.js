const accountId = 144553
let accountEmail = "sagarghosh0610@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState

// accountId = 2 // This will throw an error as you cannot assign a new value to a constant.
// console.log(accountId)

accountEmail = "sg@sg.com"
accountPassword = "21212121"
accountCity = "Bangaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])