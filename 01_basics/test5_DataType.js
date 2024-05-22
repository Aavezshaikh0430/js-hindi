/* Datatype
data type := kis tarha se data ko memory me rakha jata hai aur accses kiya jata hai us basis par data ke 2 categary me divided kiya gaya hai 
1] Primitive dataType
2] Non Primitive dataType [Refrence Datatype]

1]primitive datatype 7 type
jitne bhi primative datatype hai vo call by value matlab: jab bhi ye kahi se khai copy karte hai. [inka jo original data hai vo refrence memory ka nhi diya jata balke inko copy kar ke diya jata hai aur aap jo bhi chenges karte hai wo copy me hote hai.]

String, Number, Boolean,

null, ==>means khali naki zero abhi value server se ayi nhi hai.

undefined, ==>  aapne variable declare kar diya but isme kya value daal rahe hai ye decide nhi kiya nhi variable declare hai memory space declare hai par kya isme value aayengi ye declare nhi hai. isse undefined kahete hai.

symbol,==>kisi bhi value ko unique banane ke liye symbole ka use hota hai. advanced js me use hota hai react js me jayada use hota hai [jab bhi hum component ko unique banane ke liye symbole ka use karte hai] jaisa ham koi button ko unique banane ke liye symbole ka use karte hai.

BigInt,*/

const score = 100;
const scoreValue=100.34;

const isLoggedIn = false;

const outSideTemp = null;

let userEmail;
//2nd type undefined
let userEmail1=undefined;

const id = Symbol('1234');
const anotherId = Symbol('1234')

//aontherId ka [typeof] datatype symbol ata hai.

/*dekne me symbol same hi lag raha hai magar symbol ka kaam hi hai ke agar aap value bhi same paas kar rahe ho chahe String ho ya number ho aapko jo result melenga id aur anotherId vo same nhi rahengi */

//console.log(id===anotherId);

//false ayenga kyon ke symbol har variable ko unique hai same nhi rahata 
//halanke ham nhe value same likhi hai hame jo return value mila hai vo same nhi mila hai.

//const bigNumber = 2232322875624287529842768 //output2.2323228756242874e+24
const bigNumber = 2232322875624287529842768n

// n lagane se out put same to same ayenga kitna bhi badaho
//n lagane se automatically BigInt banjata hai.
//console.log(bigNumber);





/*2]Refrence Datatype [Nonprimitive Datatype]
Array,
Objects,
Functions,

Agar aapko js master karni hai to aapko javascript Object master karligiye
aur web events hote hai ya browser events hote hai ye 2 topic master karlijiye aap js master ban jayenge .

js dynamically type language hai ya statically type language hai.
js dynamically type language hai.
*/
const heros =["Shaktiman","Aryaman","Doremon","IronMan"];

//objects key = value pair me hote hai objects data type kuch bhi ho sakta hai jaise number, 
//string, boolean, function, Array, aur dusra Objects bhi ho sakta hai

const Biodata={
    name:"Aavez",
    age:"29",
    Email:"aavez23@gmail.com",

}


const myFunction=function(){
    console.log("hello world");
    return;
}
//output to function hi ata hai magar 
//function ka aur details me datatype FunctionObject bolte hai.

//console.log(myFunction);
/*hum function ko variable me bhi store karsakte hai. */

/*
kisi bhi value ka datatype maloom karna ho to typeof se pata lagana */
console.log(typeof anotherId);

//Non primitive datatype of typeof Object hi ata hai.

