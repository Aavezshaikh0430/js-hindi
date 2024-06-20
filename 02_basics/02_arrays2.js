const Marvel_Heros = ["Thor", "Iron-Man", "Spider-Man"];

const Dc_Heros = ["SuperMan", "Flash", "BatMan"];

// Marvel_Heros.push(Dc_Heros);

// console.log(Marvel_Heros);

//output ['Thor', 'Iron-Man', 'Spider-Man', ["SuperMan", "Flash", "BatMan"]]
//2 array convert karnege push method se to wo array ke under array hoga. 
//Dc_heros ye poora array 3  index no me pora array rahenga.
//flash ko axis karne ke liye hame 
//(marval_heros.indexof[3][1]) 
//aisa axis karna hoga.
//push method me array Dc_heros ko as a single element consider karenga.

const allHeros = Marvel_Heros.concat(Dc_Heros);
// console.log(allHeros);

//2 array ko combine karne ke concat method use karsakte hai 
//magar concat method new array return karta hai porana array change nhi hota
//is liye concat method ko new variable declare kar ke console karna padta.  
//concat hame return karta hai new array
//push hame existing array return karta hai matlab . jo ham jobhi change karte hai
//push se vo original array me change hota hai.

// or easy method  spread oprator 
//spared oprator ka matlb kanch ka glass ligiye use uper se drop kar digiye
//kanch ka glass spread ho jayaenga. 

const Marvel_Heros1 = ["Thor1", "Iron-Man1", "Spider-Man"];

const Dc_Heros1 = ["SuperMan1", "Flash1", "BatMan"];

const all_new_Heros = [...Marvel_Heros1, ...Dc_Heros1];
console.log(all_new_Heros);

//2. 2 array ko milane ke liye ham spread oprator use karsakte hai.
//concat bhi use krsakte hai magar jayada tar log spread oprator hi use karte hai
//concat me ek hi array ko combine  kar sakte hai limitation de sakate hai 
//spread me ham ulimited array ko combine karsakte hai.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// array ke under array hai to use flat karna hai to hum .form method use karte hai
//jisse hamara nested array single arry me convert hota hai.

const real_arry = another_array.flat(Infinity);
console.log(real_arry);

//data scraping karna raha to 
//jab bhi data alag fomate me ata hai, ya object , ya string me ata hai.f

console.log(Array.isArray("Aavez"));
console.log(Array.from("Aavez"));//aavez ko hame ne array me convert kiya hai


let score1 = 100;
let score2 = 200;
let score3 = 300;

//multiple variable ko array me convert karna ho to ham [of] method ko use karte hai
console.log(Array.of(score1, score2, score3));
