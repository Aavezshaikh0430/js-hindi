
// function creatUser (username, score){

//     this.username = username;
//     this.score = score
// }

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
 but ab iscode ko run karta hu to yaha pe usko pata hai prize is 25.
 magar ye new keyword hata te hi usko pata nhi laga raha hai. new keyword kuch na kuch kar hi raha hai na
 behind the secne 
 wapsa se dekte hai new keyword hata kar to new keyword hata aur same vahi ka vahi code hai. run kara to error aya
 creatUser me cheze aapne bydefualt aap ne de hi nhi thi. agar aap creatUser fucntion ke under fucntion dete to wo leleta fucntion ke under ek aur fucntion ho sakta hai.
 new keyword hamare pass kaam to bahot kar raha hai.

*/


function creatUser (username, score){

    this.username = username;
    this.score = score
}
creatUser.prototype.increment = function(){
    this.score++
}
creatUser.prototype.printMe = function(){
    console.log(`Prize is ${this.score}`);
    
}

const chai =  new creatUser('chai' , 25)
const tea = new creatUser('tea', 250)

chai.printMe()
tea.printMe()




/*
new keyword ki fucntionlity 
here's what haapens behind the scene when the new keyword is used:

new keyword se
ek new object creat hota hai. new javascript object creat hota hai.
jasise aapne new keyword diya chai ye to banega hi banega apka ek new object creat hota hai.
aab us new object ka refrence hona chahiye. abhi ham ne object ka refrecne diya hai. fucntion creatUser hi 
hamar refrence hai . fucntion ke property do hi do ek naya object creat karo. ab new object creat hone ke saat saat ye property ye prototype bahot important hai. to naya object banaya hai to object to prototype se link hoga hi hoga 

the prototype is link. but ye javascript ka trika hai.js classes ke through construtor fucntion nhi deti. balke javascript new keyword ke through constructor fucntion deti hai.

new keyword lagaya matalb jo classes ke under aap object ke saat karte hu new keyword laga ke naya instance creat karte ho . ye sara kaam new ke saat hota hai. ye ek approch hai. yahi approch salo se  chalti aai hai . phir logo ko laga thoda confusing ho jate hai itna deepth me koi jata nhi hai. ek kaam karo jo bak developers aate hai unke benifit ke liye sidha class keywords ka hi syntex dedo 
isiliye ham ne is video me class nhi li . next video me class longa. 

aapko samaj me to aagaya behind the secne actualy me yahi to kaam hai . sirf class ka wraper laga diya bus.

thik hai hamare pass construtor function hota hai. ye jo ham creatUser.prototype.printMe protoype kar rahe the ye sab hawa me hi tha  new keyword lagaya to accha accha mujhe isse assemble karna hai. phir usne ek object liya us object ke under ek prototype inject kara . are aap ne kaha prototype to inject kara main ne kuch mehtod bhi defind kara h .us method ko defind kara uske baad bola accha fucntion creatUser ke bases pe banan hai. 
phir creatUser ke bases pe banta hai.

phir constructor bana gaya to call bhi hoga .
construtor ke under prototype link hota hai. aur construtor ko call kiya jata hai. jisse aapke jitne bhi this wale contex hai jo this.username this.score ye sab inject hoke wrap kiye jate hai. 
aur finaly aapko ek naya object returned kiya jata hai.
jo ke hame chai ke under diya jata hai.

ek chota sa (new)3 keyword hai litraly aur itna kuch kar jata hai behind the secne.

abhi tak ham jo example liya tha object ko samajne ke liye . object ke under new keyword kya hota hai usko samajne ke liye 

ab ham prototype wala section start ho raha hai.
*/