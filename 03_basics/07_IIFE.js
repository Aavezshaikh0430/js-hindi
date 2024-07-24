//ek bahot hi Intrested concept hai IIFE.

//Immediately Invoked Function Expressions (IIFE).
//jaise hi aap ne ek function likha use immediately exicute karana hai.
//kyon hame turant exicute karana hai. dekhiye kai baar aap aisa karenge.
//especially kai baar ek file likhte hai jis ke under sirf DataBase conection hai
//to ham chahate hai jaise hamari application start ho waise us file ke under
//hamara database ka connection start ho. 

//sirf itna hi nhi jo Global scope hai ke under koi variable declare hote hai.
//hosakta ham us function ke under wo global variable kuch problem kare.
//kyon ke global variable to available hai.
//bacche to jake bado se mang sakte hai. 
//usi taraha jo bhi fucntion me declare kar rahe hai wo global scope se pollute ho jata hai.

//to ye do main resign hai
//1.global scope se pollution nhi chahiye hame. to ham hamara alag se pora scope bana lete hai.

//2. aur mai chahata hu wo immedialtly exicute ho jayen.

//jab ham function create karte hai to wo immdeatly exicute hota hai.
//magar jo global scope se jo cheze pollute hoti hai. use se kaise bacha jaye
//isliye ham iife likhte hai.

function chai (){
    console.log(`DB CONNECTED.`);
}
chai();

//kisi function ke bahar () paranthesis lagayenge to automatically ek block ban jayen ga.
//use me bhi kaam kiya jata hai.


//iife simple fucntion

(function chai (){
    console.log(`DB CONNECTED ONE.`);
})();

//ye hai aapka iife.

//()()

(function chai (){
    console.log(`DB CONNECTED ONE.`);
})();
(function chai (){
    console.log(`DB CONNECTED ONE.`);
})();

//what is iife?

//sirf ye mat boliye ke jo function immidialty exicute hojaye 
//ye boliye global scope se jo pollution hojati hai kai baar to
//to wo global scope ke jo variable ya kuch bhi declaration hai
//uske pollution ko hatane ke liye ham ne iife ka use kiya.

//arrow function in iife.

(function chai(){
    //named iife
    console.log(`DB CONNECTED TWO.`);
})();
//simple and arrow fucntion combine
(()=>{
    //unamed iife
    console.log(`DB CONNECTED THREE.`);
})();



//two iife ke beeach me hame ; lagana bahot zarori hai nhi to error ata hai.
//code run nhi hoga syntex correct bhi raha to.
//yaad rakhiye.
(()=>{
    console.log(`DB CONNECTED TWO.`);
})();

(()=>{
    console.log(`DB CONNECTED THREE.`);
})();

//iife arrow fucntion with parameter 

((username)=> {
    console.log(`DB connected ${username}.`);
    })("Aavez");
    (
        aurcode=(price)=>{
            console.log(`Course price is Rs. ${price}/- `)
        }
    )(999);

