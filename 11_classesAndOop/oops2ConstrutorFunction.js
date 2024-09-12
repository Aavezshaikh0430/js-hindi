/*
constrution function ki baat karte hai.

agar hame multiple user ki details banani hoto hame baar baar yahi kaam karna padenga isko 
rokne ke liye ham construtor ko use karte hai.


 */

// const promisOne = new promisOne();
// const date = new Date();

/*ye new keyword kya hai kaha se aya hai.
ye new constructor function hai. ek hi object litrals se ek multiple instanceses bana sako
dekhiye ek hi instance hoga mai to khush hu memory ke under jayda jagha nhi ja rahi hai.
sara kaam ho raha hai.
lekin kai aise situation hoti hai.specialy [promis date] vaha hame naya instance hi chahiye purani 
value ko affect mat karo . this vagaira bolrahe hai wo contex rakho waha pe jo exicution contex hota 

ye new keyword hai wo exicution contex banane ke liye kaam ata hai. isiko ham construtor function bolte hai. 
classes ka baad me ham pahele
fucntion ke under hi kaise kaam karta hai construtor wo dekte hai.

suppose kare aap ek fucntion bana rahe hai. classes to bana nhi rahe hai. function bana rahe hai.
object bhi nhi bana rahe hai fucntion bana rahe hai.
aapko pata hai fucntion ek hi baar run hota hai. ek hi global excution contex hota hai.

suppose kare mai ne user naam ka ek function banaya us me username do ,login count do, aur isloggedin do
ab in 3 value ko name me set karna hai.

mai ne kaha mere pass already varible hai username us me aap assign karo uppervala username problem kya
aati hai hame nhi pata jo aap pass kar rahe hai. wo konsa wala username hai. kis me kya assign ho raha
hai. agar mai username ki jaga myusername= username liko esaily pata lagenga. ke myusername varible hai
username hai wo parameter hai.
lekin aksar coding partice me pata laga hai. dono ke naam same hi likhte hai.
lekin batayenge kaise mere under ke varible konse hai. obesuly this keyword

this.username = username
ye lefthand wala username hai wo hamra varible hai. aur right hand vala username hai wo aap pass karke de rahe ho.

aap chahye to variable ke naam chnge karsakte hu but ye this ka concept ayenga.
actually ham ne dekha ye this kya hai. this ek object hai. object ke under value dale ja rahe hai.
this.username this.logincount , 
this ek blank object hi to hai. object ke under dale jao this.username, this.logincount dale jao.
ye hogaya hamara basic.
 */

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //intresting aap yaha se this ko return bhi karsakte hu 
    //return this se kya howa jo object hai wo pass on ho gaya. ab jo bhi is ke saat kelenga wo
    // is value ko axis karnga. 
    return this
}

/*
intresting chez ye hai abb ham new keyword ka use karte hai. isko bole hai userOne 
ab userone kya karraha hai 
ham kya kar rahe the 
const userOne =user('aavez' , 7, true) 
console.log(userOne)
value kya ai hamare pass .
bahot sari getter setter promise bahot value ke saat fetch
hamare value bhi aati hai

  name: 'aavez',
  loginCount: 7,
  isLoggedIn: true

problem kab aati suppose kare mai ne bola 
const userTwo =  User('chaiAurcode', 4 , false) aap bhi user se baniye 
ab ham vapas se userone ki value print kara ke dekte hai. kya hota hai arre ye kya hogay!!!!
ye to expected hi nhi tha. username ke under chaiaur code aagaya. 

output userOne ka
username: 'chai aur code',
  loginCount: 4,
  isLoggedIn: false 

dekhiye aap ne to userTwo kabhi print hi nhi karaya.but userTwo ne kya kara value override kardi sari
kya ye value override ho rahi to accha lag raha hai. pura ka pura code hi band baja dega hamara.
agar is traha se karne lage to. imagin kariye 10 12 progrmar jab code karte hai. aur is trah se value override kati hai.to kya hoga. bahot problem hogi 
isiliye promise vale video me bina kuch kahe new keyword use karrahe the ham.
ab samaj me aaya kya kahani hai.  agar aapko kahani samaj me aagai ye sab kyon ho raha hai.
tab aapko samj me aagaya ke actually me jo baat karraha tha construtor fucntion ki

constructor fucntion kya karta hai. har baar ek naya isnstance deta hai. ek nai copy deta hai.
wo copy ke saat aap jo khelonge wo aapki hai. jo likh rahe ho wo aapka hai. original ya dusre usse e
effect nhi horahe hai. karna kuch nhi hai 
User se pahele new keyword aap add karna hoga. mujhe naya wala instance degiye.


*/

const userOne =  new User('Aavez', 6 , true)
const userTwo =  new User('chai aur code', 4 , false)
// console.log(userOne);
// console.log(userTwo);

/* output:
User { username: 'Aavez', loginCount: 6, isLoggedIn: true }
User { username: 'chai aur code', loginCount: 4, isLoggedIn: false }

new keyword use karne se user kitana clin hogaya hai faltu ka mass hai wo bhi nhi araha hai.
usko pata hai nhi dena hai. userone ka alaga copy hai
usertwo ki alag copy hai.
wo jo alag khelna hai wo alag khel raha hai. koi dikkat wali baat hi nhi hai.

isse hame paata laga construtor function hame har time naya instnace deta hai.

agar ham fucntion me this return nhi karte to kya hota
aap return this likhiye ya nhi likhiye implicity aapka this defind hota hi hai. aapko return 
karne ki zarrorat nhi hai wo automaticaly return hota hai this.

abb new keyword ke liye kuch line note kar ligiye.
new keyword aap use kareonge to sab se pahele empty object creat hota hai. isko instance bolte hai.
ek naya object creat hogaya.

step1] ek naya object creat ho gaya.
step2] constructor fucntion call hota hai. new keyword ke vajaha se. ye kya karta hai jitne bhi arguments hai usko pack karta hai.aap ko de deta hai.

step3]aapka this keyword hai. jo aapne argument likhe hai. usme inject hote hai.

stpe4] aapko miljate hai fucntion. ye hamar basic making mechanism hai.

4 step ka karnama hai.pahela ek object creat hoga.
 dusra aapka jo likha hai wo pass on hoga.
 thisra aapka jo this creat hogaya hai. usme add hojayenge.
 4th me aapko mil jayenga.

 to aapko multiple instance pata hai. accha ek aur cheez hai
 ye jo example ham ne likha hai wo sare ke sare property hi hai. aisa kuch nhi hai jo aapko 
 ruk raha hai.koi method nhi likh sakte aisa kuch nhi hai.

 this. greeting naam ke method banaya hai. mehtod hi bolenge call back bhi bolsakte hai. jo marzi aye
 wo bol sakte hai.


*/

function user2(username, loginCount, isLoggedIn){
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn;

this. greeting = function(){
    //console.log(`welcome ${username}`); //current contex ke liye this. lena hoga 
     console.log(`welcome ${this.username}`);
    
}

return this
}
const user2One= new user2('Hitesh', 78, true)
console.log(user2One);
console.log(user2One.constructor);


/*
ye constructor available hota hai kya . kya mujhe milta hai. construtor available hai to chaliye
dekte hai kya milta hai. usme ek fucntion aya hai.jo ke hai user2 
construtor properties hoti kya hai
kuch nhi hoti hai hoti hai refrence hoti hai khud hi ke bare me
khud hi ke bare me refrence hai is user2 ke bare me ye actualy aapka construtor hota hai.

yaha aap construtor ke baad ye bhi dekh sakte hai. ke 
userone usertwo ye alag alag hai kya.
ek aur aapke pass method hota hai oprator hota hai basically instance of

instance of se check karsakte hai ke wo instance userone ka hi hai kya 
agar hai to value true ayeingi. 

new keyword ke bagir kare ge to kya hoga.

accha yaha aapka yaha bahot sara encapsultion bhi ho raha hai. abstration bhi ho raha hai. user ko nhi pata ke construtor method bhi hai. pahela abstration yahai hai. user ko ye nhi pata greting kaise 
work kar rahi hai internaly ye bhi abstration hai.
encapsultion bhi yahi pe dekne ko mil raha hai. user2One ke under ham ne sab kuch encapsulate kar ke rakha hai. aavez ye user2One propertiey me ja ke store ho raha hai.ya kaha store ho raha hai . hame isse koi matlab nhi hai. 
*/


