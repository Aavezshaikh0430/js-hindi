/*
sabse se pahele hame form ko select karna hoga.
 kyon ke us form me hi submit button hai..
 jaise ham bmi me jayenge usme sumbit button aapko milenga. 
 form me jo sabmit button hai wo hi calculate button hai.
 */

const form = document.querySelector("form");

//const height =parseInt(document.querySelector('#height').value )
//ye use case give you empty value

//ye case aapko empty value denga.

//form to hamre pass aagaya.
//jab bhi form submit hota hai ya to post type se submit hota hai. ya get type se submit hota hai. [post, get]
//jab bhi form submit hota hai. uski value url ya server ke pass chali jatai hai. aur usko hame rukna hoga. jo bhi defualut action hai use rukh lo. wo rokene ke liye event ke uper ek method milta hai.

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //preventDefault ka matlab jo bhi aapka default action hai use pahele ruklo. form ko submit mat kardo.

  //action to rook liye ab hame value chahiye.

  //ek hame chaiheye height aur ek chahiye weight.

  //kuch log addeventistener ke uper hi opration karte hai.
  //magar ye galta hai. dono me diffrence hai.

  // document.querySelector('#height').value
  //jo value milti hai wo string me milti hai. usko warp kariye parnInt me

  // parseInt(document.querySelector('#height').value )

  //ab jo value string me mili hai. use ham ne integer me pars ho gai hai.

  // hold karenge height variable me

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  

  //agar ye value ham ne function ke bahar likh diye . to kya hoga jaise page load hoga aapki script run hogai. jaise page load hoga empty value is height ke under store ho jaingi.

  //height aur weight jo liye hai. usse hamara code phat sakta hai.
  //to ham kuch chex laga sakte hai.

  //isNaN(height)

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a vaild height. ${height}`;
  }
   else if (weight === "" || weight < 0 || isNaN(weight))
     {
    results.innerHTML = `please give a vaild weight. ${weight}`;
  } 
  else
   {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    results.innerHTML = `<span>${bmi} <span/>`;

    if (bmi <= 18.6) {
      console.log((results.innerHTML = bmi + " your weight is under Weight"));
    } else if (bmi <= 24.9 && bmi >= 18.6) {
      console.log((results.innerHTML = bmi + " your are Normal "));
    }
    else if (bmi > 24.9) {
      console.log((results.innerHTML = bmi + " Oops you are fatty !!!"));
    }
  }
});
