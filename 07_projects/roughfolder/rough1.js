const color = document.querySelectorAll('.color')
console.log(color);

const body =document.querySelector('body')
const canvas =document.querySelector('.canvas')

color.forEach(function(color){

    color.addEventListener( "click", function(e){

        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
       if(e.target.id === 'green'){
        body.style.backgroundColor= 'green'
           canvas.style.backgroundColor = 'bisque'
       }

       if(e.target.id === 'darkorange'){
        body.style.backgroundColor= 'darkorange'
           canvas.style.backgroundColor = 'bisque'
       }

       if(e.target.id === 'red'){
        body.style.backgroundColor= 'red'
        canvas.style.backgroundColor = 'bisque'

       }

       if(e.target.id === 'brown'){
        body.style.backgroundColor= 'brown'
        canvas.style.backgroundColor = 'bisque'
        return;
       }

       if(e.target.id === 'purple'){
        body.style.backgroundColor= 'purple'
           canvas.style.backgroundColor = 'bisque'

       }
    })
})
