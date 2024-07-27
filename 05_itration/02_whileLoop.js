//type of loops
//for loop
//while loop
//do while loop



// while (condition) {
    
// }

//sirf syntex alag hota hai.

let index = 0
while(index<=10) {
//  console.log(`value of index is ${index}`);  
 index = index + 2
  
}

//aary ko bhi is while loop se karna ho.

let myArry = ['batman', 'superman', 'flash', 'wonderwoman']

let arr = 0
while (arr < myArry.length) {

    // console.log(`Value is ${myArry[arr]}`);

    //ye bhi arr++ chalenga 
    //arr = arr +1
    arr++
}

//progarmming me kuch galt sahi nhi hai end of the day apko jho
//output bola hai wo aana chaihiye for loop se use kare ya 
//while loop ya phir dowhile loop method se kyon na ho sirf output aana chahiye.


//do while loop
//ye thoa sa intresting hai. do while me condition end me hai.
//aapki condition baad me check hogi kam pahele hoga.

let score = 1;

do{
    console.log(`Score is ${score}`);
    score ++;
}
while(score <= 10);

//kya ho aapki score ki value 11 ho tab kya hoga.

//yaha per special case hai. do while loop ka
//yaha par kaam pahele hota hai. condition baad me check hoti hai.
//ye kuch udhari wala system hai.
//ham ne pahele saman diya . phir condition boli mere pass paise hi nhi hai.
//par hamne to saman de hi diya.

//aapka score ek baar print hoga phir condition check hogi 
//condition false bhi hogi to ek paar print hoga hi do while loop me

let highScore = 11;

do{
    console.log(`High Score is ${highScore}`);
    highScore++
}
while(highScore<=10)
    //minimum highscore ek baar print hoga