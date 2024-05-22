let score = 123443

 console.log(typeof score); //ye bhi sahi hai

console.log(typeof (score));

let scoreChangedInNumber =Number(score);
console.log(typeof scoreChangedInNumber);
console.log(scoreChangedInNumber);

let score1 = "123443jhgs"

 console.log(typeof score1); //ye bhi sahi hai

console.log(typeof (score1));

let scoreChangedInNumber1 =Number(score1);
console.log(typeof scoreChangedInNumber1);
console.log(scoreChangedInNumber1);

//"33" ko no. me convert karte hai to easy 33 hojata hai  "33"=> 33

//magar "33abc"=> no. me convert nhi ho pa raha hai [NaN] ayega "33abc"=NaN .
//magar "33abc" ka typeof number hi a raha hai ye zara confiusing hai. 

//true=>1 true convert horahi hai 1 me false convert ho rahi hai 0 me false=>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn);
console.log(booleanIsLoggedIn);

let isLoggedIn1 = 0
let booleanIsLoggedIn1 = Boolean (isLoggedIn1);
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean (isLoggedIn2);
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "Aavez"
let booleanIsLoggedIn3 = Boolean (isLoggedIn3);
console.log(booleanIsLoggedIn3);

//boolean 1 =>true; 0=>false
//" "=>false
//"Aavez"=>true

let someNumber = 33;
let convertNumber = String(someNumber);
console.log(convertNumber);
console.log(typeof convertNumber)

//33 ko string me convert kare to output 33 ayega magar typeof check kare to String ayega




