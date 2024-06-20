const score = 400;
//yeha par javascript ne detect kiya hai score ka type hona hai number

// console.log(score);

//lekin kai baar aap exculusly bhi defind karsakte hai ke mujhe Number hi datatype chahiye to aap 
//new keyword se defind karsakte hai 

const balance = new Number (1000)
// console.log(balance);

//ye dono opration me yahi chota sa differnce hai ke jab hum score ka output dekhenge to 
//wo sirf 400 ayenga 
//magar jab hum balance ka output dekhenge to [Number: 1000] ayenga kyon ke wo special number
//define kare hai

//NUMBER Properties.

const balance2 = new Number (2000)
// console.log(balance2);

// console.log(balance2.toString());  
// console.log(balance2.toString().length);
// console.log(balance2.toFixed(2)); //output 2000.00 

const otherNumber = 23.34657
// console.log(otherNumber.toPrecision(4)); //output 23.35

const hunderds = 10000000
// console.log(hunderds.toLocaleString());//to local string bydefault US currancey ke hisab se hoti hai 

// console.log(hunderds.toLocaleString('en-IN'));//en-IN lagane se hamari indian currancey ke hisab se 
//value dikti hai 

//js me max value and min value bhi hoti hai
//Number.MAX_VALUE //ye syntex google browser ke console me dekne ka

//+++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

//maths library bydefault js ke saat ati hai.

// console.log(Math); 

//maths ek apneaap me ek object hai. maths ke bahot sare property hai
//usko dekhne ke liye hame brwoser me console kare hame kafi sare value mil jati hai.

//console.log(Math.abs(-2)); //output 2

//abs negative value ko positive karta hai. magar positive ko negetive nahi karta.

//console.log(Math.round(4.6)); //output 5

//math.round [point value [ashariya value] ke liye use kiya jata hai] round me 0.5 se kam value rahi
//to 0 value denga aur 0.5 se jayada rahi to 1 value denga ye round hota hai.

//console.log(Math.ceil(4.2)); //output 5

//math.ceil me thoda bhi value 4.0 ke uper ho to 5 hi pakdenga . top value hi lenga
//badi value round of karenga.

//console.log(Math.floor(4.9)); //output 4

//math.floor me 4.9 bhi rahi to 4 hi paktenaga 
//choti value round of karenga lowest hi value lenga.

//console.log(Math.min(2 ,3 , 9, 10, 23,));

//math.min me arry type sort karenga min value.

//console.log(Math.max(2,3,4,5,11,67,));

//math.max me arry type sort karenga max value.



//console.log(Math.random());
//hamesha math.random ki value 0 se 1.0 ke beach me aati hai.

 console.log(Math.random()*10+1);
 console.log(Math.floor(Math.random()*10)+1);

 const min = 10;
 const max = 20;

 const dise = Math.floor(Math.random()*(max-min+1)+min)
 console.log(dise);
 