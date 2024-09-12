/*
Object litreals actualy me hai kya?
object litral actualy me sirf itna

const user = {
}
object litral srif itna hai. javascript isiko hi base unit kaha gaya hai. wo hi object hai wo hi 
object litral hai. basicaly jaise waha classes hote hai. to yaha object litrals hote hai.

object litrals collection hote hai properties aur method ye sare properties hai . 

kaise pata lagao current contex pe loop lagao. current chezu ki baat karraha hu.
monday to monday hota hai isweek ka monday alag hai gai wale monday alag hai. ane wala monday alag hai
aapko contex batana padenga. kis monday ki baat kar rahae hai. waha par hi hamara this keyword  kaam me aata hai. 

this keyword se dariye maat 
aap this keyword jab bhi use karrahe hai. current contex ki baat kar rahe hai. 

username not defined usko patahi nhi konse username ki baat kar rahe ho. usko pata hi nhi 
actualy me ye broweser ke node ki kisi ke pass jata hai. bataya tha na memory ke under ek ek 
karke . jab rakha gaya tabye details to leli magar usko pata hi nhi user variable kya hai 
function ke under bhi to exicution contex banta hai. yaad aya vo bana tha wo aapne 

bola hi nhi bahar se bhi koi saman lena hai. jab bahar se koi saman lena hai. excution contex
ko batana padta hai. apne saman ki baat kar raha hu. tab ham yaha this keyword use karte hai.

function me ham sirf this ko print kare to this ki value batao ye bahot hi intresting chez hai.
print hoga current contex 
{
  username: 'Aavez',
  loginCount: 8,
  singnedIn: true,
  getUserDetails: [Function: getUserDetails]
}
  arre curent contex jo ek word sabko samaj me nhi ata hai aksar logo ko kis current contex ki baat kar rahe hai ye raha aapka object ye raha current contex jitna hamara memory ke under value hai vo ek hi saat rakha gaya. aur isko sabke bare me pata hai. 
  to aap ne getUserDetails fucntion ko bola uper se ja ke value lo 


  agar ham this ko fucntion me nhi 
  bahar global contex me print karaye to kya ayenga
  console.log(this) {} empty pranthises ayengi. matalab abhi gloabl contex me kuch bhi nhi hai.
  lekin ye global contex change hota hai. node ko browser se nikal ke bahar leke aya hai. 
  this ki value change hoti raheti hai. brwoser me alag ati hai
  aur node me alag aati ati hai.

  broweser me this print karte hai to bahot sari cheze aati hai. sabse se pahele window object milta hai.
  us me bahot sari cheze milti hai.
  bydefault browser me jab this run hota hai to aap ka this ka vlaue 
  current contex global contex usme bahot sari cheze rakkhi hoi hai.

  lekin jab node enviromnet me aate hai. tab uske under kam hai.

  

*/

const user = {
    username : 'Aavez',
    loginCount : 8,
    singnedIn : true,
    
    getUserDetails : function(){
        // console.log('got user Details from data base.');
        //console.log(`Username : ${username}`); //username not defined.
        console.log(`Username : ${this.username}`);
        console.log(`LoginCount : ${this.loginCount}`);
        console.log(`SingnedIn : ${this.singnedIn}`);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// console.log(this);

//------------------------------
const user2 = {
    username : 'Hitesh',
    loginCount : 9,
    singnedIn : false,
    
    getUserDetails : function(){
        // console.log('got user Details from data base.');
        //console.log(`Username : ${username}`); //username not defined.
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(user2.username);
// console.log(user.getUserDetails());
console.log(this);

/*
agar hame multiple user ki details banani hoto hame baar baar yahi kaam karna padenga isko 
rokne ke liye ham construtor ko use karte hai.
*/


