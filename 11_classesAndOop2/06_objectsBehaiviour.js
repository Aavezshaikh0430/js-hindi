/*Interview ka ek question 
js me math.pi ki value hoti hai. 3.14 
kya aap Math.PI ki value change kar sakte hia kya. 
change karsakte to kaise change karnege. 

aur nhi change karsakte to kyon nhi change karsakte.
[koi bole nge ke math.pi ki value constant hoti hai. isliye ham us value ko change nhi karsakte.]

to aapko behind the scene pata hi nhi to aap answer de nhi paaonge.

const valueOfPi= Math.PI
console.log(valueOfPi);


math.pi ki value kabhi change hi nhi ho sakti ye universaly constant hai. 
math.pi ki value override karna chahete ho to nhi karpaoonge.

Math.pi = 5
valueOf pi = 8
to ye value change nhi ho sakti
-------------------------------------------------
ye topic object related cheez hai.
ab hame pata hai. object ka direct axis meere pass hai.  object bahot sari property hai.

browser me 

const newmyObj = {username : 'Aavez'}
undefined
console.log
ƒ log() { [native code] }
console.log(newmyObj)
------------------------------------------------------
aapko Object ke under ek property milti hai. 
Object.getOwnPropertyDescriptor

ye property aapke object ke baare me kuch hidden cheze batati hai. jo ki aapne nhi dekhi hai.

ek project sir kar rahe the. vaha pe kuch value data base ke under dalni thi ek third party backend service use kar rahe the vaha se return responce jo aa raha tha dikne me to object hi tha. par us object par loop nhi lag raha tha. ab us object par loop kyon nhi lag raha hai. obeaus si baat hai todi reserch kari aur thoda sa idhar udhar deka tab phir bataya ki actuali me uski ek property disable thi. jo ki use itreat karne ke liye to object bhi itratable ruke ja sakte hai to aap bhi project par kaam karonge to pata lagenga.

aap ko kisi object ke bare me spacialy janna hia to yaha par uski property kaa naam likh ssakte hai. to mai math ke bare me janna chaheta hu. 

Object.getOwnPropertyDescriptor(Math)
aur jo uski property dikhna chahete hu actualy me kon si key ke upper aap wo value de rahe hai. dekhiye math actualy me wo key nhi hai jiski wo value aa rahi hai. dot PI jo hai wo aapki property ka name hai . aur suki value hai 3.14 
math jo pora module hai. uske under mujhe chahiye pi ki value pi ki value aap single code ya doble code jo chahe us me likh sakte hu.

Object.getOwnPropertyDescriptor(Math, 'PI')

*/
// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
/* {
     value: 3.141592653589793,
     writable: false,
     enumerable: false,
    configurable: false
  }
  
  discriptor ki value jo aai hai hamare pass wo hai. pi ki value hai wo hard corded unhone likh rakhi hai.
  writable jo propety hai use unhone false kar ke rakha hai. ye property itni deep itni hard code false karke rakhi hogai hai. is pe check bhi hai. is value ko true nhi kar sakte hu.

  ye enumerable bhi nhi hia. aur ye configurable bhi nhi hai.

  =======================================================


  is traha ham hamare bhi object ke property bana sakte hia. koi hamara frem work use karsake hameri library use kare to kuch hardcoded values hai ham unko de de uko kabhi change hi nhi kar paaye.

  hamji aisa posible hai. aap unki property flags le sakte ho aur un property flags ko change bhi karsakte hu.

  to is traha ki proerty ham khud bhi defind karsakte hai.

  --------------------------------------------------------------------

  ab object karne ke dekhiye kai trike hia. aap factory fucntion bhi use karsakte hia. jaise 
  object.creat bhi use karsakte hia. object ban jayenga  bydefault values null hoti hai.
  object.creat(null)
  
  const mynewObj = object.creat(null)
  ye ligiye ban gaya aapka object 

  eg2
  const chai = {
    name : 'ginger chai',
    price : 250 ,
    isAvailable : true
  }
    console.log(chai)
  */

// const chai = {
//     name : 'ginger chai',
//     price : 250 ,
//     isAvailable : true
//   }
//     console.log(chai);

/*
kya mai is chai ki bhi value ko set kar sakta hu. writable unmetable configrable to ka set kar sakta hu.
kya wo propety avaible hai bhi kya nhi hai. 
actualy me vo propety avaible hai. 
object.getownporpertydiscripter
 */

// const chai = {
//   name: "ginger chai",
//   price: 250,
//   isAvailable: true,
// };

// console.log(Object.getOwnPropertyDescriptor(chai));
/*undifiened hai kyon undifined hia.
        aapne kaha property ka discripeter do ye to object hia. property to hai nhi to property kya hai 
        ye neme , price, isAvailable. 
        is chai ke under name property  
        propertydicripter me bolna padenga kis ki propety hai aap maang rahe hu. aap chai ke under se name chah raha u to mai uske propety ka discription mai mil jayenga yaha pe.
        */

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// /*
//         {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// is traha se aap value le sakte hu aur define bhi kar sakte hu.
//         */


/*objects ke under aap apni property ko defind bhi karsakte hia.
ham yaha defineproperty lete hai define propety me 3 para meter hote hai. (chai, 'name', {})
 */
// Object.defineProperty(chai , 'name', {
//     writable : false,
//     enumerable : false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

//--------------------------------------------------------------------

/*
wirtable: false se aage chal ke kisi ko value change karana ho to wo change nhi kara paayeng.
enumerable : false kar rakha hai. 

iske upper loop laga kar rakte hai. chaliye dekte hia. kya loop lag sakta hia.
for of loop lete hai object ke liye aur easy hota hai

*/

// const chai = {
//     name: "ginger chai",
//     price: 250,
//     isAvailable: true,
//     OrderChai : function(){
//         console.log('chai nhi bani');
        
//     }

//   };
// //   console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//   Object.defineProperty(chai , 'name', {
//     writable : false,
//     enumerable : true,  //false karenge to name ke value hame nehi dikhengi
// })
// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

// Object.defineProperty(chai , 'price', {
//     writable : false,
//     enumerable : true,  //false karenge to price ke value hame nehi dikhengi
// })
// // console.log(Object.getOwnPropertyDescriptor(chai , 'price'));

// Object.defineProperty(chai , 'isAvailable', {
//     writable : false,
//     enumerable : true, //false karenge to isAvailable ke value hame nehi dikhengi
// })
// console.log(Object.getOwnPropertyDescriptor(chai , 'isAvailable'));


// for (let [key, value] of chai) {
//     console.log(`${key} , ${value}`);
    
// }

// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
    
// }

// output 
/*
name : ginger chai
price : 250
isAvailable : true
OrderChai : function(){
        console.log('chai nhi bani');

    }
        ham nhi chahete aise output aye. hame sirf key value chahiye.
*/

//yaha hame check bhi lagan padta hai kyon ke code hamara pat sakta hia object ke under agar fucntion aagaye to fucniton bhi itrat honge ham fucntion ko itrat nhi karna chahete to waha if else lagayange.
//code fate kab jab object me fcntion aayenge.

// for (let [key, value] of Object.entries(chai)) {
//     if(typeof value !== 'function'){
//             console.log(`${key} : ${value}`);
//     }
    
// }

//if(typeof value !== 'function') typeof nhi hai fucntion ke to hi console.log(`${key} : ${value}`); print karo
//isse hamara code nhi phte ga.


//----------------------------------------------------------------------

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    OrderChai : function(){
        console.log('chai nhi bani');
        
    }

  };


  Object.defineProperty(chai , 'name',{
    writable : false,
    enumerable : true,  //false karenge to name ke value hame nehi dikhengi
})
console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

Object.defineProperty(chai , 'price', {
    writable : false,
    enumerable : true,  //false karenge to price ke value hame nehi dikhengi
})
// console.log(Object.getOwnPropertyDescriptor(chai , 'price'));

Object.defineProperty(chai , 'isAvailable', {
    writable : false,
    enumerable : true, //false karenge to isAvailable ke value hame nehi dikhengi
})

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
            console.log(`${key} : ${value}`);
    }
    
}