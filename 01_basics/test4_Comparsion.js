// console.log(2>1);  true
// console.log(2>=1); true
// console.log(2<1);  false
// console.log(2<=1); false
// console.log(2==1);  false
// console.log(2!=1);  true           bahot asan hai predict karna.

console.log("2">1);   
console.log("02">1);

/*true  [hum predict karenge ke string "2" ka compaire number 1 se kaise honga]. magar 2 js ne automatically number me convert kiya hai is liye true ayenga na ki string ayenga.

Tip= jab bhi hum kisi value ko compaire kare to === se compaire kare jis se hum compaire keare to wo compaire data types ke sat compaire ho.
jab bhi hum compaire kare kisi bhi value ko to ye initiat kare ke dono ka data type same ho
*/

console.log(null>0);

console.log(null>=0);
console.log(null<=0);
console.log(null<0);

console.log(null==0);

/*iska meaning alag hai == ka matlab barabar ka hota hai jaise null baraber hai 0 ke.
a]double equal ka matlab hota hai 
[tip]iska matlba barabar ka hota hai jaise Aavez==Arbaz matlab aavez baraber hai Arbaz ke

b]>= ka alag matlab hota hai [tip]ye equality check karta hai 
jaisa 3>=2 matlba 3 ya to bada hai ye baraber hai 2 ke*/

console.log(undefined==0);
console.log(undefined<=0);
console.log(undefined>=0);

//undifined ko kabhi bhi compaire karenge to false hi ata hai.

/*strick check ===
=== kya karta hai na ki value ko check karta hai balke strickly check karta hai. balke uska datatype ke saat check karta hai*/

console.log("2"==2); //true ayenga boolean value magar === check karenge to
console.log("2"===2);// false ayenga kyon ke === datatype ke saat condition check karta hai 
console.log("2"==="2");// true ayenga kyon ke 2 ka datatype ke saat check hoga dono ka data type same hai  


//Tips: single = double == ke kabhi bhi compaire nhi karna hai ye comparasion aapko hamesha confusion me daal sakte hai. most case me ham aise comparison avoid hi karte hai hamesha code clean hamesha clean code ko hi value hai. aur wosi ko hi hum first priority dete hai.

