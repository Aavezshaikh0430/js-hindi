//investigation of variable
/*variable assing karne se memory me space assing hogai hai usko hum change bhi kar sakte hai ye hai vairable
memory space reserve hogai joki hamari value put karsakete hai aur usko change bhi kiya jasakta*/

const accountId = 1232434;//const ko change nhi kiya jata
//accountId = 2; not allowed

let accountEmail = "aavez@google.com";
/*let accountEmail = "redchef@google.com" not allowed ek bar let se Email banaye to double nhi bana sakte
sirf accountEmail ="redchef@google.com"*change karsakte hai jaise */

var accountPassword = "1234345";

accountCity = "Jaipur";
//javaScript itni sefe language hai ki apko kai bar bina [let var const] lekhe hoeye variable creat karsakte hai magar ye acchi habit nhi hai.


accountEmail = "redchef@google.com";//ye method sahi hai.
accountPassword = "sadf272lkj"
accountCity = "Bengluru"
accountCity= "chennai"
let accountState;/*javaScript me varible declare karke chode dete hai value kuch nhi lagate hai to javascript usse undefined manti hai*/


console.table([accountId,accountPassword,accountEmail,accountCity,accountState]);




/*prefer not to use var 
because of issue in block scope and functional scope. 
please please kabhi bhi var se variable mat likhiye*/


// console.log(accountCity);console.log mile to use screen par output karo
/*vaise variable mile to use memroy me locate kardo variable ki value memory me locate hoti hai
jab chahe use hum excute kar sakte hai . value ko memory me store karte hai
var let const milye to usse memory ke under assinge kardo. */