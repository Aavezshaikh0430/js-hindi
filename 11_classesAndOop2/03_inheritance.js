/*
thoda inheritance ki baat karte hai. prototype se inheritacne aajata hia. prototype feature to nhi but .prototype behahiviour hai javascript ka

inheritance me hia kya . ek class lete hai User. uske under bhi construtor liya .consrtutoctor ke under aap ek user name lele te hai. aur us username ko set kar do this.username se badi hi basic se class hia jo ki sirf username creat kar leti hai aur mehtod bhi hia uske under logMe . ye log me kya karta hai. jo bhi username set kiya hai. us username ka value deta hai. console.log(`Username is : ${this.username}) usernam is aur varibale ke under this.username injecct kar liya kyon ke iske current contex hai hi class ke pass to this. aapke pass har class me puri sab jahaga avainlae hai to. 
ye hogai hamari basic class.

class User {
construtor(username){
this.username = username
}
logMe(){
console.log( `Username is : ${this.username}`)
}
}

//------------------------------------------------------------------------
ke agar is user ko aap MS bana rahe hai. to Ecomerence bana rahe hai to kabhi user ko admin bhi banana padenga. kabhi is user ko teacher banana padhenga. kabhi user ko student banana padhenga. aur username to sabhi ka set hi karonge.
To class lo aur usko bola ki suppose karo ek teacher class bana rahe hai ki ham uske liye teacher bana rahe hai owner ya MS bana rahe hai. to ek keyword hai extends   [extends===prototype]
jaise fucntion me prototype hota tha. ab aap ne extends ek sugar laga diya aap ne  aur usko bola User thik hai. to user laga diya thats it aab aapke pass sari fucntionlity user ki available hai.

class Teacher extends user {
}

ab kya hai ki construtor aap override karna chahunge. marzi nhi bhi kar sakte. magar aap override karna hi chahuge kyon ke teacher ka alag ek construtor hona chahiye teachnicaly to kya kya values loge ab aap . techer ban raha hai. to obeausly baat hai aap usse username lege hi lege kyon ke extends kar rahe hai to username pass karke set to kar hi denge aur uska email bhi lerahe ho aap aur password bhi le lete hai. 
dekhiye emial set karna bole to koi dikkat wali baat nhi hai. this.email = email lo hogaya emial set
aur password bhi set karna to this.password = password to hogaya passsword set.


 class Teacher extends user {
 construtor(username, email, password){
 this.email= email;
 this.password = password;
 }
}
 
ab username ka kya kiya jaye abhi ham ne kahani padi thi wo call vagaira karna padenga phir this bhi pass karna padhenga han ji karna padta tha.  lekin aab nhi karna padta class ka syntex hai to kyon hi karo ab sidha sa ek key word call karta hu 
ye ligiye Super() keyword aur ye super keyword call kiya aur bola ye jo username hai na aap lejao to ye automaticaly kya karenga yeh super keyword refer karenga ki
bhai aap konsi class extends kar krahe the. thik hai user class extends kar rahe hai to is user class ke under jata hu uske construtor ke under jata hu saat me automatically aap kuch mat bolo this. behind the scene leke jaaonga vaha pe jakar username set kardonga us username ki value yaha pe ho jayengi aur aap uska axis yaha par directly lepaonge. 

to isiliye kaheta hu behind the scene sikho kyon ke utube pe bahot se log js sikhate hai. acchi baat hai sikhna bhi chahiye lekin kuch log bahot salo se industry me kaam karke aye unke pass 100% extra knoweledge hoga abhi koi 25 year wala ytube pe aake sikhayega na to obeacusly baat hai hitesh sir se jayda aapko aur bhind the scene batayenga 

 class Teacher extends user {
 construtor(username, email, password){
 super(username)
 this.email= email;
 this.password = password;
 }
}
 class teacher me addCourse ka feature dete hai. teacher courses ko add karskata hai to chaliye .
 conslole.log karte hai.  a new course Added by varibale add karte hai. ${this.username } checking bhi ho jayengi ki acess hai kya nhi username ka.
 kya faltu me bus aise hi kahe rahe the sir ke super uper laga do aur majak chal raha tha super fan ka .
 
  class Teacher extends user {
 construtor(username, email, password){
 super(username)
 this.email= email;
 this.password = password;
 }
 addCourse(){
 console.log(`A new course added by ${this.username}`)
 }
}

kafi hogaya ek object bana de teacher se
isko bolte hai chai hi. wahi hamra first user hota hai. teacher se ham ne bana liya ab teacher se banate hai usne kya kaha ki mujhe kya kya do acess email hai 

const chai = new Teacher ('chai', 'chai@gmail.com' , '123')

console.log karte hai par console log karni ki jarrorat nhi hai kyon ke direct mehtod hai waha par addCours consle log hi karraha hai. to 

chai.addCourse() accha isko run karke dekte hia.

output : new course added by chai 
to dekhiye username bhi jaraha hai pass hoke bhi aa raha hai.  koi call use nhi ho raha hai. but iska matlab ye nhi call padhenge hi nhi . abhi use nhi ho raha hai. lekin use to ho hi raha hai.

accha ek chez dekh lete hai. yaha pe ki thik hai ab ek user tea se bana lete hai.
masalaChai banalete hai. 
const masalaChai =new user 
user ko kya chahiye ab . userk ko sirf name chahiye 
const masalaChai =new user ('masalaChai');

ab kya mere pass important question hai . kya masalachai hai iske pass addCourse jo ke teacher class ka mehtod hai wo user class me axis ho skata hia kya?
addcourseka axis hai ya nhi hai ye bada hi intersting sa question hai?

to error ayenga
hamri masalchai ke pass .addUser() ka acess nhi hia.

ab hamri masalchai ke pass . logMe() ka acess hai?
masalaChia.logMe(); //Username is : masalaChai
ha ham masalchai () user class se object bana hai. hai aur user class ka mehtod hai logme() isliye masalachai logme() mehtod ko acess kar rahi hai.

// kya chai ke pass logme() method hai kya?
chai ke pass to hona chahiye teachnicaly kyonke inherite kar rahe hai to sab hona chahiye 
ha chai ke pass bhi available hai logme () method


*/

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`)
    }
}

class teacher extends User {
    constructor(username , email , password){
       super(username);
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course added by ${this.username}`);
        
    }
}

const chai = new teacher ('chai', 'chai@gmail.com', '123')
chai.addCourse();

const masalaChia = new User ('masalaChai');
//masalaChia.addCourse(); //TypeError: masalaChia.addCourse is not a function

// masalaChia.logMe(); //Username is : masalaChai
// chai.logMe(); //Username is : chai

/*
accha chai aur masalachai alag alg class se ban kar ayen hai . to kya mai console.log karo to ayenga false ke dono ek nhi hai.

*/
console.log(chai === masalaChia); //false

/*
kya chai chai to ham ne bana hai Teacher se kya hamari chai equal hai teacher ke ye poch hi lete hai. obeousi baat hai. false hai wo bhi equal nhi hai.


 */
console.log(chai === teacher); //false

/*
obeausi baat hia uska ek instance hoke aya hai. wo exact todi na lekar aya hu to equal kaise hhogi lekin 

wo aapko check karne ke liye kya is se bani hai uska instance hai to aapko ek keyword diya hai directly 
ke chai teacher se bani hai
instance of
console.log(chai instanceof teacher);
ye chai instance hai teacher ka to aap pooch sakte hai waha pe to ab jaise hi mai poochu ga to true ayenga.
*/
console.log(chai instanceof teacher); //true . chai instacne hai teacher ka

//ye hogay basic aapka 


//------------------------------------------------------------------------------
