//filter value return karta hai.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums =myNums.filter ( (num)=> num > 5)
console.log(newNums);

//jab bhi filter method use karte hai. filter me hame ek callback funtion melenga.
//jis me har value ko each axis kiya jayenga. likin us ke baad ek condition deni padti hai.
//jo condition true hogi vo value return kar ke jayengi. isiko bola jata hai filter ka basic.

//is me bhi todi si ati hai problum.

const newNums2 =myNums.filter ( (num)=>{num > 5} //yaha hame empty arry milenga.
//explicit return kab hota hai.
//immpilicit return kab hota hai . is ka khayal rakna chahiye.
//call back function me jab ham {} scop ke under hame return keyword likhna zarori hi hota hai.
//aap agar {}scope open karnge to return keyword likhana zarori hota hai. 
)
console.log(newNums2);

const newNums3 = myNums.filter( (Num)=>{
     return Num > 5
})
console.log(newNums3);

//filtar wala kaam hame for each se kaise karne.

//for each value return nhi karta hai isliye 
//us value ko ham push karnge ek arry me aur wo arry ko return karneng.

const newNums4 = []

myNums.forEach ( (item)=>{
    if ( item>5){
        newNums4.push(item)
    }
})
console.log(newNums4);

//aap konsa bhi method use karsakte hai.
//foreach me aapko code jada likhna padra aur logic bhi lagana padra
//itna farq hai.
//filter method value return karta hai.
