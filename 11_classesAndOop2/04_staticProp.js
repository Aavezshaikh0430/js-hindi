/*
ham kya chahete hai 

class User {
    constructor(username){
        this.username = username;
    }
}
isme hosakta hai aap ek method bhi lagaya. ek mehtod me kya lagana chaheta hu logMe().log me kaya karta hai simply console.log karta hia.

class User {
    constructor(username){
        this.username = username;
    }
logMe(){
console.log(`Username : ${this.username}`)
}
}

aur ek method add karana chaheta hu jaise hi user bane wiase hi user ko ek unique Id mil jaye .
jab aap database me save karonge na jaise mongodb me jaise aap user banaoge to automaticaly uski ek unique id mil jati hai. jab database me save karonge na to waise mongodb automaticaly jaise aap user banate hai. uske saat _Id attched kardeta hai. wahi fucntionlity ham yaha kar rahe hai.
creatId method banate hia.
aur return kar rahe hai. map.random use nhi karna chahe raha hu yaha pe ek hardcode vlue de raha hu.

class User {
    constructor(username){
        this.username = username;
    }
logMe(){
console.log(`Username : ${this.username}`)
}
creatId(){
return `123`
}
}

ab mai kya chahe raha hu is jo id hai. aap user banaoge to suppose kariye aavez hi samaj ligiye. agar aavez new user hai. aur usne ek username bhi pass karke rakha hai. aavez to . 
aavez ko baar baar creat karne ke liye koi ruk raha hai.
aavez.creatId () mai bana sakta hu  . magar aavez.creatId () ko banne ke liye koi rukh nhi raha hai.
codding me banne se jayada rukna jarori hota hai. sab cheze axis mat do ruko kuch chezu ko 

class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    creatId (){
        return `123`
    }
}
const Aavez = new User('Aavez');
console.log(Aavez.creatId());

print karne ke baad hamare pass aya 123

paar kai baar aisi situation aayngi jab aap har user ko creatId ka acess nhi dena chahunge. jo is class se instance howa hia. 
uske liye kuch mat karo uske aage bas static keyword laagado bus

static us method ko ya us property ko axis hone se rukta hai.

class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    static creatId (){
        return `123`
    }
}
const Aavez = new User('Aavez');
console.log(Aavez.creatId());

aksar log static keyword ko aise samjate hia. ke us mehtod ya property ka acess nhi dena chahete hai. tab static keyword ka use karte hai.
arre aise nhi smajane ka. arre bahot sare kaam hote hai. id ka acess sab ko nhi dena chaheta ta kabhi dena chaeheta hu kabhi nhi dena chaheta hu bahot sare case hote hai.

agar aap extends bhi karonge to waha par bhi itta problem nhi aata hia.

ab hame ek teacher class banate hai. usme construtor bhi hai construtor kya leraha hai. ek email to chailiye this.email = email 
accha yaha super construtor bhi call ho sakta hia to chaliye super(username) lete hai. 
ab teacher extends kiya hai to bana lete hai.
const iphone to iphone teacher se banega kya kya pass karna hai username aur emial  
const iphone = new teacher ('iphone', 'i@phone.com')

class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    static creatId (){
        return `123`
    }
}

class teacher extends user {
cosntrutore (username,email)
super(username);
this.email = email
}
const iphone = new teacher ('iphone', 'i@phone.com')

ab mereko pata hia ab mai iphone .logMe() karta hu to mujhe iphone melenga 
par lekin leikin 
kya mai iphone.creatId() ko acess kar sakta kaya yahi to mudda tha 
to han ji jaise hi iphone.creatId() kara to kisi bhi child ko bhi acess nhi karne de raha hia.
koi class ko inherate karne nhi de raha hai static keyword .
ye bada hi intersting maamla hai

 */

class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    // creatId (){
    //     return `123`
    // }
    static creatId (){
        return `123`
    }
}
const Aavez = new User('Aavez');
//console.log(Aavez.creatId()); // agar creatId () se pahele static raha to hi eror ayenga. 

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
        
    }

}
const iphone = new teacher ('iphone' , 'i@phone.com')
iphone.logMe() //username is phone
console.log(iphone.creatId()); //TypeError: iphone.creatId is not a function

/*
ab mereko pata hia ab mai iphone .logMe() karta hu to mujhe iphone melenga 
par lekin leikin 
kya mai iphone.creatId() ko acess kar sakta kaya yahi to mudda tha 
to han ji jaise hi iphone.creatId() kara to kisi bhi child ko bhi acess nhi karne de raha hia.
koi class ko inherate karne nhi de raha hai static keyword .
ye bada hi intersting maamla hai
*/
