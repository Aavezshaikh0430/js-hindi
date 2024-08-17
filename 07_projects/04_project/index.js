/*
ye project 4 jo hai usme code bahot jayada hai. lekin compelex nhi . sirf if and else ham lagayenge.
to kaam ho jayenga. ha document me bahot sari value select karni hogi. 
document me 1 value select karni ho ya bahot sari vahi method lagana hai qurry seclector getelmemntbyid vahi method hote hai. itna jayada complex nhi hai. lengthy hai magar complex nhi.

guess no karna hai.
submit jaise karo ge wo no evaluate hoga.
aur aapko check karna hai ki vo number actually sahi hai ya nhi.

random no bhi genrate karna hoga.
aur privace guess bhi sava karna hoga.
user ne jo bhi privace guess diye hai. wo bhi display karna hoga.
aur guessess remaing ko har ek attempt par lower down karna hoga.

*/
//------------------------------------------------------------------------
/* 
hamare pass kya kya hai.

hamere pass hai ek 1]form 
aur ek hai 2]div class resultParas

form:-
form ke under ek guess field hai. h1
uske baad hai ek input hai jaha se hame ek value nikalna hai.
uske baad input type submit ye actully me button hai.


resultparas:-
resultparas me previous guesses hai.
guesses remaing hai.

id subt : ye hamara click event hoga vaha par hame event ko listn karna hoga.

*/

/*
ab hame function chahiye pahela function

1]fucntion validateguess (guess){
}

is ke under mujhe ek validat guess do mai usko validat karonga.
ye kyon hai. ye isliye hai ke mujhe ye dekhna hai ke usne ek valid number guess kiya hai ya nhi.
//abc diya hot to kya uske baad value 1 se kam to nhi deraha hai vo. ya 100 se jayda to de raha hai.
ya negative value to de raha hai.
//ye sara vaildat karne ka kaam ham validatguess me karnge.

-------------------------------------------------------------------------
*/
/*2]fucntion checkGuess(guess){
}

ab validat to ho gaya hai usse check karne ki kya jarorat hai. validat to hogaya lekin
vaha se aapko validtion mila hai ki vo value uper hai ya niche . hame usse massage print 
nhi karvaya . to ham ek massgae print karvana chahienge ke jo guess value hai vo 
correct hai. ya low hai ya high hai. wo check ka kaam wo yaha hoga.

//kahi value random no ke equal to nhi
agar equal hai to dsiplaymassge ke kaho aap jeet gaye hai.
value low hai to bolo value low hai
high hai to bolo value high hai.

-------------------------------------------------------------------------------------
*/



/*
3]fucntion displayGuess(guess){
}

displayGuess aapki value ko clean karenga. kyn ke next value bhi input karni hai.
aapke jitne bhi guess hai. arryas hai unko bhi update karnga.
aapke remaining ko bhi kam karenga.
-----------------------------------------------------------------------------------
4]function displayMassge(massege){
}
displayMassage me kya hoga aap massge pass karo ya guess pass karo.
ye wala method sidha DOM ke saat intract karnga. display masage kar denge.
bahot easy sa hai. user ki jo input value hai usko vapis se empty kar denge.
kyon ke use next guess bhi to karna hai. hamare innerHTML ko add kardenge.
aur number ko kam kardenge. sara ka sara html hai dom ke saat jitna manupulation hai.
displayMassege ke under kar denge.

user se ham massage lenge aur usse display karvadenge.
-------------------------------------------------------------------------------------

5] fucntion endGame(){
}

end game aap ne game end kiya.

--------------------------------------------
6] fucntion newGame(){
}
new game aap ne phir se game start kiya.
*/

//---------------------------------------------------------------------------------------

//START code.

///////////////////////////////////////////////-----------------------------------

//sabse pahela chanlenge hamara ek random no 1 se 100 tak genrat karne ka

//Math.random() =0.1222
//math.random()*10= 0.2133
//math.random()*10+1 = 1.222  //+1 isliye hamra random no 0 se 99 tak ka rahenge hame 1 to 100 chaiye 
//math.random()*100+1 = 45.23445
//parseInt(math.random()*100+1)= 45


const randomNumber =parseInt(Math.random()*100+1)


//bahot sari value ko lena hai document me.
//sabse pahele leana hai submit button ko.


const submit=document.querySelector('#subt');
//-------------------------------------------------------
//user ka input bhi lena hai kahase lenge guessfeild se lenge.

const userInput = document.querySelector('#guessField');

//magar hame user input ki value leni padenge.
//----------------------------------------------- 

//abham user ke guesses lenge.

const guessSlot =document.querySelector('.guesses');

//---------------------------------------------

//last result userne last jo guesskiya vo.

const remaining =document.querySelector(".lastResult")

//------------------------------------------

//paragraph ko bhi select karenge jo user ko value low hai ya high hai 

const lowOrHi =document.querySelector(".lowOrHi")

//--------------------------------------------------

//result para jo hai start over hold karneng.

const startOver =document.querySelector('.resultParas')

//selector to katam hogye

//--------------------------------------------------------------------

//kuch ham value insert karenge.actulay me ham usko bhi le lenge. ham para ko lenge
//aur kai jaga usse inject karnge.

const p = document.createElement('p')

let prevGuess = []

//prevGuess ek arry hoga. jo bhi user submit karnga value us value ko ham store karenge.
//aur pure ke pure arry ko user ko batayenge . atlist user ko pata to lage vo same number
//dobara guess na kare.

//-------------------------------------

//user kitne attemp mar chuka hai 
//start karenge 1 se ke ye aapka pahela guess hai. jab 10 guess pore hojayenge tab 
//submit guess button ko disable karenge. 11 time user submit nhi kar paye.
let numGuess = 1;

//-----------------------------------

//aur ek variable lenge. 
let playGame = true

//jab bhi aap aise game design karenge . playgame variable hota hi hai. play game allow karta hai 
//game khenle ke liye . jab bhi aapke attempt katam hogaye. ya coin khatm hogaye is condition ko check kare 
//bagair game start na ho isi traha game ka design hota hai.


//ye to ho gaya hamara basic cheze collect karna abhi to ham ne code kiya bhi nhi logic laga bhi nhi.
//abhi to ham ne code ka kuch bhi logic likha hi nhi.
//---------------------------------------------------------


//sabse pahele check kare user game khelne ke liya bhi available hai ya nhi.
//wo kaise check karenge. 
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        const guess =parseInt(userInput.value)
        console.log(guess);
        
        validateGuess (guess)

    })
}

//guess ko age ke fucntion me pass karenge   validateguess (guess)  ----------------------------------------------------------------------------------

//value 1 se 100 ke beach me hai kya nhi


function validateGuess (guess){
    if (isNaN(guess)){
        alert('Please enter only number.')
    }
    else if(guess<1){
        alert('Please enter a larg number')
    }
    else if (guess>100){
        alert('Please enter a low number')
    }

    //agar user 1 se 100 ke beach ka number enter kara to else case me aajaonge.

    //phir ham us number ko arry me push karonge.
    //preious guess me ham use push karnege. guess.push

    else{
        prevGuess.push(guess)

        //ho sakta ho ye guess user ka last attempt ho. ye 10th attempt ho
        //kahi user ka game over to nhi ho gaya.
        //aapko yaad hoga ham ne variable creat kara tha 
        //number of guesses ka
        //iske through ham check karsakte hai. ham number of guess ko increas karnge.

        //agar numGuess 11 hojaye to ham user ko age nhi attempt karne denge.
        //ham use displayGuess me pass karnege.

        //aur ek massge dikhayenge. kyon ke user ka game over hogaya hai.
        //aur game hamara end ho jayenga.

        if(numGuess === 11) {

            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame()
        }

        //else case me ho aap abhi vo number 11 ke equal to nhi hai 11 se chota hai.number.

        //hame user ko displayguess dikhana hai.
        //dekhiye number to displayGuess me ja hi raha hai. magr hame display bhi karana hai.
        //check guess me guess ko pass karo   checkGuess(guess) 

        //checkGuess me ham user ko batayenge number low hai ya high

        else{
            displayGuess(guess)

            checkGuess(guess)

        }

    }
    
}
//ye hogaya hamara vaildate guess.

//-----------------------------------------------------------------------

//ab aate hai ham checkguess ke under

//actually me ham check karenge ke value hamara equal hai ya lower hai ya high hai ye ham check karnge.
//ham massge check karaenge.

//if ke under ham guess check karnege wo random number ke equal hai. to aap jeet gaye.
//us time dispalyMassge ko call karo.
//aur end game kardo



function checkGuess(guess){
    if(guess=== randomNumber){
        displayMessage(`You Guessed it Right.`);
        endGame();


    }

    //agar random number ke equal na ho to chota hoga to bhi ek massge print karana hoga.
    else if(guess < randomNumber){
        displayMessage(`Number is TOOO low.`)

    }

    else if(guess > randomNumber){
        displayMessage(`Number is TOOO high.`)

    }

}

//ab hamre pass baat ati hai. displayGuess ki.
//ab ham displayGuess actualy kaam kya kar raha hai.
//display guess ke under ye jo userIput hai is value update karenge.
//update kis se karenge empty string se . actually value to clean up karna hoga.
//userInput.value= ""

//ab hame ne guessSlot liya tha. ye hamare class guesses hai. guesses aa kaha se rahe hai.
//ye aa rahe hai. preivous guesses se aa rahe hai. preivou guesses me span tag hai us me hame
//innerHtml add karan hai.
//guessSlot liya usme innerHTML liya 
//us innerhtml me ham value add karnege. kaise add karnege += pluse equal
//kya add karenge. ham ek variable add karenge. konsa varaible guess varibale
//jo bhi guess ki valuue hai us ke under vo value update nhi kar raha hai vo value push kar raha hai.

//ab ham number of guesses bhi ++ plus plus karenge. number to badana hai na.

//ye hame ne numGuess ham ne 1 se start kari hai ye badna bhi to chahiyena. ye kab badhenga.
//jab aap ye cleanup karenge tab badnegi . jab value user ne de di hai uska value chala gaya hai.
//ab value ko clean bhi kardo
// aur us value ko show bhi kardo 
//aur us value ko add bhi kardo

//lekin ek kaam aur bhi hai. ye remaining guess hai. iski value ko bhi change kardete hai.
//remaining guess ke under ek span hai span class lastResult ke under ham ne 10 vlue rahkhi hai.
//isko udate karna bhi bahot asan hai.
//reamining.html lo iske under value calculte karte hai.
//isko kaise karte hai. 11 me minus kardo jitene numGuess hoye hai. jo bhi value ayengi
//vo value as it is print ho jayengi.


function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML +=  `${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}


//------------------------------------------------------------------------------------

//ab aate hai naye method par naya method hai displayMessage.
//display massage kya hai.
//ham ne ek value li thi lowOrHigh
//ye jo lowOrHigh hai. ye ek simply paragraph hai jis me massgae print karan hai.
//ye lowOrHigh lo aur ham inner html me value add karna chahete hai.

function displayMessage( message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

//---------------------------------------------------------------

//ab baat aati hai endGame or newGame ki