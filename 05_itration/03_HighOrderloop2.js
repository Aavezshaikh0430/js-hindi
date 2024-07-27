//for in loop 
//ye object ko axis karta hai 
//magr sirf object ke liye hi nhi dusri chezu ke liye bhi use karsakte hai.

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

//for in loop tap kare to bahot bad suggestion ata hai . itna darne ki zarrorat nhi.

for (const key in myObject) {
    //console.log(key); //output js cpp rb swift .ek ke niche ek ayenge.
}
//sarri key ayenge apne pass sirf console.log (key) karne par
//hame key ke saat object bhi chahiye. to 

//object kaise nikale.
//myobject[key]

for (const key in myObject) {
  // console.log(myObject[key]); //output javascript c++ ruby swift by apple .ek ke niche ek ayenge.
}

for (const key in myObject) {

    // console.log(`${key} shortcut is for ${myObject[key]}`);

    //out put 
    //js shortcut is for javascript
}


//kya ham for in loop arry ke liye bhi use karsakte.
//dekhte hai.

const programming = [ "java", "c++", "ruby", "js", "python"]

for (const key in programming) {
//    console.log(key);
}

//for of loop me hame jab key print karte hai to sidha value print hoti hai 
//magar for in loop me index number prit hota hai value print nhi hogi.

for (const key in programming) {
    // console.log(programming[key]);
}

//for in aur for of me yahi major diffrence hai ke 
//for of me ham jab key print karte to use value print hoti hai.

//for in loop me jab key print karte ha to use me index number print hota hai arrya ka.

 //kya ham map par for in loop laga sakte kya dekte hai.

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United State of America")
 map.set('Fr', "France");
 map.set('IN', "India")
 map.set('USA', "United State of America")
 

 //ham for of loop use karsakte map par 
 //par for in loop nhi use karsakte map par
//  console.log(map);

//  for (const [key, value] of map) {
//     console.log(key,":-", value);
//  }

// for (const key in map) {
//   console.log(key);
// }

 //using NaN as map keys
 //ham map ko itreat nhi karsakte.

 //object ke liye ham [for in] loop lagaye ge fatak se

 //arry ke liye ham [for of] loop lagaye ge fatak se
