// for (let p = 0; p < 1; p++) {
//   let stars = "";
//   for (let kek = 0; kek < 10; kek++) {
//     stars += "*";
//     console.log(stars);
//   }
// }
// let result = "";
// const length = 9;
// for (let x = 1; x < length; x++) {
//   for (let stars = 0; stars < x; stars++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);


const lines = 25;
let result = '';
for(let star=1,count = lines;star<=lines;star++,count--){
    result += ' '.repeat(count) 
    result += '* '.repeat(star)
    result += '\n'
}
console.log(result)