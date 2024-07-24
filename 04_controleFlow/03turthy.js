//  const userEmail = "A@Avez.ai"
 //jab ham email empty string liye to kya hoga.
 //kabhi bhi empty string false value hai.



// const userEmail = ""

// const userEmail = []
//jab empty arry liye to wo true true value hai.

const userEmail = {}
//empty object bhi true value return karta hai.

 if (userEmail){

    console.log("Got user email.");
 }
 else{
    console.log("Don't have user email.");
 }

 //document of true and false value in js


 //falsy value : kin kin value ko false value assum kiya jata hai.

 //fasle, 0, -0, BigInt 0n, null, undefined, NaN

 //truthy value : kin kin value ko true value assum kiya jata hai.
//kon kon si value surprize karengi

//'fasle' string me false likhne se wo false value nhi hogi
//'0' string me 0 likhne se wo false nhi hoga.
//agar ham empty string me space bhi dete hai to wo true value hogi
//function(){} empty function bhi true value return karta hai.

 //true, "0", 'false' ,  " ", [], {}, function(){}

 //array ko check karne ka tarika

 const myArry = []

 if (myArry.length === 0){

    console.log("Array is empty");
 }

 //object empty rahe to kaise check karne ka

 const myObj ={}

 if (Object.keys(myObj).length === 0) {
    console.log("object is empty");
 }