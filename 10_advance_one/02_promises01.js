//fetch('htttps://somthing.com').then().catch().finally()
//yahi hamare fetch hai. yahi hamre promise hai.

//-------------------------------------------------

//promise ek object hai. javascript me object ka ek aur instance chahiye. wo same hai  almost jaise aap
//class ka instance lete hai.
//new keyword se aapko naya instance milta hai. classes to hai nhi yaha pe 
//new promise bhi milta hai javascript ke under .
//HISTORY of promise 
//ye promise pahele nhi milta ta.
//i think ye es6 ke under se milne laga. es5 me to i think nhi tha. ha es4 me to difently nhi tha.
//jab promise hamre pass pori tarha avaible nhi the. direct javascript ke under tab bhi hamara bahot
//sara kaam asychrounus hota hi tha. aisa nhi data base ES6 ke pahele nhi the. wo pahele bhi the.
//promise pahele nhi hame use karne padte the. us waqt aap asyn await bydefualt use karte the.
//promises ka syntex bahot accha tha. aur feature milte the. developers ko lagta tha use use karo
//kuch labaray hoti thi q aur blue bird .is ke through aap core javascript ke under  wo sari fucntionality
//use karsakte the jo aaj .fetch. then .catch use karte ho. 
//use time yaad karo jis time ye tha hi nhi. to kisi ne ye libraary banai thi.
//eventualy ye library bahot apriteat hogai to isko finally apritate kardiya gaya. core javascript ke under
//aapko kuch installiation karne ke jarorat nhi hai. ye library ab bydefault ati hai.
//pahele kya use karte the wo bhi pata hona chahiye.
//----------------------------------------------


//promises ham banana sikhenge.
//2 part hote hai promise ke ek consume karna hota hai promise ko 
//dusra hota hai create karna promise ko
//kisine to creat kara honga ha promise ko actualy creation samaj aygaya to consumtion bhi samaj ajayanga.
//jab ham fetch creat karnege to hame samaj ayenga bhehind the sean itna kuch hota hia featch ke under.

//promise apne aap me ek call back leta hai. promis ke under. promise ke under callback hell leta hai.
//call back ke under call back call back ke under call back usko bhi reduce karta hai. 

//call back ke under dete hu aap ek function. is fucntion ke 2 part hote hia. ek part hota hai resolve 
//aur ek hota reject. ya to promis ek to pora hoga ya reject hoga.
//promises ke 2 hi part hi ek to resolve hoga ya reject hoga.



const promisesOne = new Promise( function(resolve, reject){
    //do an asyc task . aapke async task kya kya hosakte hai
    //DB call hosakte hai ,database call , conect kiya , inject kiya.
    //cryptography related, network call hosakte hai aapke.
    //ab ham yaha dusra fucntion use karte hai. settimeout

    setTimeout(function(){
        console.log('Async task is complete.');
        
    },1000)

    //is resolve aur reject ne kiya kya jo ham ne unehe liya.
    //apne ne promisone kiya to use consume bhi karna hoga.
});

//.then ka sidha conncetion hai resolve ke saat.
//.then ke under ek call back milta hai. ek fucntion milta hai . ye fucntion automatically ek 
//argument recive karta hai. jo bhi value set timeout me hai wo return hoti hai .then me

promisesOne.then( function(){
console.log("promise consumed.");

})

//output 1 secound baad to settimeout run hogaya magar aap ne properly is async task ko complete
//kara ya nhi kara kyon ke ye settimeout 1 secound baad exicute hohi  gaya hai. aapka acutally me 
//aapko properly consume hi karna ho to yaha pe. 
//"promise consumed" aya kya out put me  to aap ne async task complete karadiya magar 
//ye promise hai ye pura hi nhi kiya. 
//kahene ka matlb hai aapne ye (resolve aur .then) isko apas me conncet hi nhi kiya .
//inko connect karane ke liye resolve ek method hai yaha pe. resolve method ko call karna hoga aapko. 
//ab ye resolve connect howa hai .then se.
//ab promise consummed kabhi bhi pahele nhi ayenga.
//kyon ke pahele async task complete hoga phir jaise hi aap ne resolve kiya uske baad .aapka resolve 
//run karenga.

//ye basic hai aapko samaj me aaagaya.





const promisTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed");

        resolve()
        
    },1000)
})

promisTwo.then(function(){
    console.log("promissed consumed");
    
})