/*
funciton setUsername (username){
//complex DB calls
this.username = username
line no 49 ke baad isko padna
console.log('called')
}
suppose kariye aapne ek function banaya ye fucntion kya karta hai set username thik hai. aap ek application bana rahe hai discard bana rahe hai. suppose kariye discard me username set karne ke liye kuch ruls bhi aap chek karte hu. data base se bhi call leke ate hu ki kisi aur ne kuch le to nhi rakha hai user name to sab thik hai.

hame ne username yaha se accept kar liya user se aur this.username ke under username add kardiya hai. jab bhi aap bole nege mujhe username set karna hai to ye set kar ke dega iske uper yaha pe ye kar raha hai complex calculation. //complex Database bhi call kar di.

fucntion creatUser(username, email , password){

setUsername(username)
this.email = emial;
this.password = password;
}

accha ab aapke pass ek aur fucniton hai. ye fucniton kya karta hai. wo karta hai creat user . user se banate time ham ne kya kya liya username , emial , password liya . bada hi common senairio liya hamne.
practical series hai puri ki puri.

accha this.email= emial this.email ko set kardo email se
this.password ko set kardo password se. 
lekin ye jo username hai usko direactly mat kardo ek kaam karo ye method hai. call karo setUsername vala thik hai ji kara diya aur isko pass on kar do username aur ye. set kardenga aapko username thik hai ji maan liya ye karke dega. actual creatUser me username ka axis hona chahiye . ab ye setUsername method call ho raha hai.  creatUser ke under to teachnaicaly to hamne ye dekha tha na ki uske under call ho raha hai to aapke pass uska acess hona chahiye. kyon ke yaha creatUser me jitte bhi variable aap decalre kar rahae hai. unka acess aapke pass hota hai Internal aur koi bhi cheez declare karte hai. fucniton ke under wo bhi acess hota hai. to  is fucntion creatUser ko creatuser ke under call kar liya hai to 

kai logo ko lage ka uska exicution contex uske under aa jayanga.
ha ya badi intresting si kahani hai.

to actualy kahani aapko tab samaj aainge jab aap const loge suppose kare ek naya user bana rahe hai discard pe chai aur aap ne sare protocall follow kare new keyword bhi laga raha hu mai fucntion ke under taki ek mujhe sara acess bhi mil jaye thik hai ye sab kaam kar rahe ho badi acchi baat hia. kyonke ab aapko sab aata hai. 
username chai le liya username thik hai email bhi lelo aur password bhi thik hai.

const chai = new creatUser ('chai', 'chai@facebook.com', '123')
console.log(chai)

ab isko run karate hai. yaha pe aati hai problem actualy me kya kya ho raha hai. email aur password to  

paar us property ka kya kare jo setUsername ne set kari hai. aur set bhi kari hai ya nhi kari hai. kyon ke yaha kuch aya bhi nhi hai. 
chai diya to tha par jab log kiya to uska username set howa hi nhi email dikha raha hai password dikha raha hai. iske allaw kuch ho hi nhi raha hia. 

problem wali baat hai. actucaly call hho raha hai kya pahele wo check karte hai. paheli baat wo aur ho raha hai. to maine bola this .username to yaha is fucntion me set ho raha hai. mujhe to yaha set karna tha 
this.username = username 
yahi kaam maine outsource kardiya yahi to kiya bus. to ye bahar jake ho raha hai bus 

kaise ye kaam kiya jaye accha problem to aa gai ye to method call ho hi nhi raha hai kyon ke agar ho gayi ho to yaha this.username ka axis milta aur . this. username ka matlbe yaha pora object milta hai jis ke under username email password teeno milte. actualy ye call ho hi nhi raha hai. han ji ye actualy me call ho hi nhi raha hai. 
isko call aise karana hai to fuction ke under se tab actally me 
setUsername(username)
 ye call hai uska aapne refrence diya hai. call nhi kiya ha manta hu ye thoda disiving hai.  paraenthises se aapko lag raha huonga . ha call to howa hai but teachnicaly internal javascript ka uska sirf refrecne gaya hai  call nhi howa hai to isiliye javascirpt me kuch methods milte hai. jis pe aap explicitly jake un method ko call karsakte hai jinme se ek hai 
 .call 
setUsername.call(username)
ab ye call mehtod kya karta hia of object substitude another object for the current object.
actually call likhene baad  yaha pe wo actualy me call ho raha hai teachnicaly call ho raha hia waise to aap conslolog bhi laga sakte hai.thoda sa aapko idea lag jaye actualy me chez ho bhi ki ni rahi to isko ham likh lete hai called .

actually call to ho raha hai but koi kaam ka called nhi ho raha hai actulally me chaliye call to ho raha hai. par problem ye aa rahi hai. 

jaise hi serUserme call howa thik hai run hogaya ab usne kaha thik hai ki run hogaya to usko htana hai to usko hataya aur isko exicution contex hai ye bhi hata diya. uske under jitne bhi variable declare hogaye the wo gayab hogaye to aap yaha tak to pahoche nhi ye to hamara outer fucntion tha to yaha tak to kabhi pahoche bhi nhi hai. 
haanji exicute ho ke aise kaise gayab thodi na kar dena hai uska refrence hold  karke rakhna hai. to refrecne hold karne ke liye actualy me method jo aata hai vo ata hai.
.call 
aur bhi hai .bind bhi aata hai but is senario me is situation me kyon ke mujhe sirf uska refrence hold karke rakhna hai. is liye mai .call use kar raha hu.

sirf run hi karana tha to vo problem hai hi nhi. thik hai lekin wo refrecne hold karake rakna hai ke uske under jo bhi varibale declare ho rahe hai. jo fucntion exicutuion ho rahe hai call ho rahe hai. usse jo value return ho rahi hai. wo bhi to chahiye na mujh ko aise thodi na ki exicution conetex hat gaya to baat khatam aise na thodi hota hai. to ham waha exicution contex vaha dena hoga.

sirf aapne .call likha hai na aapne to bhi kaam nhi hoga actualy me. call hoga wo but actualy object me koi change nhi milenga aapko 
main problem samaj aai hai call to ho raha hai lekin. uske under jo varible ho rahe hai. users vagira wo hate hi wo gayab ho rahe hai.
iske liye usko ek refrecne dena padenga yaar ye jo set kar rahe ho na jitan bhi ye aap khud ke this me mat karo kyon ke mujhe pata hia. har fucntion ka apne aap me ek this hota hai usse aur bhi values add kari ja sakti ahi . lekin mai kahe yaha hu ki yaar jo aapka this hai nah ye actualy me gayab ho jayenga to isko use mat karo mai aapko apna this deta hu refrecne. this kya hai global ek object hai aur hai kya kabhi
browser me window ho jata hai.  isme ye to usko mai apna this dena hu yaha pe to ek kaam karo ye this lelo.

setUsername.call(this, username)
 this kya hota hai jab bhi aap call uuse karte hu too first parameter this optionaly chahe to pass kar skate hu. jaise hi mai ne usko this de diya hai to kya hoga . baki syntex to thik hai. par mai mera syntex use nhi karon ga . mai aapka vala this use karonga.. aur this se kya current contex mil raha hai.wo context jaise hi aapko mila yaha pe to usene kya kaha ki thik hai aab mai gayab ho jao to ho jaaon but ek treaha se boliye ki mere saman aapke hogaya. mai to chala is duniya se. mere saman aap rakh lo
 chaliye aab dekte hai kaam howa kya nhi howa..
 to username set ho gaya to this ki kahani ye hai na contex pass karne ki ye bahot hoti . 
 actualy bind ki to aur jayada hoti thi. react ke under kabhi

 actualy aapko samaj aagaya call hamara jo mehtod hai. aap kabhi ye nhi bolenge rata rataya step ki this ye call hamara current exictuion contex kisi aur fucntion ko pass kardeta hai par teachnicaly to sahi hai.
 par pora intan acche se example done to konsa interview nhi nikalne wala aapka.
*/

function SetUsername( username){
    this.username = username
    console.log('called');
    
}

function creatUser(username ,email, password){
   SetUsername.call(this,username)
   this.email = email;
   this.password = password;
}

const chai = new creatUser('chai', 'chai@FB.com', '123');
console.log(chai);
