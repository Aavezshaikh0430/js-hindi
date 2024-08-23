const randomNumber = (parseInt(Math.random()*100+1))
console.log(randomNumber);

const submit = document.querySelector('#subt')
//buton hai subt

const userInput = document.querySelector('#guessField')
// input value hai.

//--------------------------------
//prives guesses
const guessSlot = document.querySelector('.guesses')

//last result:= kitne result bache hai.

const reamining=document.querySelector('.lastResult');

//low or high ka massage

const lowOrHi =document.querySelector('.lowOrHi');
//massage hame dom ke through print karana hai.

//ek or cheez lenge.
const startOver= document.querySelector('.resultParas');


//ek para creat karnege.
const p = document.createElement('p')

//empty arry me ham user ke guess ko add karenge .jo bhi user submit karenga use add karenge. user ko atlist dekhenga wo preivous guess kya kiya tha.
//

let prevGues = []


//user kitne attempt mar chuka hai.
//ham user ko 10 attempt ke baad hame block karenge
//submit ko disable karenge.
let numGuess = 1;


let playGame = true;

//--------------------------------------------------


//1] validate guess guess no hi hai na abcd to nhi number 1 se kam to nhi de raha hai. ya 100 se zada to de raha hai.

// function validateGuess(){
// //
// }
//---------------------------------

//2]check guess me ham checkkarenge value exactly random no se badi hai ya choti hai ye 
//aap ne guess correct ki hai.

// function checkGuess(){
// //
// }

//----------------------

//3]displayGuess
//value ko clean karenga 
//dossri vlue bhi add karna hai.

//arry ko bhi add karnga.

//remaing guess ko update karnga.

// function displayGuess(){
//     //
// }


//----------------------------------

//4]display massge ek massage do. ye sidha dom ko manuplute karenga.
//lowOrHi hai me ek massage ko as it is displaymessage me bheje ge.

// function displayMessage(){
//     //
// }

//-----------------------------

//game ko end bhi karenge

// function endGame(){

// }

//-------------------------

//game ko start bhi karnge.

// function newGame(){

// }

//------------------------------------------------------------



//game khelene ke liye avaiable hai ya nhi.

if(playGame){
        submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        
        validateGuess(guess);

    })
}

function validateGuess(guess){

    if(isNaN(guess)){
        document.querySelector("#massege").innerHTML= 'Enter a valid number not character.'
    }
    if(guess<1){
        document.querySelector("#massege").innerHTML= 'number is too low.'
    }
    if(guess>100){
        document.querySelector("#massege").innerHTML= 'number is too High.'
    }
    // ab no na ki [asdkfjl,(101, 110) -1 -2 ] ab no 1 se 100 ke bich me definatly hi hai.
    //ab kya karna ab else case me number ko privous guess me push karte hai.

    else{
        prevGues.push(guess)
        // console.log(guess);

        //agar game over hogaya ho to.

        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over . Random number was ${randomNumber}`)
            endGame();

        }
        

        //ab number 11 se chota hai. bada to ham hone hi nhi derahe hai.
        else{
            

            displayGuess(guess)
            //displayGuess me method likhni 
           
            checkGuess(guess)
            //checkGuess me guess ko pass kare .ab checkguess method likhe ge.
            //checkguess value high hai ya low hai.

            
             
        }

        
    }
}

function checkGuess(guess){
    //random value equal hai ya lower hai ya greater hai checkguess me ham declare karenge.

    //random number ke equal raha to
    if(guess === randomNumber){
        displayMessage(`You gussed is right`);
        endGame();

    }

    //reandom no se chota raha to
    else if (guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    }
//random no se bada raha to
    else if (guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
}


function displayGuess(guess){
    //displayGuess ka kaam ye jo userinput liya hai. iski value update karenge.
    //ek baar apne value enter ki to usse khali bhi karna hai.
    //cleanup

    //jab value aagai uske baad input ko ko khali karna hoga

    userInput.value="";

    //jab value aagai to use privous guess ka class guesses . aur guesses ko ham ne guessslot me add kiya. 
    //value aagai to hame guessslot me value dikhana hoga.
    //guesses me value add karana chahate hai.
    guessSlot.innerHTML += `${guess} ,`
    //value ko update nhi kar raha hai. value ko add kar raha hai.

    //value aagi to numguess ko badana bhi hoga.
    numGuess ++;

    /*us value ko clean bhi karo. value ko show bhi karo . aur value ko add bhi karo  */

    reamining.innerHTML = `${11 - numGuess}`
}



function displayMessage(guess){
    lowOrHi.innerHTML = `<h2>${guess}</h2>`
}


function endGame(){
//
}

function newGame(){
//
}
