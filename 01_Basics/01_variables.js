const accountId = 12345  //  const cannot be changed further

let accountEmail = "as@gmail.com" // let used to declare variables

var accountPassword  = "123as"  // var is also used to declare variables

accountCity = "jaipur"  // in this way also variable can be declared

let accountStates; // it is not defines so javascript give output of 'undefined'

// try not to use var beacuse of issue of block scope and functional scope

// accountId=54342 // not allowed 

accountEmail = "asdf@gmail.com"
accountPassword = "09876"
accountCity = "banglore"
// these all can be changed

console.log(accountId); // prints the value

console.table([accountId,accountEmail,accountPassword,accountCity]) 
// it gives output in the form of tables of indexes and values