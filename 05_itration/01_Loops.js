//for loop

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     // console.log(element);
// }

//loop me hamar sabse pahele index initialize hoga. uske paad hoti hai condition check
//agar condition true hai. to aapka code exicute hoga. jaise hi aapka code exicute hoga
//to aapka ye block line nu. 6 just curly brases se pahele aapka index ki value ko badata hai.
//to wapis se aap ajate hai is index ki value par wapis se checking hogi wapis se under jayenge.
//wapis se index ki value incres hogi. agar checking fail hogi to sidha bahar ayenge loop ke.
//bas itni kahani hai loop ki.

//agar hame 5 pe jab loop ayenga to kuch dusra massage print kare.

// for (let index = 1; index < 8; index++) {
//     const element = index;

//     // if(element === 5){
//     //     // console.log("5 is the Best Number.")
        
//     // }
    
//     // console.log(element);
    
// }

//nested loop :loop ke under loop

// for (let i = 1; i <= 5; i++) {
    
//     console.log(`Table ${i} is`);

//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Innerloop value :${j}.  and outer loop ${index}`);
//         console.log(i + "*" + j + " = " + i*j);
        
//     }
    
// }
//controle c se infinite loop ko stop karna hoga.

//const myArry = ["shakitman", "aryaman", "chota Bhem", "Iron-man", "Bat-man", "super-man" ];
// console.log(myArry.length);

// for (let index = 0; index < myArry.length; index++) {
//     const element = myArry[index];
//     // console.log(element);
    
// }

//basic knowledge loop
//agar index++ nhi raha to loop vahi ka vahi chalta jayenga hamara program first value par
//hi atak jayenga 



//2]age dekhnege ke aapko pura loop nhi chalna ho tab kya karen
//samjho hamare pass 1000 book ka data aya . to hame nhi print karana pora data 
//tab kya kare. tab use karte hai break. key word in loop

//break and continue keyword 

for(let i = 0 ; i<=20 ; i++){

    if(i===5){
        console.log("Dected 5");
        break
    }
    // console.log("value of is is "+i);
}


//continue me kya hota ek
//ek baar maaf kard JAISE game me ek hota hai ek chance milta usi tarha continue me hota hai
//ek baar continue usi tarha continue continue kelte raho usi tarha
//code me 5 cut ho jayenga. 4 ke baad direct 6 print hoga. 5 ignore ho jayenga.
for(let i = 1 ; i<=10 ; i++){

    if(i===5){
        console.log("Dected 5");
        continue
    }
    console.log("value of is is "+i);
}