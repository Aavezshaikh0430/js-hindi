const myNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach method
// const newMyNum= []
// myNum.forEach ( (item)=>{

//     newMyNum.push(item + 10)
// }
  
// )
// console.log(newMyNum);
//---------------------------------------------------


//mynum ke har value me 10 number add karna hai to kaise add kare.
//to ham Map method ka use karte hai.
//map ek bada hi easy hur accha function hai. forEach se better lagta hai map.persnol oppioun hai.
//call back to kahani samaj me aa hi gai hongi. ( ()=>{})
//map automatically value return karta hai.

const newnum =myNum.map( (num)=>{
    return num+ 10
})
// console.log(newnum);



//chaining method in map 
//ham map ke under aur map function use karsakte hai.

//for eg:ham map ke under map usme filter aise beshumar method use karsakte hai
//is ko chaining method kaha jata hai.

//map().map().filter() niche ka example ye hai. 



const myNum1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum2 =myNum1
.map( (num)=> num *10) //output [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
.map((num)=>num +1)    //output [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
.filter((num)=>num>80) //output [81, 91, 101]

//for eg:ham map ke under map usme filter aise beshumar method use karsakte hai
//is ko chaining method kaha jata hai.

console.log(newNum2);

//map me har value return hogi. hoti hai.

//filter kya hai 
//jo bhi true hoga vo exicute hoga.

