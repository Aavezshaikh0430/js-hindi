/*
Exact same kaam ham fucntion se karenge.
*/


function User (email, password){
    this._email = email;
    this._password = password;

    //define property hi geter aur setter hia. define property ka this nhi hota hai isko aap bhjna hota hai.

    // Object.defineProperty(this, 'email',{})
    Object.defineProperty(this, 'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        
        set : function(value){
            this._email = value
        },
    })

    Object.defineProperty(this, 'password',{
        get : function(){
            return this._password.toUpperCase()
        },
        
        set : function(value){
            this._password = value
        },
    })
}

const chai = new User ('chai@chai.com', 'chai');
console.log(chai.email);

console.log(chai.password);
