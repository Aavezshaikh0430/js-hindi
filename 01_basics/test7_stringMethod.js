const name = "Aavez";
const repoCount = 50 ;

// console.log(name+" Repo in Github "+repoCount+" are Value.");
//ye syntex jo hai koi bhi variable ko concat krna ho to use karte hai magar
//ye old type hogaya string creat karne ka //aaj ke modern period me ye syntex use karna acchi baat
//nhi hai

//hame varible ko concat karne ke liye use karna hai back tick ``
//back tick ka fiyda ye hai yaha aata hai [string interpullation] aap bante hai placeHolder unke under jo bhi varible hai aap use direct inject karsakte hai. 

console.log(`Hello my name is ${name} and my rapo count is ${repoCount}.`);

const gameName = new String("Hiteshhc");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toLocaleLowerCase());

//lekin ye String method ne hamare original String ko change nhi kiya balke jo string ki value hai uski //copy ko change kiya   kyon ke string ye stack memory me data store hai

console.log(gameName)


