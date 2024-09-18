/*
classes aisa kuch interesting kuch nhi hai bus kuch topic hai. behind the scene javascript me classes
hoti nhi hai prototype object fucntion wahi chalta raheta hai.

chalo ab ham aate hai hamre topic pe classes. classes aapko ab itna pareshan nhi karingi javascript ke under . ab aap javascript ke under bahot sari cheze samaj chuke hai.

object oriented programing me bahot sari baate maloom hai bus ek dhayn dijiye .
ye sara kaam ho raha hai ES6 ke baad. 
classe ye sirf syntatic sugar hai behind the scene new keyword this keyword sab wahi se horaha hai.
*/

/*class ek keyword hai js me ab iske baad aap ek class bana sakte hai. ek userbana hai. directly aap ajaiye curly brases likh ligiye. ab aapko object banana fucntion banana ki zarrorat nhi sidha class likh digiye. actuly valid syntex hai. 
class User {
}

class ke pass aur bhi bahot si cheze ho sakti hai. jaise property bhi add karsakte hai fucntion bhi add karskate hai. karenge ge bhi ham .
sabse important hai aapka constractor.
construtor kab call hota hia . jaise hi ek object intialize hoga yani ke wo new keyword hai. na jaise hi kaam me longe waise hi construtor aapne aap me call hojata hia.
aap user banarahe honge to usse user bhi longe. ,suppose kariye email bhi le rahe hai. aur password bhi lenge. wahi 3 chezu ko set kardo varibale me. this.username to har koi axis kar paye.
hanji contex set karna hoga. contex ke bina kaam nhi chalenga.
ye to aapka basic construtor set hogaya. waise haar baar construtor likhna jarori nhi hia. but power mil rahi hai opportunity mil rahi hai. le lete hai.

class User {
constructor(username, email, password)
{
this.username = username;
this.email = emial;
this.password = password;
}
}
iske baad ek method bhi hai. encryptPassowrd hosakta hai password clear text me nhi rakhonge to encrypt karko sidh hi likh do.
 encryptPassword(){
}

class User {
constructor(username, email, password)
{
this.username = username;
this.email = emial;
this.password = password;
}
 encryptPassword(){
}

}
ha directly likh do encryptpassword isme aisa syntex hai aapko fucntion vaigaira wo sab use nhi karna padta. hai ye to fucntion hi bt kyonke ab class ke andar likh rahe hai to naam badal denge ham kyon badlenge programs hai bhi badlenge. badalne me maja aata hia.naam vagaira ko . 
ab isko method bolne lag gaye hia jaise yaha pe bhi to hai ye. para meters hai inko bahot sare namo se bhi jana jata hia.alag alg syntex hai aaple pass yaha pe to parameter hai iske refrences hai bahot 

to is method ko return kar rahe hai. jo bhi call karenga to `${this.password}abc` kuch add kare abc
yahi hamra passsword hia. kuch creative to hamne kiya nhi.

class User {
constructor(username, email, password)
{
this.username = username;
this.email = emial;
this.password = password;
}
 encryptPassword(){
 return `${this.password}abc`
}

}

is se ham ek user bana lete hai. vahi hamara vala chai. ab new keyword use kariye aur . new keyword se aap ne ek user creat kara. ab user creat karte hi 3 cheze aapse maang raha hai username emial aur password lelo.

cosnt chai = new User ('chai', 'chai@gamail.com', '1234')
ab ham console.log bhi karke dekete hai.

ko jo hamari chai hai usme se encryptpassword leaao. aur usko encrypt kardo. to dekhte hai kya hame rturn value mil gai hai. chailiye wo dekte hia. bola tha bahot essay hai itna difficult bhi nhi hia. output aya 1234abc thik haiji hogaya password encrpt

console.log(chai.encryptPassword())

aur method add karte hai chaliye usename bhi lete hai. suppose kariye username hame lowercase me mila hia to usko ham upper case me karte hai.

changeUsername(){
return `${this.username.toUpperCase()}`}

under the hood ye actualy me kaam kaise ho raha hai. ye mujhe class ka syntex nhi mila hota to mai karraha hota.

behind the scene.
*/
//------------------------------------------------------------
//class method
// class User {
//     constructor(username, email, password ){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return`${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User('chai', 'chai@gmail.com', '1234')
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//-----------------------------------------------------------------------
//fucntionMethod

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new User("tea", "tea@gmail.com", "1234");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

//exatactly hamne same behind the scene bana diya class ka fucntion me.
//------------------------------------------------------------------------------------------------------

/*

*/