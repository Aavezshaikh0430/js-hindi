// const chai = function(){


// }

//kuch log theroy ke refrence bolte hai ke arrow function me this keyword use
//magar fucntion me use karsakte. aisa nhi hai 
//this keyword fucntion me use hi nhi karsakte.

const chai = () => {
    let username = "Aavez";
    console.log(this);
}
// chai();


//basic arrow function   () => {}  aisa hota hai


// const AddTwo = (num1, num2) =>{
//     return num1 + num2;

// }

//implicite return
//ham ek line me function likhne ko implicit return bolte hai
//ek line ke funtion me ham {} ko nikalte hai or return key word ko bhi nikalte hai.

// const AddTwo = (num1, num2) =>    num1 + num2;

//jab ham round brases [()=parenthesis] lagate hai to return keyword nhi lagana hai.

//jab ham curly brases {} lagate hai to return keyword likhna hi padenga.

const AddTwo = (num1, num2) =>    (num1 + num2);
console.log(AddTwo(5 ,9));

//react me arrow function ke baad return likha hi nhi 
//confuse nhi hona hai.
//curly brases likhe to code chale ga hi nhi.
//confuse nhi hona hai.

//implicite return mean return keyword nhi lagana 
//explicite return mean return keyword ko lagana hota hai.


//agar hame ek object return karna ho single line me to 
//() paranthesis ke under {} ke under object likhna hai
//({})  ke under object likhna hai


// const Add = () => {username: "aavez"};  //undifind ayenga () lagana zarori hai

const Add = () =>    ({username: "aavez"});
console.log(Add());

//array ([])
//const number = () => (1,2,3,4,);

const number = () => ([1,2,3,4,]);
console.log(number());

// const myArry = [1, 3, 5, 7, 8, 66,]

// myArry.forEach(function(){})

// myArry.forEach(()=>{})














