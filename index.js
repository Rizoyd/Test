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


// const lines = 6;
// let result = '';
// for(let star=1,count = lines;star<=lines;star++,count--){
//     result += ' '.repeat(count-1) 
//     result += '*'.repeat(star*2-1)
//     result += '\n'
// }
// console.log(result)

// function fourthTask() {
//     let i = 2
//     while(i<=16){
//         if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
//         i++
//     }
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [...data].reverse();
// console.log(result)

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')
personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    generes:[],
    privat: false,
}
const a =prompt("Один из последних просмотренных филом?",''),
      b =prompt("На сколько оцените его?",''),
      c =prompt("Один из последних просмотренных филом?",''),
      d =prompt("На сколько оцените его?",'');
personalMovieDB.movies[a]=b
personalMovieDB.movies[c]=d
console.log(personalMovieDB)
