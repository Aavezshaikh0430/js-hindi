// function myVarName(){
//     console.log("A");
//     console.log("a");
//     console.log("v");
//     console.log("e");
//     console.log("z");
// }
// // myVarName();

// function addTwoNumber(number1, number2){
//     // console.log(number1 + number2)
//     // let result = number1 + number2;
//     // return result;


//     return number1 / number2
// }
// const result =addTwoNumber(40, 5);
// // console.log("restult:",result);

// function userLoggedIn (username = "Hitesh") {
//     if(!username){
//         console.log("please, Enter your username.");
//         return

//     }
//     return`${username} just Logged in.`

// }
// // console.log(userLoggedIn("hitesh"));
// const loggedIn = userLoggedIn("Aavez");
// console.log(loggedIn);

//samjo hum ek shopping card bana rahe hai
//usse me kitne item add hoge hame pata nhi to wo kaisee banayenge.


//function ke aise naam dejiye jisse se hame samaj aye ke function kya kar
//raha hai.
//abc hello function ke naam mat dejiye.

function calculateCartPrice(num1){
    console.log("hrllp")
    return num1
}
// console.log(calculateCartPrice(400, 300));


//rest oprator 
//... 3 dot ko hi rest oprator kahaete hai aur
//isi ko hi spread oprator kahete hai.
//bus in ke usecase se pata chalta hai.
//ye rest oprator hai ya speread oprator.
//jab ham parameter me ... 3 dot likete hai tab ye rest oprator banta hai.
//jab ham argument me ... 3 dot likete hai tab ye spread oprator banta hai.
//rest oprator ka matlab hai ye sab bhikra howa hai isko ek bundal me pack karke do 
//ise rest oprator kahete hai.

function calculateCartPrice1(...num2){
    // console.log("hrllp")
    return num2
}
// console.log(calculateCartPrice1(200, 400, 500));

//jitna ham value add karenge vo sab ek array ki shakal me out milenga.
//ye hai rest oprator function ke under rest oprator kaise pass hota hai multipal
//value kaise pass hoti hai.
const cartvalue = calculateCartPrice1("cartValue",200, 400, 500)

// console.log(cartvalue);

function calculateCartPrice2(val1, val2, ...num3){
    
    return num3
}

console.log(calculateCartPrice2(200, 400, 500, 2000));

//object ko function me kaise pass karte hai.

user = {
    username : "Aavez",
    price : 199
}

function handleObject (anyobject){
    return`Your name is ${anyobject.username} and price is ${anyobject.price}.`
}

// console.log(handleObject(user));

// console.log(handleObject({
//     username: "sam",
//     price: "free"
// }));

const handelobject =handleObject({
    username: "Sam",
    price: 399
});
console.log(handelobject);



//array ko function me kaise pass karte hai.


const myNewArray = [200, 400, 100, 600, 400, 456]

//ab ek function defind karna hai. array ko accepte karta hai 
//uski second value ko retern karta ho.

function returnSecondValue (getArrey){

    return getArrey[5]
}
// console.log(returnSecondValue(myNewArray));

//new array  bhi pass kar sakte hai. 
console.log(returnSecondValue([100, 200, 300, 400, 343, 432]));



