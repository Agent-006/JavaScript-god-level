# 🎯 let, const and var ✅

🪄 We have three kinds of variables -

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

🪄 In JavaScript we have 7 datatypes-

1. number
2. bigint
3. string
4. boolean
5. null
6. undefined
7. symbol

```
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
```

# 🎯 Conversion Operations ✅

Conversions:

```
 let score = 33;
 let score = "33";
 let score = "33abc";
 let score = null;
 let score = true;
 let score = false;
 let score = undefined;
 let score = "sagar"
 console.log(typeof score);
 console.log(typeof score)
 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber)
```

"33" => 33\
 "33abc" => NaN => typeof NaN => number\
 ture => 1\
 false => 0

```
let isLoggedIn = 1;
let isLoggedIn = "";
let isLoggedIn = "sagar"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)
```

1 => true\
 0 => false\
 "" => false\
 "sagar" => true

```
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
```

Operations:

```
let value = 3;
let negValue = -value;
// console.log(negValue)

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

// let str1 = "Hello";
// let str2 = " Sagar";

// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(+true);
// console.log(+"");

// let num1, num2, num3;

// num1 = num2 = num3 = 2 + 2;

// console.log(num1);
// console.log(num2);
// console.log(num3);

// let gameCounter = 100
// gameCounter++
// console.log(gameCounter)
```

# 🎯 Comparisons ✅

These are very basic

```
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1)
// console.log("02" > 1)
```

The main confusion begins here

```
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);


console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

```

📝Note: The reason is that an equality check `==` and comparisons\
`>`,`<`,`>=`,`<=` work differently.\
Comparisons convert `null` to a number, treating it as `0`.\
That's why `null >= 0 ` is `true` and `null > 0` is `false`.

This checks the datatype of both the values

```
console.log("2" === 2)
```

# 🎯 Datatypes summary ✅

There are two main categories of datatypes in JavaScript:

1. Primitive Datatypes, and
2. Non-Primitive Datatypes (Reference)

⭐ Primitive Datatypes:

1. String
2. Number
3. Boolean 
4. null
5. undefined
6. Symbol
7. BigInt

⭐ Non-Primitive Datatypes (Reference)

1. Arrays
2. Objects
3. Functions