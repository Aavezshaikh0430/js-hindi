//ab ham promise thired banate hai.

//ye resolve directly connected hai hamare then ke under.
//har baar thodi setTimout setTimout karonga.console.log karonga hosakta hia network se koi data aya hai. 
//data bhi to mujhe pass karna hoga. wo sikhna hoga kaise karte hai.
//settimeout se network se bahot sara data le ke aaya. 

//ab suppose kare settimeout ke function ne bahot sara kaam kara. kai se network se data leke aaya
//file system se jo data leke aaya. lekin acutaly me  mujhe karna kya hai. karna to ye hai
//eventually jake ye promise mai conssume karonga usme . then lagaonga. 
//ye . then hai yahi par to sara kaam karonga. isime to sari value return hoti hai.
//settimout se .then me value kaise pass karo.  ye pass karne ka kaam resolve ka hai
//resolve lagana zarori bhi to hai.  ab ye resolve me data bhi ham pass kar sakte hai.
//jayada tar data pass hota howa dikhe nga wo hota hai object.
//chahu to array pass karo aapka mann kare function pass kare apka jo mann kare.

//ab baat to thik hai aapne resolve data pass kiya magar mai wo data longa kaise.
//ye intersting baat hai. 
//jaise hi fucntion ko bola .then  
//resolve aur .then ka connection hai.
//yaha par kuch expect karsakte hai bydefault ke kuch data ayenga yaha. 
//ab wo pura object hai. maan lete hai us object ko user 
//to ham simply console.log() kar ke dek sakte hai. kya user me print hoke aati hai value.

//to data to aagaya to ye baat confirm ho gai hai.
//jab bhi istraha ka syntex hai. jaise us ka consumation karte hai. 
//resolve ke under jaise hi koi parameter pass karonge. wo para meter mujhe yaha par miljata hai.
//isme koi bhi issue nhi hai.

//ye hogaya hamara basic ke kaise data consumtion hota hai. value aati hai ye sab



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        
        
        resolve({username: 'chai' , emial : "chaiwith@chaiaurcode.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    

})