"use strict"; //treat all JS code as newer version

//alert("Hello");
// alert(3+3); we are using node.js not browser

console.log(3+
    3) ;//code readability should be high
console.log("hitesh");

let name = "Aavez";
let Age = 29;
let isLoggedIn = false;
let state; //undifined

//Datatype in js

//number => 2 to power 53

/*bigint  bigint badi value ke liye use hota hai jaise specialy terading me ya stockmarket ya koi badi website ke liye waha par use hota hai big int */  

//string => ""

//boolean => true/false  boolean ha ya na. server se response aya ya nahi aya 

//undifined => ham ne variable declare kiya magar uski value assing nhi kiye is liye wo undifined hai.

/*null => standalone value /*null means empty value iska ye matlab nhi ke ham ne ek string value liya aur use empty rakh diya 
[eg: let name = ""] ye e.g null nhi hai. 
kyon ke ye khali string hai isliye iska datatype decide hogaya ye string hai.*/
/* null ek special type hai aap isko assing bhi karsakte hai null jaise */

let state2 = null;
/*state2 ye khali nhi hai ye intetionally undifined  nahi hai wo khali hai jaise aap ne kisi server se request bheji server se kaha mujhe tempreature bhejo ab server temp 0 bhejta hai man lo server me koi dekkat ho rahi hai wo temp nhi bhej raha hai magar 0 to ek temp hai. magar 0 to ek temp hai to mai null prefer karonga . null matlab empty. matlab server ne temp bheja hi nhi null matlab empty  */

//symbol => unique 
/*symbol react me jada use hota hai jab bhi ham component banate hai . jab bhi identify karna ho ye wala commponent is se unique hai . is time symoble ko use karte hai .jab bhi hame baat karni ho unique ki figma tools hai ye symbol ka bahot use karte hai. defind karne ke liye diffrant commponent konsa hai  */

//object

console.log(typeof undefined);//undifined hi ata hai output
console.log(typeof null); //null ka output object ata hai
