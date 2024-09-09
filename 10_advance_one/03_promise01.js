/*
ab yaha ham ek chota sa expriment slotof karte hai. abhi hame ne [api request] pichli video me 
jason responce dekha tha. ham us ko use karte hai 
chahe aap dusra bhi use karsakte hai aap ki marzi .
hame ek url lenge jasonplacholder.typicode.com/user
yaha bahot sare user miljate hai basically arry hai to aap ye use kare.

is ke liye ham ek method bananlete hai async await method banayenge aur waha pe dekhenge kis taraha
se value hoti hai. aur directly ham usko use karsakte hia. ye hamare next class ke liye kaam ayenga.
agli class ki tayyari kar rahe hai. ham

ye koi consumtion promises nhi hai. but behind the scene batana chaheta hu itna sab hamne pada sab kaha behind 
the scene lag raha hai.

pahele to ham ne dekha ye api request hamare pass thi .but maine jitne bhi promises vagira kaise ho 
raha hai. 
 
ye itna sa code jo mai likhne wala ho ye agli class me padhenge. tab aapko acutaly me kya ho raha hai pata lagenga.


ek aapne async function likha obeauisly async hai to under reponse kuch aane wala hai.
aapne fucntion likha getAllUsers. sare users aapke pass aayenge.
to aap use karonge .

fetch naam ki library bolsakte hai . pahele thi libraray ab object bhi bolsakte hai.
fetch aapko ek promis wapas denga. thik hai aap fetch use kariye. fetch ko chahiye ek url.

fetch hai network request obeuisly time lagega. to is ko await karonge.  
iska jo bhi response aaraha hai usko ek varaible me hold karenge.

fetch se jo bhi responce ata hai uska pahele type janna chaihiye 
ab jo bhi responce aata hai usko direct JSON ban jao bolenge. jo responce araha hai wo string hai. 
aap string se koi value nikal nhi paonge. isliye mai usko directly bolta ho jason ban jao bolke.
reposnce.jason() ko data varible me hold karte hai.

aur console.log(data) karte hai.

obeausly iske fail hone ke chance hai. try catch me wrap hi nhi kiya isko 
karenge wo bhi karenge pahele isko run karke dekhete hai kya hota hai. 
getAllUser() is se sare users ayenge ya nhi ayenge. wo dekte hai.

jo actualy me kaam karna tha wo actually me howa hi nhi 
user to ayehi nhi hamare pass getAllusers() aye hi nhi to kaise kaam karna hoga.
hmm badi intresting cheez hai. aap kuch soch rahe honge.  users

ke asynce await ko try catch me warp kar do. ye ligiye try catch me warp kardiya 
yaha pe jo bhi code hai usko console.log kara diya

aur agar error ati hai to catch me error ko display karate hai. 
run karke dekte hai 
thoda time liye magar abhi bhi hamre pass value to aai hi nhi 
accha ham sara kaam kiya par value kyon nhi ayi .

pahele to ham kahe rahe the ke promises kiya catch kiya sara kaam hogaya hai lekin ye value actual 
me aye kyon nhi yaha par data responce me aya kyon nhi.

but jin ko samaj nhi aaya unko wapas se bata do . ke
1st promis me kaha tha kai aisi cheze hai jo ki time leti hai ustime aapko uski value samaj nhi arahi thi
kyon ke hame lagata hai data base call hai. network call hai ye cheze time leti hai baki ke cheze time leti hi
nhi hai. nhi aisa nhi hai. chezze time leti hai. 

actually ye jo hamra code hai use me koi bhi problum nhi hai 100% working code hai. 
infact aap is responce ko print karonge to [console.log(respnose)] to aap dekhenge code chalta hai actually me
kuch bhi change nhi kiya sirf hamne upper ke line commit kiye aur reponse print kiya
to ye reponse aa to raha hai.


actally probluem ye hai ke aapka response.JASON hai convert hone ko time lagta hai
to reponse ko bhhi await karna padenga. 
itna sa issue hai.  aisa nhi ke koi chez kharab hai.
ye ab aapke liye parfect code ban gaya hai.
ye wala code easly chalenga. ye value easy aagayi hai.

ye hogaya hamara try catch ka syntex 
isi fucntion ko .then() .catch() se handle karna ho to kaise likhta. bhi karke dekte hai.


*/

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/')
//     // console.log(response);

//   const data = await response.json()
//   console.log(data);

//    } catch (error) {
//     console.log('E:', error);

//    }

// }

// getAllUsers()

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//    //  console.log(response);

//    const data= await response.json()
//    console.log(data);

//   } catch (error) {
//     console.log("error : ", error);
//   }
// }
// getAllUsers();

//try catch method hai
//-----------------------------------------------------------

//dot then .catch method

//isikaam ko hame .then .catch method se karana hai.

// fetch('https://jsonplaceholder.typicode.com/')
//.then()
//.catch()
//.finally()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err))
  .finally(function(){
   console.log('finally The promise is either resolved or rejected.');
   
  });
