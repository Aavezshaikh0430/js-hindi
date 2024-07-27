//for of loop
//arrya specific loop hai 
//js me array object bahot powerful hote hai.

//arry me string kaise dalte hai
//["", "", "",]

//array me object kaise dalte hai.
//[{}, {}, {}]

//arry me bahot sare object melenge . har itration me se aapko object 
//me se kuch value nikalna hoga.
//pahele loop lagaiye object ke under jaiye aur dot notation se ya squre 
//notation se ek value nikaliye bahot common senario hai.

//1] for of loop

//for of loop me const itrater object
//object bhi aapke itrator hai. array bhi aapke itretor hai.
//string bhi aapke itreator hai. ham insab pe loop laga sakte hai.

// for (const iterator of object) {
    
// }

//ye itretor hai is ki jagha aap i bhi le sakte hai.

//object : aap kis object par loop laga rahe ho. ye javascript object nhi hai 
//balke aap kis cheez par loop lagana hai. ye wo object hai.

//for loop apne aap pata lagata hai kab loop end horaha hai. us value ki
//size kya hai aapko kuch nhi karna hai 
//apna varibale declare karligiye aur chode de.
//koi declaration nhi koi increment nhi koi decrment nhi. karna hoga aapko

const arr = [1, 2, 3, 4, 5, 6,]

for (const num of arr) {
    // console.log(num);
}

//aap string par bhi laga sakte hai.

const greeting = "hello world!";


for (const greet of greeting) {

    // if(greeting=== "w"){
    //     console.log('w is best');
    //     continue;
    // }

    // console.log("Each char is "+greet);
}

//Maps
//array type ke hi hote hai.
//map javascript me apne aap me ek object hai.

//map ko aap mdn me aur documentation pad sakte hai.

//koi bhi duplicate value map me hoti nhi hai.
//unique value milti hai.
//value aap set karte hai map me

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France");
map.set('IN', "India")
map.set('USA', "United State of America")

//unique value print karta hai map
//same value nhi print karta baar baar. jis order me data hota hai us
//order me hi print hoti hai.

//basic dekte hai map me print kya hota hai.

//kya ham for of loop laga sakte hai Map per dekte hai.!!

// console.log(map);

//for (const key of map)
//arry ka ham destruture karte hai. destruture hai syntex ye [key, value]
for (const [key, value ] of map) {
    console.log(key, ":-", value);
}

//output 
//['IN', 'India']
//['USA', 'United State of America']
//['Fr', 'France']
//pora ka pora arry aagaya. mujhe to alg value chahiye
//to aapko alag alag value chahiye to aapke pass ek syntex hota hai.
//


//object pe for of loop kaise lagaye

const myObject = {
    Game : 'NFS',
    Game2 : 'SpiderMan'
}

for (const [key, value] of myObject) {
    console.log(key, " :-", value);
} //ye program run nhi hoga.


//my object ye itrable nhi hai for of loop me 
//for of loop me object par loop nhi laga sakte.

//hame object par loop lagane ke liye dusra type ka loop lena hoga.
 
//for in loop

