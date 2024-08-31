//ye hai hamaara 4 type of promise
//ham 4 wala promise banate hai . ek ek kar ke har ek promise me kuch na kuch sikhte jarahe hai.

//suppose error hamare pass true hai.
//error base checking par promise resolve hoga ya reject.
//suppose kareiye maine web request kari. ya file exiss karni chahi. file axis hogi to kuch bolonga
//file axis nhi hogi to kuch bolun ga.
//us hisab se code karenge.

//promise jab resolve hoga tab if wali codition exicute hogi.
//else case me baat aati hai jab promis reject hoga.
//rejection kya hai error deta hai.
//error bhi kuch hawa me hai nhi . use bhi to dena padta hai.
//to aap error reject me de sakte hai.

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Aavez", email: "Aavez@gmail.com", password: "123" });
    } else {
      reject("ERROR : something went wrong.");
    }
  }, 1000);
});

//aab aati hai call back cheze.
//.then laga ke value le lunga.
//.catch laga ke value  lelonga.

//1st then ke under main expect kara aap user donge.
//to then me user mere pass aagaya. thik hai.
//aab mai callback hell bata raha hu. kaise call back hell ko avoid kiya jata hai.
//ek dot then ek dot catch nhi hota aap jitne chahiye .then la sakte hai.

//hame user ke under pora username ,email, password ye sab pora hi mil rahe hai.
//ab mai chahta hu ye pora object lene ke bajaye mai sirf username hi lina chahta hu
//aap chahye to destructure kar ke bhi le sakte hai.
//yekin ham yaha long sinario yaha imgaine kar rahe hai.
//console log karaha hi lete hai.

//---------------------------------------------------------

// const username =promiseFour.then(function(user){

//     console.log(user);
//     return user.username

// });
// console.log(username);   output promis{<pending>} aur error ayenga

//aisa nhi kar sakte .

/*
ye actually me jo return karrahe hai wo akhir ja kaha raha hai. kya ham use ek varible me store karke 
uski value nikal sakte hai kya. aise nhi karsakte\
aisa to kaam nhi kar raha hai. 
promise jo tha vo pending stage me tha. 
documnetion me padha hai na promise ke alag alag stage hoti hai.

aise situcation me  hame data nikalna ho to ye kaam ham nhi karsakte.


to kya karsakte hai. to dot then ki further chaining karsakte hai. 
.then ek aur baar laga sakte hai. 
 */

//--------------------------------------------------

promiseFour
  .then(function (user) {
    console.log(user);

    return user.username;
  })
  .then((username) => {
    console.log(username);
  })

  .catch(function (error) {
    console.log(error);
  })
  .finally(()=>console.log('finally The promise is either resolved or rejected.')
  )

/*
  2 then ko bolte hai chaining uper vale dot se jo value ayengi. vahi aapke naye chain me aayengi.
  data base connection me ye syntex bahot kaam me ayenga . ye syntex ko dhyan se samjhenga.
  .then ke baad hame catch bhi lagana hoga pura syntex bhi to karna hoga.
  error bhi aarahi hai hamare pass  
  catch ka bhi bahot asan hai. syntex likhiye. jo bhi value return hogi usko error bholenge.
  aur console.log kara ligiye us error ko catch ke under.

  atleast mai properly handle karraha ho error ko aur jo bhi value aa rahi hai. 

  jab hamar error true hoga to output ayenga. 
  // let error = true   output    error : somthing went wrong
  //let error =  false;  output  {username: 'Aavez', email:'Aavez@gmail.com, passowrd: '123'} Aavez

  ye hogay hamara basic kaam ye parfect trika hai error ko handle karne ka.


  finally syntex kya hai
  error aaya thik baat hai . 
  promis resolve hogaya wo bhi thik baat hai.

  lekin kai baar hota hai mujhe bata do end me aapka jo bhi kaam karna tha wo ho gaya kya.
  resolve karna to resolve kardo . iska bhi time hota hai. aisa nhi ke promis unlimited time tak 
  chalta hai. aisa nhi ke promis 3 ghante wait laga do .
  finally x amount of time ke baad bata do ke jo bhi aap ka kaam hona tha wo ho gaya kya.
  ye finally hamesha hamesha exicute hoga. almost kind of default maan sakte ho.
  
  ye hogaya hamara basic.
  */

//-------------------------------------------------------------------------

//output 2 output ayenge jab hame error ko true karte hai to.
//error ayenga output me.
//jab errror false karenge. to  resolve hoga promis kyon ke hame ne error ko true bola to promis reject hi hoga.

  const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "Aavez", email: "AAvez@gmail.com", password: "123" });
      } else {
        reject("ERROR : something went wrong.");
      }
    }, 1000);
  });

  promiseFive
  .then(function (user) {
    console.log(user);

    return user.username;
  })
  .then((username) => {
    console.log(username);
  })

  .catch(function (error) {
    console.log(error);
  }).
  finally(()=>console.log('finally The promise is either resolved or rejected.')
)
