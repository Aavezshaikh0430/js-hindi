//kaise hame ye project ko achive kar sakte.
//sabse pahele hame sare button ko select karna padenga.
//uske baad body ko select karna padenga. obeouisly body ka
//to color change karna hamara goal hai.

//hame sare button ko select karna padenga.
//ham button ko id se bhi select karsakte hai.
//id se hame ek ek button ko hold karna padenge.
//is se bahetar class se selcet karena.
//kyon ke ham loop laga sakenge . to loop lagana kafi asan hoga.


//sare button select karna hai.

const btn =document.querySelectorAll('.button')
//saree button hamare pass agaye.
//console.log(btn)

//ab hame body bhi chahiye.
const body =document.querySelector('body')
//  console.log(body);
//body bhi aagai button bhi aagaye.

//ab ham events dekhte hai. event kya hote hai. brwoser me jaise cursour
//move karte hai. ek event hai. tab ko close karna ye bhi ek event hai.
//kahi click karnege ye bhi ek event hai.
//jab bhi aap kahi event click karte hai. us event ko aap function me
//le sakte hai. aur uske saat kuch activity kar sakte hai.

//hame button me nodelist mili hai na ki htmlcollection
//to ham foreeach method laga sakte hai. nodelist par
//foreach me ham ek callback function laga sakte hai.
//ab is fucntion me kya hoga. for each loop hai to har ek
// button melenga function me.
//


//  btn.forEach(function (button){
//   console.log(button)
//  })

//har ek button ki information milingi hame.
//aapko pura ka pura button mil gaya . aur uskeunder sare ke sare
//attribute bhi mil gaye. innerhtml milgaya hai. nodeType mila hai.
//tag name mila hai. class mil gai id milgai.


//ab ham har ek button par event lagainge.
//kisi bhi jagaha aap event ko lagasakte hai.
//individual btns hai ye loop hai to sab pe lagaenga.
//addEventListner laga sakenge.
//addEventListner ka matlab ab aap ki har baat ye event sunega.
//click lekha uske baad aap ek callback dedo.
//ab event hogaya uspe hamne fucntion bhi likha.

//lekin
//jab bhi ek evnet hota hai. us event ko saat me cari karna hota hai.
//wo jo event object hota hai. usme bahot sari details hoti hai.
//

btn.forEach(function (buttons){
 console.log(buttons)
 buttons.addEventListener('click', function(e){
   console.log(e)
   //mouseEvent {istursted:true}
   //ab ham kisi bhi btn par click kareng tab console me output ayenga 
   //kyon ke ham ne clik event kiya hai. to hame button par clik karna 
   //hoga.

   console.log(e.target)
   //kis target se ye element aya hai.
   //uske under htmlspanElemnt mila hai wapas apko attribut mil gaye hai.
   //abhi aapke pass grey mila hai.

   //agar aap yellow wale par clik karte hai.
   //wapas aapko html span mila hai . aur attribut mile hai.
   //is baar aapko yellow button mila hai.

   //event.target se pata chalta hai ye event aa kaha se raha hai.

   //ab event.target hai usme mai id nikal sakta ho .

   //ap if else lagaye switch case lagai /.

   if(e.target.id === 'grey'){
     // body.style.backgroundColor = 'grey'
     //hardcored value bhi likh sakte hai grey .ya aap ko aur 
     //progreaming practice acchi karni hai to. hardcored ki jagah.
     //e.target.id
     //us id me bhi to grey hi hai.
     body.style.backgroundColor = e.target.id
   }
   if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
   }
   if(e.target.id === 'blue'){
     body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'yellow'){
   body.style.backgroundColor = e.target.id
}
if(e.target.id === 'purple'){
 body.style.backgroundColor = e.target.id
}

if(e.target.id === 'aqua'){
 body.style.backgroundColor = e.target.id
}
if(e.target.id === 'green'){
 body.style.backgroundColor = e.target.id
}
  
 })
})