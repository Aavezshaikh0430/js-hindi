
//this. keyword current contex ko refer karta hai.
//contex means value 
//variable kya value hold kar raha hai.
//contex means kis ke bare me baat horahi hai.
//eg: movie bahot contex hai . movie kis ke bare me hai. 
 


//imp code
const user = {
    username : "Aavez",
    price : 999,

    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        //console.log(this) 
        //this ne bataya current contex 

    },
    
    
    
}


//jab ham user.welcomeMassgae(); print karenge to hame this. current contex bataynga 
//pahele username aavez tha 
//pahele current contex me username "aavez " hai 
user.welcomeMessage();

//phir hame ne current conetex change kardiya 'sam'.
//jab user.username = "sam " karne ke baad current contex ki value sam ho jayengi.
user.username = "sam";
//username ki value change ho gai "aavez" se "sam " hogaya username.

//username ki value change ho jayengi "aavez" se "sam" 
user.welcomeMessage();

//hum object ki value ko this. keyword se axis karsakte hai function ke under magar function us object ke under hona chahiye.

console.log(this);
//jab hame sab console log hata kar sirf empty object print hoga{}

//jab ham node environment me hote hai tab this refer kar raha hai.
//empty object ko.
//abhi global me koi object hi nhi hai.


//magar jab ham this keyword ko brwoser me run karte hai.
//this keyword se windows dikhai dega ye sab alag alga [{} aur window] aa kyon 
//raha hai kyon hota hai.
//to pahele ke time pe JS ko run karne ka ek hi tarika hota tha
//brwoser engin ke under magar . magar ab ham ne us engine ko bahar
//nikala alag alag naam diye kuch ne node , dino , ban naam diya.
//ab apne pass standalone engine hai.
//jab bhi brwoser ke under wo engine run hota hai to sab se jayaga global object
//hai [windows object] hai.brwoser ke under global object hai wo hai window. 

//brwoser ke bahar ke jitne bhi js runtime engine hai usme this ki value
//empty pranthesis hi ati hai {}


//end code 

function chai (){
    console.log(this);
}
chai()

//jab ham kisi function ke under this ko print karte hai. node environment ke under
//to aap ke pass global value ati hai. kafi value hame milti hai.
//this ke under kuch to rakha howa hai aur aap chizo ko axis karsakte hai.


function chai1 (){
    let username = "Aavez"
    console.log(this.username);
}
chai1()

//ye hamara this contex hai wo sirf object ke under hi work kar raha hai.
//function ke under aakar mai this keyword use nhi kar pa raha ho

//aur kis traha ham function ko exicute kar sakte hai.
//variable

const chai2 = function (){
    let username = "Aavez"
    console.log(this.username);
}
chai2()

//ye hamara contex hai ye actually object ke under hi kaam kar raha hai. 
//aise function me this.username use nhi kar pa raha ho.

//ham function ke under aise this.username axis nhi karsakte 

//ye hamara this contex hai wo sirf object ke under hi work kar raha hai.
//function ke under aakar mai this keyword use nhi kar pa raha ho.

// const chai3 =       () =>{
//     let username = "Aavez"
//     console.log(this.username);
// }
// chai3()

//varibale store wale method ka function ke undder ham function keyword ko nikalna hai 
//aur round brases() ke aage => ye arrow lagana hai ban gaya arrow function. 

//arrow function me ham function keyword nikal kar () round barases ke aage => ye keyword add 
//karna hai ban gaya aapka arrow function.
//

const chai3 = () =>{
    let username = "Aavez"
    console.log(this);
}
chai3()

//jab ham arrow function me this ka use karte hai. to empty {} ata hai.