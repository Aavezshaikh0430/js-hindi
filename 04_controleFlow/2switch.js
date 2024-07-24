//multiple value ko check karne ke liye ham switch case ka use karte hai.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//shift + altkey + downarrow = douplicate.

const month = 8;

switch (month) {

    case 1:
    console.log("january");
    break;

    case 2:
    console.log("febuary");
    break;

    case 3: 
    console.log("march");
    break;

    case 4:
    console.log("april");
    break;

    default:
        console.log("not find");
        break;
}

//break 
//jab hamara code match hota hai brek ye keyword se nich ka code ruk jata ha.
//agar ham break ko hata diye to nich ka case exicut hota hai
//aur use case me break ke word se wo case exicute hoga aur break se wo code break
//ho jayenga.

const daysNumber =  "Monday";
//Monday : case sensitive hota hai switch me agar variable casesensitive hota hai 
//case me ham monday nhi likh sakte Monday aisa likhna hoga.

switch (daysNumber) {
    case "Monday":
        console.log("monday");
        break;

        case 2:
        console.log("thuesday");
        break;
        
        case 3:
        console.log("wednesday");
        break;

        case 4:
        console.log("thirsday");
        break;

        case 5:
        console.log("friday");
        break;

        case 6:
        console.log("saturday");
        break;

        case 7:
        console.log("sunday");
        break;

    default:
        console.log("only seven day in week.")
        break;
}