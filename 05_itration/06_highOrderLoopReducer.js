
const arry1 = [1, 2, 3, 4, 5]

const initailValue = 0;

const sumOfArry1 =arry1.reduce( (acc , currentvalue)=> acc + currentvalue,
initailValue
);
// console.log(sumOfArry1);

//Reducer React me bahot ata hai.
//Reducer kaam kaise karta hai.
//reducer me ham ek arry1 lete hai.
//us arry me ham ek initial value lete hai.
//us arry1 pe ham ne ek reducer method lagaya.
//map filter me hame arry1 ki index no. value item ye sab milte hai.
//magar reduce me hame ek ACCUMILATOR , aur CURRENTVALUE milti hai.

//ye cuurentValue kya hai. to ye currntvalue arrya ki value hoti hai.
//ye ACCUMULATOR kya hai. accumulator apko ek empty khali value deta hai.
//is accumulator me initial value hoti hai jo ham intial value zero rakhte hai.

//jo bhi aapki initial value hoti hai. first time vo accumulator me jati hai
//first time aapka accumulator ki value initial value ki hoti hai.

//yaha ham ne intial value 0 rakhi hai.
//to accumulator ki value bhi bydefault 0 . hi rahengi.

//aapki current value hai. jo arrya ki first value hai vaha se aapki value start hogi.
//apki current value hai 1 .

//first time

//to aapki pahli baar accumulator 0 aur current value 1 
//accumulator + currentvalue 
// 0 + 1 = 1

//ab jo 1 value hai wo hojayenga aapka accmulator me

//secound time

//accumulator =1 aur curentvalue arry1 ki secound value 2 hai to 
//1+2 =3
//accumulator + currentvalue 
// 1 + 2 = 3

//third time

//accumulator = 3 aur curentvalue arry1 ki third value 3 hai to 
//3+3 = 6
//accumulator + currentvalue 
// 3+ 3 = 6

//fourt time

//accumulator = 6 aur curentvalue arry1 ki fourth value 4 hai to 
//6+4 = 10
//accumulator + currentvalue 
// 6+ 4 = 10

//fif time

//accumulator = 10 aur curentvalue arry1 ki fif value 5 hai to 
//10 + 5 = 15
//accumulator + currentvalue 
// 10 + 5 = 15

//aisa code exicute hoga.

//ye reduce pore arry par chalta hai.

//accumulator kya karta hai. acc. first baar hi initail value se vlue leta hai.
//acc secoud time jo bhi iska sam aya hai usko accumulator me dalta hai.

//paheli baar to accumulator ki value thi 0 magar ab
//acuumultaor ki value hogai hai 1.

//To isi tarha se acc me kya hota hai. jo bhi aapki final sum hota hai usko ikkhata karke
//accumulator me daal diya jata hai.
//magar first time accumulator ko pata hi nhi ke value kya do.
//to aisi liye accumulator initial value leta hai.

//2] example of reduce method with simple function.

const myNums = [1, 2, 3,]

const myTotal =myNums.reduce( function mynum(acc, item){
    // console.log(`acc : ${acc} and curval : ${item}`);
    return acc + item
    
}, 3)
// console.log(myTotal);

//reduce method jo ham
//ye shopping cart hota is me itne sare bil ho chuke hai. inka prize ye hai .
//insaboko item ka total kardo..

//reduce in arrow function.

const myNum2 = [ 1, 2, 3, 4]

// myNum2.reduce( (a)=>{},0)

// const myTotal3 = myNum2.reduce ( (acc , curval)=> acc + curval,0)

// {},0 [parenthesis ke baad 0 accumulator lagana hi hoga.]

const myTotal2 = myNum2.reduce( (acc , curval)=>( 
    // console.log(`acc : ${acc} and curval : ${curval}`) ,
     acc + curval ),0)

// console.log(myTotal2);


//ek shopping cart hai jo arryofobject ki form me aap ko mila hai
//uski shopping cart me product ki price ka total karna hai.

const shoppingCart = [

    {
        itemCourse : "js Course",
        price : 2999
    },

    {
        itemCourse : "python Course",
        price : 999
    },

    {
        itemCourse : "Mobile dev Course",
        price : 5999
    },

    {
        itemCourse : "data science course",
        price : 12999
    },
]

const totalAmount = shoppingCart.reduce ( (acc, courseprice)=>{
    console.log(`acc is : ${acc} and coursprice ${courseprice.price}`);
    return acc + courseprice.price
} ,0)

console.log("total course price is : "+totalAmount+"/-");

//aapko pata laga honga ke kyon hamre pass itne tarike hai.
//har tarika kuch specialization hai. kuch easy tharike hai 
//kuch dificult tarike hai
//atlist aapko loop ke bare me kafi knowledge hai. 




