//scope ki start hoti hai 3 keyword se
// let, const, var

let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

//{} ye hai block scope

var f = 300

if(true){
    let d = 40
    const e = 50
     f = 60
}
//  console.log(d); //let d ko ham {} ke bahar axis nhi kar sakte error ayenga. let d ye block scope hai
//  console.log(e); //const e ko ham {} ke bahar axis nhi kar sakte error ayenga.
 console.log(f);  //var f ko ham {} ke bahar axis kar hai. var global variable hai ham ise {}scope ke 
                  //bahar bhi axis kar sakte hai.

//global value block scope me availble hoti hai
//magar block scope ki value global scope me availble nhi hoti

//jaise baccha parent se ice cream leke kha sakta hai.
//magar parents bacche se ice cream leke khaye to accha nhi lagta.


let d = 500
if(true){
    let d = 40
    const e = 50
    var f = 60
    console.log("Inner [block] scope d: ", d);
}
console.log("global scope d: ",d);




