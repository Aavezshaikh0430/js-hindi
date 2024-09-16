const User ={
    name : 'chai',
    email : 'chai@google.com'

}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true ,
    __proto__ : TeachingSupport
}

TeachingSupport.__proto__ = User

Object.getPrototypeOf(TeachingSupport, Teacher)



/*
inheritance.

ya badi hi basic sa asan topic hai.

suppose karen mai ne ek teacher liya object hai. to usko ek power diya aap teacher ho to video banasakte hu
makeVideo = true 

ab aapko chahiye ek teaching assistance bhi ho. is ka kaam hai aap ho ya nhi ho ye pahele batao . abhi to hair hi nhi howa false hai.
isAvailable : false,

aur bhi 2 property lagegi is example ko samajne ke liye. TA suppoert bhi hai jo questions ke answer de.
TA support ka kaam hai ek to assigment banana . full time hai kya nhi ye bhi pooch lete hai. itna to thik tha jaise ke maine aapko bataya 

har objct apne aap me ek alag instance hai. aisa nhi hai ke koi information apas me chare kar rahe hai.
sub ke apne apne property hai. default property to hai sabke jaise .length ya jo bhi property hoti hai.
proto vagira . lekin hame ye dekha abhi bhi default property hai hamare pass. but abhi bhi aisa to nhi ke 
teacher object  ke under kuch property to sare object ko wo property mil gai aisa to nhi hai. sab ko apni apni alag value hai.

lekin koi aisi situaion hai. jaha pe information exchange karna chahete hai. 2 object ko apas me inke karke abhi aap ne dekha link karne ke liye .prototype hai han ji hai. pahele ke time kya hota tha.
__proto__   ye actualy property hai. isko directly ham directly use kar sakte ho.
dot notation se bhi . ya special keyword hai use se bhi  thoda sa difficult hai ye syntex 

__proto__ : TeachingSupport 

jaise hi aap ne ye property likhi bas hogaya aapka kaam . ab aap TASupport se further jo bhi new karke 
jaise bhi object banao ge uske pass mil jayenga ye access . aisa nhi har baar object ke under hi jakar karna hai. iska acess bahar bhi le sakte hu. TASupport TeachingSuppoert ke property ko ab acess kar sakta hai.

Teacher jo hai apke pass phir se vahi kahani __proto__ isko bana ke aur bhi acess de sakte hu suppose kare
ek user bhi bana hi lete hai
 const user = {
    name : 'chai'
    email : 'chai@google.com'
 }

 teacher ko bhi prototype assing karna hai. to teacher bhi sari user ki property acess kar sakta hai.
 yahi inheritance hai. yahi prototype inheritance hai.
 ke aap kisi aur ki kaise property acess kar sakte hu. yahi hamara prototype inheritance hai.

 ye jo approch hai ye toda sa outdata hai. apko nai code bases me aise code dekne ko nhi milenge.
 aisa nhi ke hote nhi hai. approches milti hai. aisa bhi kahi aapko code base milenga. lekin hame jo hai new approch hai new object ke under milengi wo hai modern syntex.



pahele time me aise hota tha classes to hoti nhi thi. har chez ka object hi banate te har cheez ka object ke under hi property fucntion add karte te. tode porane style ka code hai. kam jagaha melenga aapko 

*/

/*
Modern Syntex
ye wala sabhi use karte hai hitesh sir bhi use karte hai.
sidha acess karo aapke object ko object ke under nayi property aai hai. hasOwnpoperty , isprototype, propertyIsEnumerable, ye sab aapka hi modern porperty hai. jitni bhi setter getter hai.  ek special method diya gaya hai.  setprotypeOf 
object.setprotypeOf 

ye kya karta hai. basicaly vali __proto__ vahi chal raha hai. par syntex accha hai. ab apko internal details bhi pata hai. kiski property kis ke under inject karni hai. 

obesuly baat hai ham teachingsupport aap sari vali acces karo teachers ki

object.setprototypeOf(teachingSupport , teacher) to yahi aapka prototypeal inheritance hai.
aap khud bhi inheritance karwa sakte hu.

classes ke under thode keywords alag ho jate hai. extand vagaira but behind the scene chal raha hai. syntactic sugar ahi aur jayada tar senior developer ko bhi nhi pata hai kuch ho raha hai. aur bade bade code likh rahe hai aur chal bhi rahe hai acche se . par koi dikkat vali baat hi nhi hai.

jis ko under guss ke phd karna hai to kariye  baki kyon hi dekiye itta sara ab aapko aya samaj me .

inheritance se pahele jo ham problem solve karna cha rahe the wo kaise karte hai.

bascially mai chah kya raha tha ki string ke under ek property mil jaye direct hi truelength method
actauly property nhi mehtod. ek property bhi add karo ek method wo property update karde. wo bhi hosakta hai. but mai chaheta hu dirctly method mil jaya yaha pe . to aap ko to andaza aa hi gaya hoga.

sari string ko wo superPower de jaye 

is baar lete hai anotherUsername ='chaiAurcode         ' bahot sare sapce ke saat.
to sidha uthaye string ko sidhe prototype ko acesse karte hai. kyon ke knowledge hai hame.
iske baad ek aur property inject karte hai trueLength bole ke method inject karenge. basic ek fucniton lenge . fucntionlity jobhi hogi to hogi usko to avoid nhi karsakte but abstration dehi sakte hai. 
sabse imortant cheez ab yaha par bhi jis ko this ke under abhi bhi confusion tha wo yaha se dor kardo .
sidha boldu actually me ye this.name property hai kya. kyon ke name property vaha par aa rahi hai. to this.name lete hai bydefault . aap chahe to ek aur consloe bhi kar sakte ho ki sirf this ka refrence batao pahele this ka refrence lenge fir this .name le lenge. thik hai. actualy me ye namebhi kai baar aapne dekha hoga aapke brwoser editor me kat ho aata hai wo bhi sir dikhayenge.

ab main kaam bhi kar le console.log ke under mujhe poora masage chai to . true length is kam to vahi hoga jo pahele ham ne diclare kiya tha ki ye this se axis karlo jo bhi ye horaha hai pahele trim kardo jo bhi call kar raha hai uske baad ye .dot length wali property axis karlo thik hai. 

*/

let anotherUsername = 'chaiAurCode       ';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`The true length is : ${this.trim().length}`);
    
}
anotherUsername.trueLength();
'hithesh'.trueLength();
'Iceteachai'.trueLength();

/*output
chaiAurCode       
undefined
The true length is : 11

kafi cheze aur bhi aar rahi hai.  ek ek karke chezu ko samajte hai.

console.log(`${this.name}`);
mere pass aya undefined. 
obeasuly baat hai this.name ka hamre pass acess nhi tha .

console.log(`${this}`);
to this hame acess de kiss chez ka raha hai. ye sabse important vali baat hai. ke this ke under mujhe kya mila hai. chaiAurCode kyon mila kyon ki 
another user ke under refrence chai aur code ka tha 


anotherUsername.trueLenth() //yaha call kiya anotherUsername ne  aur another username ke under chai aur code hai.

ab suppos kare is property ko ham directly use karenge thik hai.
'hitesh'.trueLength() //yah call kiya hitesh ne to this hitesh hogaya

ye ligiye aur ek lete hai tea

'Icetea'.trueLength()  //yaha call kiya Icetea ne to this Icetea hogaya.

yaha par maine axis leliya trueLength();

ab gaur se dekne wali baat hai this ke under kya refrence aya current contex jo bula raha hai. jine call kiya this. hai 

actualy me yahi matlab hai this ka isse jayada kuch hai bhi nhi complex to chai aur code yaha hitesh hai aur icetea hai. aur isi vajaha se proper answer bhi mil paraha hai. aapko ye aapka basic hai 

prototype ye iske under jaye to aur bhi deepth me ja sakte hai. aur exicution contex ko open kar sakte hai. waha ek ek glboal memory local memory  wo sab dek sakte hai kaha kya acess hai but abhi ke liye itna hi kafi hai i think kafi detail me ham ne baat kari  bhind the scene aap dyan de jiye nga  aapka sara yahi chal raha  hai. jitan bhi sonch rahe hai classes vagera object oriented padhayenge nhi padha nge age java scriopt ke under . actualy me aapka java ka object oreinted javascript ka aapka yaha katam hogaya hai.

aab aapko jo classes bataonga wo to sirf syntex hai.wo to cover karne wali baat hai aapka pura therotical behind the scene jitta tha wo yaha katam hota hai actually me  ||alhamdulillaha 
ab to syntex hai syntex ko dekte jaiye aur karte jaiye aur bus hojata hai kaam 

I think aapko bahot accha laga honga ye .

*/

