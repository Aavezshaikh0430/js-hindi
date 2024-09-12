/*
ek basic sa fucntion decalre karenge aapka jo man kare vo .
*/ 
function multipleBy5 (num) {
    return num*5
}

/*
ab bataye is function ko axis kaise karna hai multipleBy5(5) aisa ham axis kar sakte hai.
magar mujhe aisa nhi karna hai.

agar mai aisa karo multipleBy5.power = 2
kya aisa ho sakta hai. ye badi intresting baat hai. declare to fucntion kiya hai. labal fucntion hai
but yeh 
dot axis . to object ke saat lagta hai. to kya fucntion bhi ek object hai. ha ji ye badi intresting baat hai. chaliye console log karke dekte hai. aapko thoda surprize karta hu. yaha par pahele to multiple5 ka result to pata hi hai. iska result to kya aane wala hai usme koi dikkat vali baat hai hi nhi lekin actualy dot axis karke dekho ki \

multipleBy5.power kya ye axis ho sakta hai. 

hosakta hai to kyon axis ho raha hai.

kya multilpleBy5.prototype kya iska bhi koi prototype hota hai.

sir ne bola hai object hai uske ander ek dot value hai. abhi ham ne theory me dekha agar . dot
bol ke axis hota hai. sab kuch kyon ke arry sab me dot karke dot length thi to le rahe ho to. kya dot
. prototype bole ke axis le sakta hu. 
 ye sabse intresting chez hai jo aapne abhi nhi dekhi hogi kahen pe bhi actualy run karke dekte hai
 maamla kya hai yaha pe.

*/
multipleBy5.power = 2;

console.log(multipleBy5(5));  //25
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); //{}

/*
ye 25 to bilkul surprize nhi hona tha kyon ke 25 to obeausly baat hai aa hi gaya.
ye 2 kaise aagaya  kyon ke ye power kya fucntion me under ye bhi kar sakte hai.
aur ye {} empty parenthses yani prototype kya hai ek empty parenthesis aya. ha ji ye aap karsakte hai.

isse actualy me samjha kya isse ye samja actualy me java script me har ek chez object hoti hai
fucntion fucntion bhi hai or object bhi hai. fucntion ke under aapki property jo bhi uski working hai.
fucntionality vo function ki tarha behaive karti hai lekin aap chaheye to kisi ko bhi object ki tarha behave kara sakte hai. 
kyon ke end of the day har koi chez jake milti hai aapke object se isiliye sir bolte hai prototype
inheritance javascript haar nhi maanti hai har chez ko uper se uper leke jati hai. aur jati hi raheti hai.

array ko bhi leke gai uper object par aur further object ko upper nhi leke jati hai. c dirve ke bahar 
kaha jaonge. ye lenux me slash ke bahar kaha joange. to vaha aapko null ka refrence milta hai.

to object ka jo prototype hai wo actually null hi hojata hai.

to aapko samaj me agaya hoga ke fucntion bhi teachnicaly ham kaha sakte hai. ki ye refrence object ko hi karta hai. ham ne aisi fucntionality expolre nhi kari kyon ke koi senario hi nhi aya but aisa hota hai hosakta hai. samjhe  

*/

//-----------------------------------------------------------------------------

function creatUser (username, score){

    this.username = username;
    this.score = score
}

/*
ham ne fucntion me 2 varible creat kare
mujhe ye samaj nhi ara ke ye this keyword ka mamla kya hai kyon this keyword bhi aapka prototype se juda huwa hai.
maine kya jana mai agar username banao to username maine jo varibale andar fucntion ke declare kiya hai aur
parametter me username mujhe aya hai dono ke bich me confusion ho sakta hai ki agar username = username 
likhonga to konsa vala username mera hai konsa vala parameter hai ye confusion hu sakta hai to use kaise
mai kya karte hai ham [this ] keyword use karte hai. this se kya hai current contex set hota hai.
*/

/*
aur hame empty paraenthesis bhi mila hai .prototype ye bydefault kuch contex aapke set hote hai. to jo bydefualt jo contex set hota hai prototype ka ye actualy aapko dikh raha hai us method ka this hai.

actualy me ye jo prototype hai ye kuch method nhi uske sath sath kuch aapko internal property bhi deta hai. multiplaBy5 fucntion ki bhi kuch property hogi

function multipleBy5 (num) {
    this.num = num
    return num*5
}
    this.num = num 
    tabhi tu kuch refrence lete hi hum yaha pe to in case me bhi kuch value hoti.
    this.num = num 
    yah pe bhi to kuch values mai leta thik agar value mai is traha se leta to agar isko run karao wapas se
    yah kuch na kuch refrence tu aana chaihiye na tu ye refrence ke under hamare paas this.num actual me store hota hai.
    to ye this.num run karne ke baad dekhe ga nhi  kyon ke uska refrence aapko lena padna hai use karna
    padta hai uska contex mai abhi apko samjaonga . maan sakte ahi ki aapki aur bhi jo prototype ki property hoti hai plus this ka contex available hota hai.
*/

/*
function creatUser (username, score){

    this.username = username;
    this.score = score
}
*/

/*
ye fucntion ek bada hi aam fucntion hai koi dikkat vali baat nhi hai lekin kyonki maine aapko bataya fucniton bhi object hai. kya mai aisa chau ke kuch funtionality bhi add karo. jaise ke arry ke under.length hota hai. prototype se kuch fucntionality milti hai bydefault jaise mujhe milta hai .map 
kya mai meri bhi fuctionality bhi add kara sakta hu kya kisi fucntion ke under object hi to hai akhirkar
object me property hoti hai. aur ek property hamara fucntion hold kar legi 
jaise ye slice bhi to ek property hai ye fcntion hai to kya mai mere fucntion declare kar sakta hu
to haan ji bilkul declare karsakte hai koi problem nhi hai usme jaise suppose kare 

*/




/* jaise samjiye creatUser aapaka ek fucntion hai. uske under aap ek prototype lete hai. uske under jo aapka maan kare wo inject kare jaise suppose karen main kara increment 
ab increment kya hai ek fucniton hai. fucntion ki body me kya karna chahte hai. mai score ko incres karana chaheta hu. to score ++ karte hai. thik hai bada hi basic sa mamla hai. 

creatUser.prototype.increment = function(){
score++
}
const chai =creatUser('chai', 25)
const tea =creatUser('tea', 250)

accha yaha par ek problem hai. kye creatUser me ye value pass kar raha hu is fucntion ke user alag alag ho
sakte hai. ek user hai chai . chai ne bola creatUser mai leraha hu. to creatUser ka username lelo aur value lelo
ek hogaya tea . ye tea bhi creatUser use karraha hai. is baar creatUser bol raha hai. mera naam
tea hai.

ab mai prototype the through ye increment inject kiya hai. lekin problem kya hai pata hai.
ke score mai kiss ka badao is ke under.thoda confucse ho jayenga internal . increament method hai
koi dikkat nhi .increment method chalenga . ab chai aut tea dono ek hi to fucntion use karrahe hai.
aur fucntion ke uper jake tapak ke bait gaya wo method creatUser. ab creatUser ko kaise paata ke mai increament score karonga to 25 ko badhana hai ya 250 ko badana . kyon ke uske paas contex nhi hai. usko idea nhi hai. kis value ko increment karna hai. kis ne mujhe call kiya .hosakta hai kis ne bhi mujhe call kare . to ye jo contex hai dene ke liye obeously baat hai aapko 2 logo ne awaz di mummy ne papa ne to kis ke pass jana hai. mummy ne lagai to mummy ke pass contex samj me aata hai. kis ne awaz lagai ki ne bulaya 

to chai ke pass contex hai hi nhi. contex samjane ke liye kyon ke hard code to value nhi likh sakta na mai . ke chai ke under jao aur uska hi scroe badao . ya tea ke under jao aur uski value badao hardcord value to nhi likh sakta . 
to mai yaha bolata hu jisne bhi bolya hai uske pass jao 
this. matlab jiss 
jiss ne bulaya hai uske pass jao . jis ne bhi bulaya hai uska kaam karo current contex ka 
jiss ne bhi bulaya hai uska ka value vo incres karenga. 

creatUser.prototype.increment = function (){
this.score++
}

lekin lekin abhi bhi problem solve nhi hoi hai.

ek aur method yaha inject karte hai. creatUser.prototype liya aur printme bole ke ek method yaha creat kari.

creatUser.prototype.printMe = fucntion(){
//console.log(`prize is ${score}`) 
//wapas se score bhi kis ka score batao chai kya tea ka. jis ne bhi bolaya uska score 
console.log(`prize is ${this.score}`) 
jis ne bhi pucha hai uska score bol do 
}

 ab ye method kya karta hai. simply console log karta hai. 
 ye hogaya hamara method.

 accha jab array diclare kart hai to aisa bolte hai.
 myArry.protoype.map() 
 is taraha se likhte ho kya . ham sidha
 myArry.map() 
 aisa likhte hai. aur acessable hota hai. ye ek feature deta hai java script ke prototype ka kaam mai karta hu behind the scene mai upper se upper jake mai dhund longa aapko baar baar nhi karna hai. 
 prototype ke under prototype raha to kitni baar aap .prototype.prototype likonge. aap to pareshan honge.
 to mai ye behind the scene kar longa. ye syntactical sugar mai karlonga. aapko baar baar protoypt likhne ki jarorat nhi.

 isitarah aap khud hi aise inject karenge. sidhe boliye chai aur jo bhi aapko mehtod access karna hai aap wo sidha hi use kariye.
 chai.printMe()

 ab ek problem aai hai. ab ham isko run karanenge to ek chota sa problem aya hai.
 cannot read properties of undefined. abhi to aap bol rahe the aise se property mil jati hai. accha property inject hoai hai. aap prototype ke under incremnt me dekho ge to property aai hai 100% aai hai.
 lekin jab aap ye 

 cosnt chai = creatUser("chai", 25)

 lekin jab aap ye creatUser function se chai ke under value treansfer kari tab aap ne usko bataya nhi ke mere pass ye addition property aai hai. ye batana padenga. ye batane ka sara kaam karta kon hai actually new key word karta hai.ha ji itni deer se ye ramayan chal rahi thi wo new keyword ke wajaha se hi chal rahi hai. ha itna sara improtant hai singnification new keyword ka.

 cosnt chai = new creatUser("chai", 25)

 aur isitarah se interview aap samjaonge accha ye ligiye example le raha ho ye sab mai ne liya magar ye code nhi chal raha hai. nhi code chalna hi aapko interview me seclect karata hai. aapko pata hona chahiye ke wo kyon nhi chal raha hai. 

 jaise aapne yaha new keyword inject kara ab usko ko pata hai. kya kya kaam karna hai behind the scene
 new ke kya kaam hote hai. list me mil jayege tension mat ligiye.
 but ab iscode ko run karta hu to yaha pe usko pata hai prize is 25

*/