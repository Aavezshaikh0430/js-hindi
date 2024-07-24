//kabhi bhi pora code run nhi hona chahiye.
//pura code conditional base par run hona chahiye.
//jaise aap login ho to aapke pass login page open hona chahiye.
//aap logout ho to aapke pass koi aur code run hona chahiye.
//isi ko bola jata hai controle flow.

//1] controle flow hai if statement.

//if jab contion true hogi tab hi aap ka internal code exicute hoga.
if (true) {
    
}
//false hogi to internal code exicute nhi hoga.

if (false) {
    //ye jo curly braces ka block scope hai .ye code exicute nhi hoga.
}

//condition

const isUserLoggedIn = true;
if (isUserLoggedIn){
    // console.log("Congratulation your logged in facebook.");
}

//<, >, <=, >=, ==, !=

//comparasion oprator
//< kisi se less than raha to
//> kisi se greater than raha to.

// <= kisi se less than ya equal raha to. 
// jaise 2<2 ye statment wrong hogi isi time hum 2<=2 ye statment likh sakte hai.
//2 value check karta hai. ya value choti honi chahiye ya brabar honi chahiye.

//waise hi >= greater than and equal to bhi hota hai.

//== 2 equal ka matalb hai ham check kar rahe hai. ke wo brabar hai. kya 

// 3 != 2
//!= ka matalb kya 3 2 ke not equal hai kya 
//answer kabhi bhi true ana chahiye chaiye negative check kare ya positive check kare.

if(3 !=2 ) {
    // console.log("3 != 2 .This is true statment");
}

// === triple equal kya karta hai.
//ye hamar datatype bhi check karta hai.
//2 == "2"

if (2 === "2"){
    // console.log("exicuted");
}

//ek number data type hai. aur ek string datatype hai. === datatype ke saat checking karta hai.

if (2 !== "2"){
    // console.log("exicuted");
}

//kya 2 nhi hai string "2" ke to hai 
//yes 2 number hai wo "2" ye string hai.
//ye correct statment hai. 

//ye sab question hai. is question ke under jo bhi answer aye ga true or false ke format me hta hai.

const isUserLoggeIn = true;
const temprature = 41 ;

// if (temprature === 42){
//     console.log("temp. is less than 50");
// }
// else{
//     console.log("temprature is greater than 41");
// }
// console.log("Execute");

// const score = 200;

// if (score > 100) {
//     let power = "fly" //ham var power = "fly" ye var axsis hoga block ke bahar.
//     console.log(`User power ${power}`);
// }
//magar interesting baat ye hai ke ham ye power ko if ke bahar exsis kar sakte hai kya.

//console.log(`User power ${power}`); //refrence Error: power is not defined

//kyon ke ham power ko bahar axsis nhi karsakte. ye kahani hai scope ki
//jo bhi variable scope me defind hoge . unka scope sirf block tak hi hota hai
//block ke bahar ham use varibale ko axsis nhi karsakte.

// const balance = 1000;
// if (balance > 500) console.log("test"),console.log("test2");

//implicit scope matlab man liya gaya ye ek hi line me execute hota hai. aap yaha 
//multiple line nhi likh sakte. , comma laga kar aap multiple line ka code likh sakte.

//nesting in if else.

// const balance2 = 1000;

// if (balance2 < 500){
//     console.log('less than 500 ');
// }else if(balance2 < 750){
//     console.log("less than 750");
// }else if(balance2 < 900){
//     console.log("less than 900");
// }else { 
//     console.log("less than 1200");
// }


//multiple condition

//& ampersent
//&& ek bhi statment galt hogya to result false hoga.

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy courses.");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Usser Logged in.");
}



