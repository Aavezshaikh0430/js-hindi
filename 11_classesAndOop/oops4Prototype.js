/*
mere pass ek goal hai string mai ek 
let myName = 'hitesh'
is hitesh ke under kuch consolelog kar sakta hu kuch property bydefault milti hai . 
consloe.log(myName.length) proerty mujhe milti hai. length kitni aarahi hai mere pass.

accha to use case le raha hu apko future me samaj me aye ke libray kaise banti hai. framwork bante hai.
kaise aur fucnionlity add hoti hai. lowdash ye kafi popular library hai wo kaise bantai hai.

 */
// let myName = 'hitesh'
let myName = 'hitesh     '
console.log(myName.trim().length);

/*
mujhe pata hai 6 letter word hai.lekin ham 'hitesh     ' five space denge to kya hoga. ab meri length hogi 11 6letter ka mera naam add + 5 spance total = 11 aya 

magar ye to galat hai. to mai chahta hu .length ki traha ek property ho jo ture length [trim vrim ] nhi. mujhe pata hai. aap trim se kaam kar sakte hu. obesuly baat hai aap low IQ wali baat hogai . nhi nhi mai trim se karonga . mai aapko kuch samjhna chaheta hu. mujhe paat hai aap low IQ nhi hai .

true length mai property chaheta hu . ye property mujhe pora console log de pora word likh ke de ke 
true length of string is . iske baad proper value de aur last me se jo value hai extra spaces jo hai. wo mujhe nikal ke de ab mai chaheta hu ye trueLength se hi ho. mujh ko 10 fucntion call karne ke hi nhi hai.
kaise kronga ga . to aisa nhi karsakte abhi is me wo cabablity hai hi nhi. but mera user ye chah raha hai. mujhe aisa hi do .
tureLength to aisa kuch hai hi nhi undefined agaya.
kuch log bolenge sir
myname se saat lagado pahele trim fucntion aur uske baad laga do .length ye lagane se kaam hoga to ha bilkul hoga . but ye low IQ wali baat hojaienge mai samjana chaheta hu kye fucntionality bydefualt becking kaise karsakte hu har string ke saat . 

console.log(myName.trim().length)

agar myName ke alawa dusra ek varibale hota chai to wapas se itna bada likhte trim().length
mujhe to chahiye jaha par bhi string hu uske saat bydefualt ye prorerty truelength
kya ham karsakte hai. is traha se  bada hi intresting hai karsakte hai ya nhi 
wo dekne ke liye hame bahot sari kahani padni hogi.
aapko samaj aagaya challenge kya hai hamare pass.

hame ek method banan hai property nhi method banana hai property mehtod diffrence samjte hai na.
method () .  property .length

ab chalte hai hamari bahot lambi kahani par.
*/