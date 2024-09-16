/*
pahele ham array se kahani ki shurvat karte hai.

let myHeros = ['thor', 'spidarMan']

2 aapne heros leliye suppose kariye mai ek object bana raha hu

let heroPower = {
    thor: "hammar",
    spidarMan : "slinky"
    getSpaidarPower : fucntion (){
    console.log(`spidy power is ${this.spidarMan}`)}
}

abhi tak koi dikkat ki baat nhi yaha tak hame sab samaj me aa raha hai. ab ek mehtod mujhe defind karna hai. getSpidarPower kaise karsakta hu key ho gai hai mere pass getSpidarPower aab ki value hai wo mai string ya number ki jagah ek fucntion declare karna chaheta hu. thik hai koi problem nhi hai. abhi tak 
allowed hai ye karna funciton ke under simply console.log kar diya `sapidy power is ${this.spaidarMan}` aur spaidar man ki power axis karne ke liye kya karna hoga spidar man bolo but is fucniton ko kaise pata mai upper wale spidar ki baat kar raha hu jab mai uper wale spidar ki baat kar raha hu  to this lagana padenga. ye to mamla samaj me aagya aapko.

itna
*/

// let heroPower = {
//     thor: "hammar",
//     spidarMan : "slinky",
//     getSpaidarPower : function (){
//     console.log(`spidy power is ${this.spidarMan}`)
    

// }
    
// }
// console.log(heroPower.getSpaidarPower());
// const {getSpaidarPower}= heroPower
// console.log(getSpaidarPower());
// heroPower.hithesh()


/*
ab mai kya chaheta hu ke koi aisa method hai jo 
heropower.hithesh()
kar sako yaha .hitesh() karonge to koi result ayenga. chaliye ham itna karrahe hai. to ye bhi karke dekte hai. kya  dot hitesh() naam ka koi fucntion available hai kya yaha pe. yaha to .hitesh() method available to hai hi nhi. but 
kya mai mere traf se inject kar sakta hu just ham ne dekha karsakte hu aap directly to kar ke dekhe to chalte hai kar ke dekhte hai.

to aap ne abhi tak dekha tha ke har chez ham  
[heropower.prototype] aisa kar rahe the
magar nhi nhi mai to chaheta hu kabhi bhi koi bhi object hi decalr ho to kya karo base us object ke under hi decalre kar do

ham ne object ke under hi wo power under daal di. 
to fucntion array string sab object ke hote hoye hi to guzar rahe hai. sabke pass power aani chahiye . teachnicaly to ani chahiye chaliye karke dekte hai.
ke agar mai kya karo 
object datatype aise acess karsakta hu kya mai available hai mere pass factory fucntion bhi available hai
jaise .create ye sab hote hai. ye factory fucntion bolte hai. isse jayada kuch nhi hai. factory fucntion uska bydefault fucniton jisko create karne ke liye use hota hai.

object hai merepass is ka prototype bhi acess hai mere pass usme ek laga do method hitesh = ab ye fuction kya kaheta mere pass . ye fucntion karta kya hai kuch nhi bass print karte hai. 
console.log(`hitesh is present in all object`) 
ab heropowr bhi kya hai kaha se aya object se hito aaya .to teachnicaly .hitesh method available hona chahiye ha hona to chahiye. dekh lete hai wo hai kya nhi.
*/

let myHeros = ['thor', 'spidarMan']

let heroPower = {
        thor: "hammar",
        spidarMan : "slinky",
        getSpaidarPower : function (){
        console.log(`spidy power is ${this.spidarMan}`)
        
    
    }
        
    }
    Object.prototype.hithesh = function(){
        console.log(`hitesh is present in all object`);
        
    }
    // heroPower.hithesh()
    // myHeros.hithesh()

    /*
    ha ji badi intersting baat hai ye to abhi just dai garam me bataya ke sabhi cheze object se hoti hoi jati hai. object ka koi supertype nhi hota hai. array bhi to object se jayenga aisa hai kya dekh lete hai. 
    theory ke hisaab se to myHero jo array hai us ke pass bhi ye .hitesh power honi chahiye. to dekh lete hai iske pass bhi .hitesh power availble hai kya ya fucntion available hai kya.  
    hanji ye baat sahi nikli aapne . to aap ne kiya kya yaha pe aapne bada intresting kaam kiya yaha pe
    top level ki key ko acess kar li aur bola object aapke under ek naai property add karta hu . aur is property ko aaap acess kar skate hai.

    arry ke pass bhi ye property chali gai
    string ke pass bhi ye property chali gai. 
    sabke pass ye property chali gai.

    ha ji  theory me bhi yahi hai aur actualy me bhi yahi hai. ham ne sabhi ko ye power de di thikh hai yaha tak to baat thik hai.

*/

/*
lekin ab mai ek aur test chaheta hu ke agar mai power sirf arry ko do ye power object ke pass bydefault chali jati hai. dekhiye prototype ka kya hai array me power milengi to thik hai nhi to wo object me checck karenga nhi mili to aur upper check karenga. 
but aap ne power arry me hi inject kari hai. to wo power object me bhi honi chahiye ye bada intersting question hai. chaliye karke dekh lete hai array me kuch bhi inject karna hai to aapko pata hai.

array.prototype.heyhitesh 
dete hai isko bhi ek fucniton dete hai. iske fucniton ko bole dete hai. console.log karte hai.
hitesh says hello.
ab teachnicaly kay hai aapka mayHero ke pass acess hona chahiye heyhitesh ka thik hai. lekin
myHero.heyhitsh()

magar heropower hai uske pass hey hitesh ka acess nhi hona chahiye therory me to atlist kyon ke obesuly baat hai down the line niche wale ko to access de diya uper wale ko thodi miljata hai.
lekin agar top wale ko de diya to sab vahi se pass hokar ke jarahe ahi to unko sabko mil jata hai. chaliye run karke dekhte hai. abi error se pata lagega kya kya ho raha hai.
*/

Array.prototype.heyhitesh = function(){
    console.log('hitesh says hello');
    
}
myHeros.heyhitesh();
heroPower.heyhitesh(); //heroPower.heyhitesh is not a fucntion

/*
kyon ke heropower ke pass heyhithesh ka acess nhi hai.
[myhero arry ahi to] magar arry ke pass to ye power hai.

aap ye dhyan dijiye ga ke aap ne array ko hi power di hai. to fucntion string inke pass ye power nhi ayi hai. ye bhai bhai apas me ye power share nhi karte hai. ha jis path se hokar ja rahe hai usko power denge to[object ko power denge to ] obeausly si baat hai phir sab axis kar sakte hai. 

paat ki power ki baat kari hai aab todi si baat karenge inheritance ki.
*/

/*
inheritance.

ya badi hi basic sa asan topic hai.

suppose karen mai ne ek teacher liya object hai. to usko ek power diya aap teacher ho to video banasakte hu
makeVideo = true 

ab aapko chahiye ek teaching assistance bhi ho. is ka kaam hai aap ho ya nhi ho ye pahele batao . abhi to hair hi nhi howa false hai.
isAvailable : false,

aur bhi 2 property lagegi is example ko samajne ke liye. TA suppoert bhi hai jo questions ke answer de.
pahele time me aise hota tha  

*/