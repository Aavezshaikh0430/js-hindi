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
    console.log(item, indexNumber, arr);

})