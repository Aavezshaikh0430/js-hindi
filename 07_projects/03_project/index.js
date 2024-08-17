const clock= document.getElementById('clock')
console.log(clock);

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 500)