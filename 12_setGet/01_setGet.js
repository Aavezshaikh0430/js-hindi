/*
ham class method ke zariye set get concept dekhenge. class sirf ek syntex hai under the hood vahi prototype wahi chal raha hai. 
*/
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

const hitesh = new User ('hi@choudhary.ai', '123')
// console.log(hitesh.password);


//new key word constructor bana raha hai aur new object creat kar raha hai.

//------------------------------------------------------------------------------
/*
but hame kabhi fine green controle chahiye hota hia. koi bhi mujhe password poche to mai usse nhi batao ke password kay hai . ya encrypted  password written karo .
class me bahot si aisi cheeze hoti hai jiska axis aap nhi dena chahete hu. kuch coustumize code karna chahete hia. isike liye aapke geter aur setter aate hia.

get aur setter kya hia. : agar aap kisi ko password dena hi nhi chahete hai uske badle aap ek error dena chahete hia. to wo error kaise denge.
geter aur setter bydefault har class me hote hia. kyon ke ham ne un par kuch code nhi likha hota hia.to getter aur setter by default behiviour karte hai.

---------------------------------------------------------------------------------
*/

class User1 {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // get password(){

    //     return this.password.toUpperCase()
    // }
}

const hitesh1 = new User1 ('hi@choudhary.ai', '123')
// console.log(hitesh.password);

/*
error aa gaya kyon aagaya error cannot set property password user which is already in using a getter .
to kya howa ham console.log(hitesh.password); yaha tak pahonche hi nhi.

isne kaha ke password property hai hamne password propety le rakhi hai. construtor se agar aap getter define karonge to setter bhi define karna hoga. 
ek aagaya to dusra bhi ayega hi aap aisa sirf getter use nhi karsakte aapko getter ke saat setter bhi use karan padta hai.

1] get kya karta hia. simpli aapko get karta hai. matlab iska parspective hai class ke bahar se 
const hitesh = new User1 ('hi@choudhary.ai', '123')
console.log(hitesh.password);
class ke bahar se value get karna chahete hai. isiliye getter hota hai.

2] koi value set karna chahete hu class ke under to setter hota hai. to hame value deni hogi to setter hota hia. 
setter hai to usmme value to dalni hogi na to number ho string ho kuch bhi ho.

set passward(value){
        this.password = value
}


value leni hogi to getter hota hi. value set karni ho to setter hota hi.

*/

//-----------------------------------------------------------------------------------

class User2 {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // get password(){

    //     return this.password.toUpperCase()
    // }
    // set password (value){
    //     this.password = value
    // }
}

const hitesh3 = new User2 ('hi@choudhary.ai', '123')
// console.log(hitesh3.password);

// out put : RangeError: Maximum call stack size exceeded
/*
ye error kabhi kabhar hi dekne ko milenge.
is problem ka naam bhi hai.

to actualy me hota kya hai. ke aap uske under value set karo but value set karte time construtor baar baar call ho raha hai.
kyon ke value aap ne value set kardi aur object confuse ho rahe hai. ki race lag jati hai in dono me. karna kya hia. 
aapko error aa raha hai. at set password at set password usne bola ki yaar aap . aap bhi password set kar raho ho . construtor bhi set kar raha hai. actualy me kar kya rahe ho actualy me  is traha se thoda dyan rakhiye ga kis traha se values aati hai set hoti hai. as it is value rakhte ho to  problem hone ke kafi chances hote hia.
to is ki prblem aagai hai to kaise set kare.

construtor bhi value ko set kar raha hai. aur geter aur setter bhi hia. getter konsi value get karne chahete hu. ye password vali value hi get karna chahete ho.
set karne ke liye bhi ye set vali value hi set karna chahete ho.

construtor bhi value ko set kar raha hai. aur setter bhi value ko set kar raha hai.
dono ke beach race lag jati hai. mai set karonga mai set karonga. isi race ke vajha se ye error dekte hia.

----------------------------------------------------------------------------------------------
*/


/*
ab is problem ka solution bada unique hai. is ke liye ek alternative approch bhi di jati hai.

 set password (value){
        this.password = value
    }

password set karte time aap yaha pe kya kariye ek new property hi bana ligiye  kyonki ab actualy me ye fark nhi padta hi ke user kya de raha hai aur construtor ke under kya bole rahe hai. property ek noraml bhi ho sakti hia. ab jo values set hho rahi hai.vaha pe wo password ki yaha se ho rahi ahi getters aur setters se to .

to ham kya karte hai. this dot underscore password karte hai. : this._password
almost ek naya hi variable bana diya hai yaha par ab wo password aapki valu ko set kar raha hai. 

set password (value){
        this._password = value
    }

ab itna karne se ye kaam nhi hoga kyon ke aapne set to kardi par get karte time bhi to problem aayengi aapka ek getter hai ye to bol raha hai ye purana wala password do jo mai ne use kara to javasript bolta hia. ye problem hai.aapke code me abhi issues hai. automaticaly jaise karonge to aapko wapasa se vahi issues ayenga. 

ab hame get karte time issue aagaya ab is level ka aapko knowledge hoga. aapke errors ka tab hi actualy e acche se samaj paaonge.

jab set hi _password kari hai : this._password = value 
to get bhi _password karo na. : this._passwrod

ye passwrod jo hai wo ho gaya set 
ye jo construtor ka password hai wo actualy me set get me hi to pahonchegi na. 
behind the scene apka construtor value set kar raha hai.
to hogaya hamara kaam 

*/

// class User3 {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){

//         return this._password.toUpperCase()
//     }
//     set password (value){
//         this._password = value
//     }
//     get email(){

//         return this._email.toUpperCase()
//     }
//     set email (value){
//         this._email = value.toUpperCase()
//     }
// }

// const hitesh4 = new User3 ('hi@choudhary.ai', '123absd')
// console.log(hitesh4.password);

/*
hamara password capitalize hogaya to kyon ho gaya . to password ko get karte time uppercase kardo  set karte time suppose karo as it le raha ho to actualy me aapko password 123absd hi hai. lekin jo bhi us ko axis karna chahenga. acess karte time ham usee hand to hand convert karke denge. uppercase hi denge 123ABSD result me aapko koi diffrecne nhi dekhenga. 
lekin aapko samajna padenga ke akhi ho kya raha hai. ya wala code aur pichla wala code exatctly same tha par 

 set password (value){
        this._password = value
    }

par yaha par value hi set ho gai hai.

get password(){

        return `${this._password}aavez`
        
    }

to jo bhi password hai .to samne vale bunde ko return kaise hoga usko pata hi nhi lage ga ke ham ne class me kar kya rahe hai. actual me 123absdaavez usko ye return ho raha hai.

dikhye hamare pass power kitti hai. values ham actual me store 123absd store kar rahe hai. but koi bhi us value ko axis karna chahe raha hai to usko ek dusra value de rahe hai.

bada hi intresting sa field hai getter aur setter kaise value fullfil hoti hai. 

setter ko kabhi return nhi karnte setter ko value me store karte hia. ]

this._email = value

getter me hamesha value return karte hai kyon ke koi na koi value ko get karraha hai.

kafi intresting sa concept hota hia. getter aur setter concept bada hi useful hota hia. concept.

*/

class User3 {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

   get password(){

        return `${this._password}aavez`
        
    }
    set password (value){
        this._password = value
    }
    get email(){

        return this._email.toUpperCase()
    }
    set email (value){
        this._email = value
    }
}

const hitesh4 = new User3 ('hi@choudhary.ai', '123absd')
console.log(hitesh4.email);