//javaScript sikhna ho to 2 concepet pakke hone chahiye 
//1.Objects  2. Events

//objects ko ham 2 tarike se declare kar sakte hai 
//1)literal ki tarha  2)Constroctor ki traha.

//singleton ka matlab) constroctor se jab object banate hai vo singleton hota hai.
//litral ki traha ham object banate hai vo single ton nhi raheta.

//Objects.create //ye objects constroctor method hai. isime singleton object banta hai.



//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aavez",
    "full Name": "Aavez shaikh",//jab hame  property name object me "" ke under aye to ham .full name 
    //se track nhi karsakte tab hame JsUser["full name"] is traha se track kar sakte hai.
    age: 29,
    email: "Aavez@google.com",
    location: "Osmanabad",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym] : "mykey1"

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);//[email] rong syntex []ke under kabhi bhi "" me likhna hai.
// console.log(JsUser["full Name"]);
// console.log( typeof JsUser[mySym]);

//objects ki properties ko change kaise karte hai.
//email ko change karna ho to

// JsUser.email = "aavez@chatgpt.com";
// Object.freeze(JsUser);

//Object.freeze(JsUser); .freeze se hamara object freeze hota hai koi bhi changes nhi karstakte const 
//type.

//console.log(JsUser);

JsUser.email = "aavez@microsoft.com" //ab email change nhi hoga freez ki wajha se. hamne object freze
//kiya hai ab koi value change nhi hogi.

JsUser.greeting = function(){
    console.log("hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.name}.`);
    console.log(`your age is ${this.age}.`);//`` string interpullation bolte hai.
}

//this. keyword hame  
//jab bhi hame same object ko refrence karna ho to ham this. keyword ka use karte hai
//this. karenge to jo bhi hamara object hai uske under jitni properties h wo mil jayingi.



// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
JsUser.greeting();
JsUser.greetingTwo();

