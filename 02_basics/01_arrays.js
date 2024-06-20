//array
//collection of data 
//arrays resizable hote hai ham arrays declare kare baad me change bhi karsakte hai. 
//arrays me mix datatypes bhi rakh sakte hai jaise number string boolean ek saat rakh sakte hai
//array element  0 index se start hote hai 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakitman", "naagraj"]

// console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4,)
//console.log(myArr2[0]);
//console.log(myArr2);

//brwoser ke under ham new keyword se array declare karenge to hame kuch array prototype milte hai
//matlab array properties milti hai

//1.array method.


// myArr.push(6);

// output[1, 2, 3, 4, 5, 6] push me ek value add hogi akhir me

// myArr.push(7);

 //output[1, 2, 3, 4, 5, 6, 7]

// myArr.pop();

//output[1, 2, 3, 4, 5, 6] pop me akhri value delect hogi .

//array heap meomry me store hota hai is liye ye pora original array change hota hai .

// myArr.unshift(9);

//output [9, 0, 1, 2, 3, 4, 5, 6] unshift me jo value hai vo array ke start me add hogi.

//ye myArr chota array hai maan lo ham kis bade array jis ke element 10,000 tak hoge usme
//ham unshift property use karenge to pore 10,000 element ka index no. change hojaynga
//jisse hamare computer par bahot load ayenge is liye hame unshift ko kam hi use karna hai

//unshift use karne sari arrays ki value change hoti hai  jis se computer par bahot load aata
//computer per hame load nhi ane dena hai 

// myArr.shift()

 //output array ki start value delect hogi shift me koi argument pass nhi karte. 

// console.log(myArr.includes(9)); 

//includes boolean true false return karta jo bhi parameter pass karte 
//hai wo myArr me hai ya nhi . 9 myArr me hai ya nhi .9 myarr me nhi hai is liye false return karenge ga.

// console.log(myArr.indexOf(3));

//3 no index per kya hai
 //index of me jo bhi index paas kare us index no par jo element hai uski value return karta hai.

// const newArr = myArr.join();

//.join method array ko string me convert karti hai
//new variable me 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice method in Array

//slice method 
//slice method array ki copy genrate karke usme original array ko nhi change karta stack memory type
// 1 index no se 2 tak.3 ko nhi pakadta
console.log("A" ,myArr);
const myn1 = myArr.slice(1, 3); //output [1, 2]
console.log(myn1);
console.log("after splice method",myArr);

//splice method
//splice method array ki original value ko change karta hai original array ko change karta hai
//heap memory type jo origanl value ko change karta hai.
//splice 1 index se 3 index take pakadta hai.

const myn2 = myArr.splice(1, 3); //output [1, 2, 3,]
console.log(myn2);
console.log("after splice method",myArr);



