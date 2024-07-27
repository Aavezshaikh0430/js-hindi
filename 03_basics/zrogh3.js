const arry = [1, 2, 3, 2, 3, 4, 5,64546];
const reversAarry = arry.reverse();
console.log(reversAarry);

const largest = Math.max(...arry);
console.log(largest);

const arry1 = [1, 2, 3, 2, 3, 4, 5,64546];
const uniquearry = [...new Set (arry1)]
console.log(uniquearry);

const mergarry = [...arry, ...arry1];
console.log(mergarry);