const user = {
    username: "Aavez",
    prrice: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website. your website price is ${this.prrice}.`);
        console.log(this);
    }
}
//welcomeMessage() error aata hai.
user.welcomeMessage();

//ab username sam ho gaya to hamare pass result kya ayenga.

//contex means value ham ne username ki value change ki .
//username ko ham this.username se axis kar rahe hai.
// kyun ke ham ne object ke under ek function declare kiya hai. 
//function me username ko axis karne ke liye hame this.username karna hota hai
//this current contex ko refer karta hai.
//ham function me sirf username se axis nhi karsakte.

user.username = "sammy";
user.prrice = "free";

user.welcomeMessage();

((username)=> {
console.log(`${username} DB connected`);
})("Aavez");
(
    aurcode=(price)=>{
        console.log(`course price is ${price} .`)
    }
)(999)
