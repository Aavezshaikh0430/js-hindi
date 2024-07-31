const book = [
    {
        title : 'Book One',
        gener : 'Fiction',
        publish : 1981,
        edition : 2004
    },

    {
        title : 'Book Two ',
        gener : 'Non-Fiction',
        publish : 1992,
        edition : 2008
    },

    {
        title : 'Book Three',
        gener : 'History',
        publish : 1999,
        edition : 2007
    },

    {
        title : 'Book Four',
        gener : 'Non-Fiction',
        publish : 1989,
        edition : 2010
    },

    {
        title : 'Book Five',
        gener : 'Science',
        publish : 2009,
        edition : 2014
    },

    {
        title : 'Book Six',
        gener : 'Fiction',
        publish : 1987,
        edition : 2010
    },

    {
        title : 'Book Seven',
        gener : 'History',
        publish : 1986,
        edition : 1996
    },

    {
        title : 'Book Eight',
        gener : 'Science',
        publish : 2011,
        edition : 2016
    },
]

//ab user ek filter lagaraha hai usse jo jo chahiye wo wo lakar dijiye
//is object ka



// const userBooks = book.filter( (bk)=> bk.gener === "History" )

let userBooks = book.filter( (bk)=> bk.gener === "History" )

// console.log(userBooks);

//userBook me value konsi gai. automatically jis book ka gener history hai uski value userbook me 
//chali gai. deka database ke saat 
//yahi real world hai. kai log is project bolte hai.
//par aap tayyari kar rahe hai. project ki.

//for each method.

// books2 =[];

// book.forEach( (bk)=>{
//     if (bk.gener === "History"){
//         books2.push (bk)
//     }
// })
// console.log(books2);

//user bola wo sari book do jo publish hoi hai 2000 ke baad.

// const userBooks =book.filter( (bk)=>{bk.publish >= 2000}) //erorr kyon ke const usrBooks ye variable 
//override hogaya ham 2 baar same variable nhi bana sakte.

// userBooks =book.filter( (bk)=>{bk.publish >= 2000}) //output [] empty arry aagaya
//kyon ke yaha par ham ne ek scope open kiya hai {}. ya to scope hatao ya return keyword use karo
//kyon ke jab ham {} to return keyword likhna zarrori hai.

// userBooks =book.filter( (bk)=>{ 
//     return bk.publish >= 1995
// })

//ab hame 1995 ke baad ki book chaihey aur uska gener sirf history chahiye

//jab 2 condition lagte hai . to && amppersent ka use karte hai.

userBooks =book.filter( (bk)=>{ 
    return bk.publish >= 1995 && bk.gener === "History"
})

console.log(userBooks);

//map me har value return hogi



//filter kya hai 
//jo bhi true hoga vo exicute hoga.
//filter me jo vlaue true hogi wahi value return hogi.