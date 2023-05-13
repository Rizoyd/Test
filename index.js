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
tip: for(let answers=0;answers<2;answers++){
    let a =prompt("Один из последних просмотренных филом?",''),
        b =prompt("На сколько оцените его?",'');
        if(a != null && b != null && a != '' && b != '' && a.length<50 && b.length<50){
            personalMovieDB.movies[a]=b
        }else{
            answers -=1
            console.log('Sorry bro but you are so bitch')
        } 
    }
        if(personalMovieDB.count<10){
            console.log("Просмотрено довольно мало фильмов")
        }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
            console.log("Вы классический зритель")
        }else if(personalMovieDB.count>=30){
            console.log('Ля киноман епт')
        }else {
            console.log("Error")
        }

console.log(personalMovieDB)


