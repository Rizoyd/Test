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



// function getTimeFromMinutes(time) {
//     let minutes = ''
//     let hourses = ''
//     if(!Number.isInteger(time)||time<0){
//         return 'Ошибка, проверьте данные'
//     }else if(time<60){
//         hourses += Math.floor(time/60)
//         minutes += time%60
//         return `Это ${hourses} часов и ${minutes} минут`
//     }else if(time===60){
//         hourses += Math.floor(time/60)
//         minutes += time%60
//         return `Это ${hourses} час и ${minutes} минут`
//     }else{
//         hourses += Math.floor(time/60)
//         minutes += time%60
//         return `Это ${hourses} часа и ${minutes} минут`
//     }

// }
// console.log(getTimeFromMinutes(160))













// let numberOfFilms 
// function start(){
//     while(numberOfFilms===null||numberOfFilms===undefined){
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','')
//     }
// }
// start()



// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     generes:[],
//     privat: false,
// }



// function rememberMyFilms(){
//     for(let answers=0;answers<2;answers++){
//         let a =prompt("Один из последних просмотренных филом?",''),
//         b =prompt("На сколько оцените его?",'');
//         if(a != null && b != null && a != '' && b != '' && a.length<50 && b.length<50){
//             personalMovieDB.movies[a]=b
//         }else{
//             answers -=1
//             console.log('Sorry bro but you are so bitch')
//         } 
//     }
// }
// rememberMyFilms()



// function detectPersonalLevel(){
//     if(personalMovieDB.count<10){
//         console.log("Просмотрено довольно мало фильмов")
//     }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
//         console.log("Вы классический зритель")
//     }else if(personalMovieDB.count>=30){
//         console.log('Ля киноман епт')
//     }else {
//         console.log("Error")
//     }
// }
// detectPersonalLevel()



// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB)
//     }
// }
// showMyDB(personalMovieDB.privat)



// function writeYourGenres(){
//     for(let z = 1;z<=3;z++){
//         personalMovieDB.generes[z-1] = prompt(`Ваш любимый жанр под номером ${z}`)
//     }
// }
// writeYourGenres()

















// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showProgrammingLangs(plan) {

// }

// console.log(showProgrammingLangs(personalPlanPeter))






//СРАВНИТЬ С КОДОМ ИВАНА

// const family = ['Peter', 'Ann', 'Alex', 'Linda']; 

// function showFamily(arr) {
//     let all = []
//     if(arr.length===0){
//         return ('Семья пуста')
//     }else{
//         all.push('Семья состоит из:')
//     }
//     for(let i = 0; i<family.length;i++){
//         if(i!==undefined){
//             all.push(arr[i])
//         }else{
//             all.push('')
//         }
//     }
//     return all.join(' ')
// }
// console.log(showFamily(family))




































// const personalMovieDB = {
//     count: 0,
//     movies:{},
//     actors:{},
//     generes:[],
//     privat: true,
//     start:function(){
//         this.count = +prompt('Сколько фильмов вы уже посмотрели?','')
//         while(this.count===undefined||this.count===NaN){
//             this.count = +prompt('Сколько фильмов вы уже посмотрели?','')
//         }
//     },
//     rememberMyFilms:function(){
//         for(let answers=0;answers<2;answers++){
//             let a =prompt("Один из последних просмотренных филом?",''),
//             b =prompt("На сколько оцените его?",'');
//             if(a != null && b != null && a != '' && b != '' && a.length<50 && b.length<50){
//                 personalMovieDB.movies[a]=b
//             }else{
//                 answers -=1
//                 console.log('Sorry bro but you are so bitch')
//             } 
//         }
//     },
//     detectPersonalLevel:function(){
//         if(personalMovieDB.count<10){
//             console.log("Просмотрено довольно мало фильмов")
//         }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
//             console.log("Вы классический зритель")
//         }else if(personalMovieDB.count>=30){
//             console.log('Ля киноман епт')
//         }else {
//             console.log("Error")
//         }
//     },
//     showMyDB:function(hidden){
//         if(!hidden){
//             console.log(personalMovieDB)
//         }
//     },
//     writeYourGenres:function(){
        
//         }
//     },
//     toggleVisibleMyDB:function(){
//         if(personalMovieDB.privat === true){
//             personalMovieDB.privat = false
//         }else if(personalMovieDB.privat===false){
//             personalMovieDB.privat = true
//         }
//     },
// }
// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.writeYourGenres()
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat)
// personalMovieDB.showMyDB(personalMovieDB.privat)














// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'vitya'];

// function sortStudentsByGroups(arr) {
//     const sortedArr = arr.sort()
//     const groupArr = [[],[],[]] 
//     const clas = sortedArr.slice(9, sortedArr.length)
//     groupArr[0] = sortedArr.slice(0,3)
//     groupArr[1] = sortedArr.slice(3,6)
//     groupArr[2] = sortedArr.slice(6,9)
//     return [...groupArr, `Оставшиеся студенты: ${clas.length ? clas.join(', '): '-'}`]
// }

// console.log(sortStudentsByGroups(students))
















