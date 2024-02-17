# 🎯 let, const and var ✅

🪄 We have three kinds of variables -\

1. const - used for declaring constants
2. let - used for declaring values that might change in future
3. var - also used for declating values that might change in future

📝Note: Prefer not to use var because of issue in block scope and functional scope

    const accountId = 144553
    let accountEmail = "sagarghosh0610@gmail.com"
    var accountPassword = "12345"
    accountCity = "Kolkata"
    let accountState

    // accountId = 2 // This will throw an error as you cannot assign a new     value to a constant.
    // console.log(accountId)

    accountEmail = "sg@sg.com"
    accountPassword = "21212121"
    accountCity = "Bangaluru"

    /*
    Prefer not to use var
    because of issue in block scope and functional scope
    */

    console.table([accountId, accountEmail, accountPassword, accountCity,   accountState])

# 🎯 Datatypes and ECMA standards ✅

🪄 In JavaScript we have 7 datatypes-\

1. number
2. bigint
3. string
4. boolean
5. null 
6. undefined
7. symbol

        "use strict"; // treat all JS code as newer version
    
        // alert(3 + 3) // we are using nodejs, not browser
    
        console.log(3 + 3)
        console.log("Sagar")
    
    
        let name = "sagar"
        let age = 22
        let isLoggedIn = true
        let state = null
    
        // Premitive Datatypes
    
        // number => 2^53
        // bigint
        // string => "" or ''
        // boolean => true or false
        // null => stand-alone value
        // undefined => value is not assigned yet
        // symbol => unique
    
        // object
    
        console.log(typeof name) // string
        console.log(typeof age) // number
        console.log(typeof isLoggedIn) // boolean
        console.log(typeof undefined) // undefined
        console.log(typeof null) // object
