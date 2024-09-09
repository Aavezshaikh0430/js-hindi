/*
promise five bhi apne aap me intresting hai.


*/

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username : 'Java_script', password : '123'})
//         }
//         else{
//             reject('Error : Js went wrong.')
//         }
//     },1000)
// });

/*
abhi tak aap ne jo syntex dekha jab aapke pass promis aye to 
promiseFive.then()
laga do actually me ye real situation hai. 
ab ham ye promis ko async await se handle karte hai. to aapko preshan hone ki zarorat nhi hai.
aarye promis kya hai feature me hone wali cheez hi to hai. aur ye garenty nahi ke aap .then .catch se
hi handle kareonge . nhi nhi aisa nhi hai. ke aap .then .catch se hi promise ko handle karonge.
actually ye topic bahot intersting hota hai jab aap database handle karonge tab.
kuch log async await prefrear karte hai. kuch log .then karte hai. aisa kuch nhi hai.
aap async await bhi use karsakte hai, aur .then bhi use karsakte hai.

ab mai is baar async await se promise ko handle karna chaheta hu.

async await kya hota hai.
same .then .catch ke tarha hota hai. ye thoda der wait karta hai kaam ke uper jab kaam hojaye tab hi 
aage badta hai warna wahi par aapko error deta hai.
is me kya hai ham greacefuly catch handle nhi kar sakte ye thoda sa issue raheta hai. iska 

*/

//syntex 
//async fucntion fucntionname (){
//await promiseFive}

/*
dekiye jaha par bhi async aagaya us fucntion ke under aap await keyword use kar sakte  hai. to await karte 
raho promis five ko await karte raho. 
jaise hi aapne await karte raho bola is promis five ko to jo bhi value hai promise five ki vo aajayenge.
ab value kaise aayenge ek to .then () se ayengi ya .catch() se ayengi. dekte hai kaha se value aati hai.
to us await promise five ko variable me bhi hold karna hoga. to responce naam ke variable me hold karte hai.

const response = await promisefive

ek baat dyan dejiyenga promiseFive ek object hai aap promiseFive() aise consume nhi karsakte.
ye eventaula complictaion object hai
 */



// async function consumePromisFive() {
//     const response = await promiseFive
//     console.log(response);

// }
// consumePromisFive()



/*
pahele ek error arahi thi par ab nhi aari hai kyon
isiliye ke aapne use value ke under us data ke under koi value aai hi nhi thi. hamne usko 
print karane ki koshish kari .
kyon ke aapne isko ek magical keyword likha hai async await to wo error nhi ayengi.
yaha par easyly kaam ho jayenga.

*/

/*
ye code hame run kara ke dekte hai. to hamare pass aya 
this error originated either by throwing inside of an async fucntion without a catch block, or by rejecting a promise which was not handled with .catch() the Promise rejected with the reason "errorK js went wrong."

acutaly is traha database connectionn kar rahe ho. error hi throgh kiya true.

jab error false karenge ge. agar error nhi aati kuch bhi error false hota to obeausly sab sahi chalta.
kyon ke aap ne async kara await kara. aur aapka sara kaam hogaya. thik hai. error false par run kare to sara
code acche se run hogaya. javascriopt 123 sab aagaya.

likin is taraha aapka promis design hai. yaha par error asakti hai. ya suppose kariye network request call karrahe
hai. us network request se under is traha se value aa rahi hai. to problum ho sakti hai. 

to async await ka ye problum hai ke wo directly error ko handle nhi karte hai. is case me hamere pass error hai.
obeauisly baat hai terminal bhi aapko suggest kar raha hai. ke aap ne ye async await ko try catch me
wrape nhi kiya hai. 
hamne direactly usko handle kiya hai. expect kiya hai jab bhi ye promise resolve hoga apne pass value ayehengi hi ayengi.
but rejection howa hai. obeausly reject aya hai hamare pass. reject ne aapko error diya hai. matlab hi error code hai. 

acch to ham kaise async await ko handele karenge.
async await to hogaya hai. 
to uske under ham try catch try block me wrap karte hai.

try part me mai karta ho await part ko 
.console.log responce ko

aur catch part me error , 
aur error agaya to mai usko greacfuly handle karlonga.
to jo bhi mere pass error araha tha usko greacfuly handle karliya.

ab ham error true karte hai to 
greacefuly error handle hogaya hamare pass.
 error true   out put: Js went wrong.
 error false  output:  { username: 'Java_script', password: '123' }

 async await aur .then() .catch() dono me se koi synctex galat nhi hai.
 aapko jo asan lagae wo synctex use karsakte hai. aap.
*/


// async function consumPromiseFive() {
//    try {
//     const response = await promiseFive
//     console.log(response);
    
//    } catch (error) {
//     console.log(error);
    
//    }
    
// }
// consumPromiseFive();

//---------------------------------------------------------

//eg

const jspromise = new Promise (function(resolve, reject){
  setTimeout(function(){
    let erro = false;
    if(!erro){
        resolve({username : 'Mohammad owiase', email : 'MdOwaise@gmail.com'})
    }
    else{
        reject('ERROR: something went wrong pleas try again.')
    }
  },1000)
});

async function consumeJsPromise (){
   try {
    const respons = await jspromise
    console.log(respons);
   } catch (error) {
    console.log(error);
    
   }
    
}
consumeJsPromise();

