//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory
//There are 2 type of Memory 
//1] Stack 2]Heap


//1] Stack Memory
//jitne bhi primitive dataType hote hai waha sab jagha stack memory use hoti hai.
//jab bhi stack Memory use hoti hai. is ka matlab aap ko jo bhi variable declare kiya
//us ki copy milti hai.

//eg] of stack memory

let myYoutubename = "hiteshchoudharydotcomYoutube";

let anothername= myYoutubename;

console.log(anothername);

anothername= "chai with code";

console.log(anothername);

console.log(myYoutubename)

//stack Memory primitive datatype me hoti hai jab bhi hum stack memory ki value ko change karna chahe to
//wo original value ko change nhi karta balke original value ki copy deta hai aur us copy me change  
//hota hai original value change nhi hoti. copy hi change hoti hai




//2] Heap Memory 
//jitne bhi Non-primitive data type hote hai waha sab jagha Heap memory use hoti hai. 
//jab bhi ek memory heap ke under defind hoti hai object ya kuch bhi heap ke under chala
//jata hai waha se aap ko milta hai [refrence] original value ka. jo bhi change karenge 
//to original value me change hoga. 

//eg] heap Memory
//jitna bhi Non-primitive datatype hai vo heap memory me store hota hai.
//aur heap se jab bhi reference lete hai to copy nhi milta balke original data milta hai
// jitna bhi data hai userOne ka wo sab heap memory me chala jayenga.
 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
//imp yaha par userTwo variable to declare hogaya magar userTwo ko refrence object element se 
//mil raha hai to object to heap memory me store hota hai is liye userTwo ko heap memory 
//userTwo variable ko value heap memory se mil rahi hai. 
// userTwo.email = "hiteshchoudhary2@dot.com"


console.log(userOne.email);
console.log(userTwo.email);


//jitne bhi aap ke primitive hote hai vo jate hai stack ke under 
//stack ke undre aap jab bhi koi value lete hai vo iska copy hi milta ha 
//magar
//heap ke under jab bhi aap value rakte hai to uska refrence milta hai 
//matlab original value milti hai jab bhi value change karenge to to original
//value hi change hogi.

let studentId = {
    name : "Muzammil shaikh",
    RollNo : 27
}
let studentId2 = studentId
studentId2.RollNo = 56;
console.log(studentId2.RollNo);
console.log(studentId.RollNo);

let username = "Aavez shaikh";
let user2 = username;
console.log(user2);
 user2 = "Muzzammil shaikh";
 console.log(user2);
 console.log(username);