

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

//JSON

// {
//     "coursename" : "js in hidi",
//     "price" : "999",
//     "courseInstructor" : "Aavez"
// }

//json javascript object notetion.
//json object hi hote hai .magar is object ka koi naam nhi hota hai.
//json ki key bhi " " string me hoti hai. aur value bhi strig me hoti hai.


//random Api

const randomApi= {
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Joan",
          "last": "Flores"
        },
        "location": {
          "street": {
            "number": 3986,
            "name": "Calle de Alberto Aguilera"
          },
          "city": "Córdoba",
          "state": "Cataluña",
          "country": "Spain",
          "postcode": 91522,
          "coordinates": {
            "latitude": "-33.0497",
            "longitude": "-6.6966"
          },
          "timezone": {
            "offset": "+4:00",
            "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
          }
        },
        "email": "joan.flores@example.com",
        "login": {
          "uuid": "8496436e-e245-4030-8bf3-1d648c432637",
          "username": "yellowduck158",
          "password": "redone",
          "salt": "6jruapar",
          "md5": "b9505f5c79fedbe9f437082a105fd117",
          "sha1": "58ab64f0abd90bee8e8f6c7fc3d5607ada3b03c0",
          "sha256": "7af5d9e3aac35e68a2b60367a6a57ccbe0691ced4c55d31cc6e8a3d50363adf8"
        },
        "dob": {
          "date": "1992-10-20T21:22:36.183Z",
          "age": 31
        },
        "registered": {
          "date": "2010-06-11T23:36:23.610Z",
          "age": 14
        },
        "phone": "957-221-424",
        "cell": "658-094-102",
        "id": {
          "name": "DNI",
          "value": "10604752-R"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/26.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
        },
        "nat": "ES"
      }
    ],
    "info": {
      "seed": "07fa0b3663522c8a",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
  console.log(randomApi.info.seed);

 