

/*object Desturture in js */

const course = {
    coursename : "js in hidi",
    price : "999",
    courseInstructor: "Aavez"
}

/*hame agar price ko print karana ho to ham console.log(course.price) ye syntex likhna 
pade ga magar ham jab price ko desturture karenge to sirf console.log(price)
se axis kar sakte hai. */

//normal method
console.log(course.price) ;

//or destructure method

const {price} = course;
console.log(price);

//courseInstructor name bade ko ham chota bhi karsakte hai.
const {courseInstructor: instructor} = course
console.log(instructor);