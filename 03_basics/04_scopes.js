//nested scope

//jab bhi ham javascript me {} curlybrases karte hai.
//to ye alag se ek scope banta hai. ye alag se ek antity hai.
//iska global scope ke khas koi kas relation nhi hota hai.
//magar jo bhi global scope me se block scope me axis karsakte hai magar 
//block scope se ham global scope me axis nhi karsakte. 
//block scope se ham gloal scope me axis nhi kar sakte.

function one (){
    const userName= "Aavez"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one(); //jab tak one() commit rahenga output nhi ayenga output ke liye one ko uncommit karo

// secound eg.

if(true){
    const username = "Aavez"

    if(username==="Aavez"){
        const website = " Instagram"

        console.log(username + website);
    }
    // console.log(website); error  kyon ke scope ke bahar axis nhi hoga website
}
//console.log(userName); //error kyon ke scope ke bahar axis nhi hoga username .



//+++++++++++++++++++++++++++++++ Intresting++++++++++++++++++

//jab bhi hame function axis karte hai function ke upper bhi axis karsakte hai 

//jaise

//ham function ko declartion se pahele axis karskte hai.

console.log(addOne(5));
function addOne (num){
    return num + 2
}


//magar jab ham function varible me store karte hai to ham us function ko function ke upper
//function se pahele axis nhi karsakte 
//isi ko ham hoisting kahete hai.

//jaise 

//console.log(addTwo(6)); my fun ko ham function ke upper axis nhi karsakte. function ke niche axis 
//karsakte hai

//addTwo ye varibale hai. js me variable bahot jayada powerful hote hai. 
//ye kuch bhi hold karsakte hai. JSON value hogai function hogaya 
//bahot kuch hold karsakte hai varible me.

//varibale me store karne ke baad. ham function declartion se pahele axis karnhi sakte

const addTwo = function (num){
    return num + 4
}
console.log(addTwo(8));

