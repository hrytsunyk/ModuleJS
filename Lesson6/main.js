// Знайти та вивести довижину настипних стрінгових значень
//
// let str =  'hello world, lorem ipsum, javascript is cool';
//
// console.log(str.length);
//
// - Перевести до великого регістру наступні стрінгові значення
//
// let str =  'hello world, lorem ipsum, javascript is cool';
//
// console.log(str.toUpperCase());
//
//
// - Перевести до нижнього регістру настипні стрінгові значення
//
// let str = 'HELLO WORLD, LOREM IPSUM, JAVASCRIPT IS COOL';
// console.log(str.toLowerCase());
//
//
// - Є "брудна" стрінга . Почистити її від зайвих пробілів.
//
//
// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim);
//
//
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
// let str = 'Ревуть воли як ясла повні';
//
// function stringToarray(str) {
//     let newArr = [];
//     newArr = str.split(' ')
//     return newArr;
// };
// let result = stringToarray(str);
// console.log(result);
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let arrNumb = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let map = arrNumb.map(value => value + '')
// console.log(map)
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// let nums = [11, 21, 3];
//
//
// function sortNums(arr, direction) {
//     let sortedNums = [];
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//         sortedNums.push(arr);
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//         sortedNums.push(arr);
//     }
//     return sortedNums;
// };
//
// let result1 = sortNums(nums, 'descending');
// console.log(result1)
//
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// -- відсортувати його за спаданням за monthDuration
// let sortDesc= coursesAndDurationArray.sort((a,b) => {
//      return (b.monthDuration - a.monthDuration)
// });
// console.log(sortDesc);
//
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter((a) => {
//     return (a.monthDuration > 5);
// });
//
// console.log(filter);
//
//
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
// let value = ['6','7','8','9','10', 'ace', 'jack', 'queen', 'king'];
// let color = ['red', 'black'];

// let cards = [
//     {cardSuite: 'spade', color: 'black'},
//     {cardSuite: 'diamond', color: 'red'},
//     {cardSuite: 'heart', color: 'red'},
//     {cardSuite: 'clubs', color: 'black'}
// ];
//
// let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king']
//
// let deck = [];
//
// for (const card of cards) {
//     for (const priority of values) {
//         let sorted = {cardSuite: card.cardSuite, color: card.color, value: priority}
//         deck.push(sorted)
//     }
//
// }
//
// console.log(deck)




// let filtered = [];
// //
// let filter1 = deck.filter((value) => value.cardSuite === 'spade' && value.value === 'ace');
// filtered.push(filter1);
//
// let filter2 = deck.filter((value) => value.value === 6);
// filtered.push(filter2)
//
// let filter3 = deck.filter((value) => value.color === 'red');
// filtered.push(filter3);
//
// let filter4 = deck.filter((value) => value.cardSuite === 'diamond')
// filtered.push(filter4)
//
// let filter5 = deck.filter((value => (value.cardSuite === 'clubs' && value.value >= 9) ||
//     (value.cardSuite === 'clubs' && typeof value.value === 'string')))
// filtered.push(filter5)
//
// console.log(filtered)
//
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//
// let reduce = deck.reduce((accum, value) => {
//     if (value.cardSuite === 'spade') {
//         accum.spades.push(value)
//     } else if (value.cardSuite === 'diamond') {
//         accum.diamonds.push(value)
//     } else if (value.cardSuite === 'heart') {
//         accum.hearts.push(value)
//     } else if (value.cardSuite === 'clubs') {
//         accum.clubs.push(value)
//     }
//     return accum;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
//
//
// console.log(reduce);