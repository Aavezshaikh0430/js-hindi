//javascript me date jo object hai vo january 1, 1970. js me jitni bhi dates hai
//vo 1970 se start hai. date hamari mili secound me defind hoti hai.

//NOTE : TC39 js ke jo bhi new features ate hai. wo TC39 orgnisation defind karta hai.

let myDate = new Date();

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//agar hame randamly date printe karwani hai to 

// let myCreatedDate = new Date(2024 , 0, 29, 5, 3,);
// let myCreatedDate = new Date("2024-01-14");
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());

//Date me timestamp bhi hote hai.

//timeStamp kya hota hai
//aap ko exactly timestamp pata lagana ho. jab aap quizes desing karenge . polls desing karenge
//polls kisne fastest diya hai usko mai winner diclare karnoga in cases me in sichuation me 
//hum timestamp ka use karte hai

let myTimeStamp =  Date.now();
// console.log(myTimeStamp); //output milisecound me ayenga ye milisecound 1 jan 1970. se aaj tak ka hai 
//time

//time stamp specialy ham kisi room ki website banarahe ya hotal aap bana rahe hai tab ye time 
//stamp object use karte hai kisi bhi date ko campaire kar sakte hai.

// console.log(myCreatedDate.getTime());


//console.log(Math.floor(Date.now()/1000));

//output 01-14-2024 se lekar aaj tak ka milisecound ko 
//convert secound me kara hai

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());





