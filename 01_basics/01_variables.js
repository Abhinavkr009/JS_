const accountId = 1445553;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // This is not allowed because const variables cannot be reassigned...


accountEmail = "abhi@gmail.com";
accountPassword = "786786786";
accountCity = "Delhi";



/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);