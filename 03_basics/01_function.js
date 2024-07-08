//function means aapne jo bhi 10 line ka 20 line ka code likha hai.
//usse ek package ke under rap [band ] kiya hai . use package ko aap
//jitni bar jaha par bhi copies le ja sakte hai.

// console.log("A");
// console.log("a");
// console.log("v");
// console.log("e");
// console.log("z");

//ye uper ka console ko hame ko 10 baar repeat karna ho to ye kaam bahot bad jayenga obeaouly
//10 baar karne me dikkat hogi
//hamare pass ek tarika hai function jis se 10 baar asani se print karwa sakte hai.
//ye kaam ko kam karne ke liye function use me ata hai.

//function :keyword
//myName : function name [jo bhi aap raksakte hai rakh sakte hai. jaise variable ke naam rakh sakte hai]
//() : function syntex
//{}: function scope

function myName (){
console.log("A");
console.log("a");
console.log("v");
console.log("e");
console.log("z");
}



// myName();

//myName ye function ka refrence hai.
//() parenthesis exicution.

//ab ham ye code ko jitni marba ho sake utni martaba use call karwa sakte hai.

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}



// addTwoNumbers();
//simply ham sirf exicute karenge to kuch bhi nhi hoga.
// addTwoNumbers(3, "e");
//(3, "a") is liye ham checking lagate hai . kahi user number ke alwa kuch aur add kare
//yaha checking zarori hai.
// addTwoNumbers(3, null);

// addTwoNumbers(3, 5);


//function addTwoNumbers(number1, number2) (number1, number2)
//number1, number2 ye parameter hote hai function ke.

// addTwoNumbers(3, 4);
//(3, 4) 3 aur 4 ye Argument hai.


// function addTwoNumbers1(number1, number2){
//     console.log(number1+number2);
// }
// const result = addTwoNumbers1(3,7);
// console.log(result);

//output to aa raha hai magar
//result ki value undifined aai vo is liye
//yahi sab se bad intersting concept hai
//function se aap ne kya bheja
//console karne ye nhi hai ke function hame wahi value  return kara .
//return apne aap ne ek concept hai
//console ek sirf console print karna hai


function addTwoNumbers2(number1, number2){

    // let result1 = number1+number2
    // return result1;
    return number1+number2;
    console.log("aavez")
   
}
 //ye aavez kabhi bhi exicute nhi hoga
    
    //function ka rules hai reuturn ke baad koi kaam nhi karenga function.
    //by default function ki defination ka rules hota hai.
    //return ke baad koi kaam nhi karenga function.

const result1 = addTwoNumbers2(11,7);
console.log(result1);


//user login howa hai use ham ek massge dikhana hai. itna ek task mila hai.

function loginUserMassage(username){
    return `${username} just logged in.`

}

loginUserMassage("Aavez");

//ab result kya ayenga. bahot sare log karte hai mistake 
//code run kare tab kuch bhi nhi aya output. function exicute howa
//lekin us fucntion ne value return ki aapne bola us value ko return 
//kar do . function ne value return kar di
//kahi bola to nhi print karne ko . ya kisi variable me store karne ko 

const loggedinMassge = loginUserMassage("Aavez");
console.log(loggedinMassge);
//or
console.log(loginUserMassage("sk avez"));

//is traha se parameter lete hai .loginUserMassgae("Aavez")

function loginUserMassage1(username){
    return `${username} just logged in.`

}
console.log(loginUserMassage1());

//agar ham ne logingUserMassga1() koi para meter nhi pass kiya to 
//undefined ayenga.kyon ke wo defined hi nhi howa hai.
//is liye ham if else ka use karte hai.

function loginUserMassage2(username){
    if(username === undefined){
        console.log("please enter a username");
        

    }
    return `${username} just logged in.`

}
console.log(loginUserMassage2());

//output please enter a username
//undefined just logged in.

//magar hame undefined just logged in ye maassge nhi dikhane hai to ham 
//if else me return likhe nge jis se code if else ke baad age nhi bade ga
//niche ke line tak nhi pahonch paayenga.
//

//profetional coder if(!username)

//default value bhi likh sakte hai 
//function loginUserMassage2(username = "sam")
//minimum value sam hi print hogi

function loginUserMassage2(username){
    if(username === undefined) {
        console.log("please enter a username");
        return
        

    }
    return `${username} just logged in.`

}
console.log(loginUserMassage2());


