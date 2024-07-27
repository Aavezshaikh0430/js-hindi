//for each bhi ek loop ka hi parameter hai. defualt hi inject kiya howa hai.
//saab ko pata hai. jab array ayenge to loop to lagana hi hoga. 
//array ki value to chahiye hi hongi na.
//to sabse jyada isko use karte hai for each method.
//for each higher order function hai.

// const coding = [ "js", "ruby", "java", "python", "cpp"]

//kya kariye ye coding ko lijiye . codeing me jaise dot lagaye nge apke sare method wahi par ajayenge
//saree method aapko miljayenge.
//direct axis milta hai

//forEach (callbackfn): ka matlab mujhe ek function de do
//ham jo ye for each for in loop me kabhi arry.length nhi bataye
//ye itne smart hai ke wo automatic arry ke length tak jarahe hote hai.

//isitraha ye function hot hai inhe apne aap idea hota hai. ke aap kis vlue me vo kitna bada hai
//kya uski length hai 0 se start karna hai. ye usko pata hai. 
//aap usko function dena hai wo apne aap kaam karenga.


const coding = [ "js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name (){} )

//pahele to callback function ka naam nhi hota hai.

//kyon ke ye function arry ke under chal raha hai.
//ye item hai ye apne aap parameter legi. aap parameter ko value boliye val boliye itm boliye
//aap ki marzi aap jo chahe wo boliye.

coding.forEach ( function (val) {
    // console.log(val)
})

//ham arrow function bhi use karsakte hai.

// coding.forEach(greet =()=>{})

//naam hi to nhi likhna hai sirf.

coding.forEach( (val) => {
    // console.log(val);
} )

//intersting
//suppose kariye aap ne ek function ek item leta hai aur  use item ko print krta hai.

//kya mai is function ko bhi [arry variable name coding] me pass out karsakte hai kya
//bilkul karsakte hai.

function printme (item){
    // console.log(item);
}

coding.forEach( printme)

//ek baat yaha printme ko refrence dena hai print nhi karna hota hai. printme () nhi likhna
//coding.foreach (printme()) aise nhi likhna hai.
//ham yaha refrence de rahe hai. print nhi karna nhi to error ayenga.

//aisa nhi ke forEach sirf ek parameter letha hai. //for each item number ke sath
//indexNumber , aur total array bhi parameter letha hai. //teen parameter letha hai.

//forEach ke pass ek hi parameter ka axis hota hai aisa nhi hai. 
//dusra parameter hata hai index parameter
//aur ek pure array ki list bhi aati hai.

coding .forEach(  (item , indexNumber , arr)=>{
    // console.log(item, indexNumber, arr);

})



//hamare pass ek arry hota hai.
//us me kai sare object hote hai.
//   [{},{},{}] //ye common senario forEach me kafi baar use hota hai.

//
//array of Object ko kaise axis karne for each loop me 

//ham ek array lete hai. myCoding be ke.

//basic syntex of arry Of object.
// const myCoding = [
//     {},
//     {},
//     {},
// ]

const mycoding =[
    {
        languageName : "Javascript",
        languageFile : "Js"
    },

    {
        languageName : "Java",
        languageFile : "java"
    },

    {
        languageName : "Rubby",
        languageFile : "rbb"
    },

    {
        languageName : "c++",
        languageFile : "cpp"
    },

    {
        languageName : "python",
        languageFile : "python"
    }
]

//hame array of objet par itration sikhna hi hoga ye bahot common opration hai.
//jo dataBase se value ati hai wo array ki format me hi aati hai. aur 
//har ek value ek object hi hota hai.

//agar aapko forEach loop pata hai to aap bahot asani se loop lagasakte hai.

//mai ne yaha mycoding likha aur dot foreach kiya phir call back function aaya
//fo arrow function laga ka  call back kiya.
//mujhe pata hai. ke mujhe har ek value ka axis hota hai.
//ab me us item bolu, val bolu jo man chahe wo bolu 
//item ke under value kaise axis karte .
//item ka axis to hai. 
//ab ye item kya hai. item is object ka axis hai.

//yaha par hamare pass us object ka axis hai.
//to ham item . dot karte hai to hame object ki property ayengi to hame lagnguge name
//axis karna hai. to
//item.languageName

//kitni aasani se aap ne array ke under object jo apne aap me complex chez hai.
//aap ne 2 mint me uska axis le liya. kyon ke aapke foundation strong hai.

//aap ne array ke under objcet ke under ek proprty nikal de.
//apne object me 2 value hi hai. 
//next time 200 value kyon na ho easly se ham nikal sakte hai.
//ye aapke data base me bahot kaam me aane wala hai.

mycoding.forEach((item)=>{
    
     console.log(item.languageName);
 })


