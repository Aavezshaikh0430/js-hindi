//  const tenderApp = Object(  {
//     name: "shaikh Aavez",
//     schoolName: "sham's ul uloom urdu high school "
//  }

// )

const tenderApp = {}
tenderApp.id = '1234abdc'
tenderApp.name = 'aavez'

tenderApp.isLoggedIn = false;



// console.log(tenderApp.id);
// console.log(tenderApp.name);

// console.log(tenderApp);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userfullName: {
            firstName: "Aavez",
            lastName: "shiakh"
        }
    }
}
// console.log(regularUser.email);
// console.log(regularUser.fullName.userfullName.firstName);

const obj1 ={ 1 : 'a',2 : 'b'}
const obj2 ={ 3 : 'c',4 : 'd'}
const obj4 ={ 5 : 'e',6 : 'f'}

// const obj3 ={obj1, obj2}
//problum array wali ayengi jaisa array ke under array aye the 
//waise object ke under object ayenga.

// const obj3 =Object.assign({},obj1,obj2,obj4);


//{} assign me ye option parameter hota . 
//{} paranthis hai ye hamara target hai.
//baki ke jo act karenge wo source .

//actualy ham assing ko bhi kam hi use karne wale hai.

//ham use karenge spread oprator.
//jaisa ham ne ek kanch ka glass le liya aur use jamin par chod diya 
//kya hoga. wo glass spread hoga. tot jayenga.

const obj3 ={...obj1, ...obj2,  ...obj4}

// console.log(obj3);

//jab bhi DataBase se value ayengi vo array of object me ayenigi

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "swiggy@gmail.com"
    },
    {
        id: 3,
        email: "flipcart@gmail.com"
    },
    {
        id: 4,
        email: "insta@gmail.com"
    }
    
]

// console.log(users[1].email);

// console.log(tenderApp);

//objects method.
//hame object ki sari key axis karni hai to

console.log(Object.keys(tenderApp));

//hame object ki value axis karni ho to.

console.log(Object.values(tenderApp));

//objects ki har key value ko array bana ho to
//entries hame kam hi use ata hai.

console.log(Object.entries(tenderApp));

//objects me hame value pata lagana ho to kya wo value hai objects me .to 
//return boolean ayegan. true , false 
console.log(tenderApp.hasOwnProperty('isLogged'));





