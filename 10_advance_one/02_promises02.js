//2 type promise

//aap bagair varibale ke bhi promis creat karsakte hai.

//reject par bhi baat karenge chinta mat kariye.

new Promise(function(reslove , reject){

    setTimeout(function(){
        console.log("Async task 2");

        reslove()
        
    },1000)

}).then(function(){
    console.log("Async to resolve");
    
})

//ab hamene kisivaribale me store nhi kiya hai to direct .then se connect karsakte hai.
// 2 part me karne ke bajaye ham ne ek hi part me sara kardiya.
//new promise ham ne creat kara. promise ye bhi hosakta hai newtwork request la raha ho.
//file handling kar raha ho. kuch bhi ho skata hai . hame koi matalb nhi hai.
//jab bhi ye eventulay complite hoga. wo sara kaam hojayega uske baad ye resolve inform karde ga 
//automatically .then ko aap kaam kar longe 

//xmlhttp ke jaisa hard nhi 
//yaha ek promis banao resolve jaise hi resolve hogay mujhe .then wala part mil jayenga 
//bada hi basic apka consumation hai.