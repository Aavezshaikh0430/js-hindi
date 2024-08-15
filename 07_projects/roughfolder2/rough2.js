const form = document.querySelector('form');
console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height =parseInt(document.querySelector('#height').value);
    console.log(height);


    const weight =parseInt(document.querySelector('#weight').value);
    console.log(weight);

    const results =document.querySelector('#results');

    const results1 =document.querySelector('#results1');
    
    console.log(results.innerHTML);

 
   
 if (height === "" || height < 0 || isNaN(height)){
  results.innerHTML = `please give a vaild height. ${height}`
 }
    
    
 else if (weight === "" || weight < 0 || isNaN(weight)){
  results.innerHTML = `please give a vaild weight. ${weight}`
 }

 else{
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  console.log(bmi);
  

  results.innerHTML = `<span>${bmi}</span>`;

  if(bmi <= 18.6){
    console.log(results.innerHTML =' Under weight ' +bmi);
    
   }
  
   else if(bmi >= 18.6 && bmi <= 24.9){
    console.log(results.innerHTML = 'Normal weight ' +bmi);
    
   }
  
   else if(bmi >= 24.9){
    console.log(results.innerHTML = 'Over weight ' +bmi);
    
   }


 }

   
})