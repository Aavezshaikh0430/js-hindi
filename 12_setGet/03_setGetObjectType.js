/*
isi traha aap object base syntex bhi kar sakte hai.
hai code wahi bas syntex alag hai. jo bhi syntex aapko acche lage us ka use kariye 
*/

const User = {
    _email : 'h@hc.com',
    _password : 'abc',

    get email (){
        return this._email.toUpperCase()
    },
    set email (value){
        this._email = value
    }
}

/*
new keyword  construtor fucntion hotr hia. aur

Object.creat ye factory fucntion hote hai.

Object.create () kis object ke bases par mai naya fucntion creat kar ke do
abhi tak hame ne object.creat() me kuch nhi bataya 
 object.creat() by default null hota hai.   object.creat(null) ekdum khali object

 mai user ke base pe mujhe ek object creat karo aur tea ke under refer karo
*/

const tea = Object.create (User)
// console.log(tea._email); //h@hc.com
console.log(tea._email); //H@HC.COM

/*
ab aap chezu ko acess kar sakte hu. aap ne jo bhi defind kara hai wo obeasu se baat hai wo acess hone wala hai.

get] :=> email mai jo property override kar raha hu memory se leke aane ka aur memory me chode ke aane ka jaise aap ne kaha get 
matlab memory me se leke aao aap leke aaye to kaha to thik hai kya leke aana to aap ne kaha _emial le ke aao
to this._emial ko le ke aai .to uupercase ki shakal me 

aapko jo bhi leke aana hai usko nhi pata wo memory me kaise shakal me store hai. aapne raste me ate time ussme ched shaad kari hai. ched shaad matalb override kar diya hai.

set] :=> isi traha set ka bhi hai ab user nhi matlab hai _email tha kya email . user bola mujhe nhi pata aap _emial use kar raha hu. mujhe pata hai ek set mehtod creat kar rahe ho. email ek method nhi hai ek propety hi hai. 
to mai .email ko acess karonga wha pe  
set wali property jaise acess karliye hai. to mai aapko ek value provide karonga aap usko store karloge.
 */