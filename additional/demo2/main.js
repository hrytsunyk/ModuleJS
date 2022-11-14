// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [[1, 4, 5, 6, 77], ['DFSDDF', 'DFSDDF', 'DFSDDF', 'DFSDDF', 'DFSDDF'], ['DFSDDF', 24, true, 'DFSDDF', false]];
//
//
// console.log(arr)
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = [];
//
// arr [0] = 'value 1';
// arr [1] = 'value 2';
// arr [2] = 'value 3';
// arr [3] = 'value 4';
// arr [4] = 'value 5';
//
// console.log(arr)
//

// - є масив
//
// let arr =  [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
// while (i < arr.length) {
//     if (i % 2) {
//     console.log(arr [i]);}
//     i++;
// }


// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (arrElement % 2 ===0) {
//     console.log(arrElement)}
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// let arr =  [2,17,13,6,22,31,45,66,100,-18];
// //
// //
// for (let i = 0; i < arr.length; i++) {
//     if (arr [i] % 3===0) {
//         arr[i] = 'okten';
//     }
// };
// console.log(arr)
// 8. вивести масив в зворотньому порядку.
// let arr =  [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr =  [2,17,13,6,22,31,45,66,100,-18,4534];
//
// for (const number of arr) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr =['hello okten','fdhgsf','sdhdh','sdhdfh','sdhdhadrhaen','retywr']
// for (const string of arr) {
//     console.log(string),
// };
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr =['hello okten','fdhgsf','sdhdh','sdhdfh','sdhdhadrhaen','retywr']
// for (const string of arr) {
//     console.log(string),
// };


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['hello okten', true, 'sdhdh', 'sdhdfh', 'sdhdhadrhaen', 'retywr', false, 1, 34, 54, 64, 34, 244]
//
// for (const arrElement of arr) {
//     if (typeof arrElement === 'boolean') {
//         console.log(arrElement);
//     }
// };
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = ['hello okten', true, 'sdhdh', 'sdhdfh', 'sdhdhadrhaen', 'retywr', false, 1, 34, 54, 64, 34, 244]
//
// for (const arrElement of arr) {
//     if (typeof arrElement === 'number') {
//         console.log(arrElement);
//     }
// };

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = ['hello okten', true, 'sdhdh', 'sdhdfh', 'sdhdhadrhaen', 'retywr', false, 1, 34, 54, 64, 34, 244]
//
// for (const arrElement of arr) {
//     if (typeof arrElement === 'string') {
//         console.log(arrElement);
//     }
//
// };

//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr =[];
// arr [0]= 23;
// arr [1]=34;
// arr [2]='fdsf';
// arr [3]= true;
// arr [4]= false;
// arr [5]= 453;
// arr [6]= 'dgdewrgd';
// arr [7]='dgdwegd';
// arr [8]='dsfggdgd';
// arr [9]='dgdgwerwd';
//
// for (const arrElement of arr) {
//     console.log(arrElement)
// };


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 1; i < 11; i++) {
//     document.write(i)
//     console.log(i)
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i < 101; i++) {
//     document.write(i)
//     console.log(i)
//
// };

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i < 101; i+=2) {
//     document.write(i)
//     console.log(i)
//
// };

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 1; i < 101; i++) {
//     if (i%2===0) {
//         document.write(i)
//         console.log(i)
//     }
// };
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 1; i < 101; i++) {
//     if (i%2===1) {
//         document.write(i)
//         console.log(i)
//     }
// };
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
//
// let books = [
//     {name: 'namebook1', pageCount: 55, authors: ['fdadfa sggd', 'fdafa sgsgd', 'fdafa sggffd'], genres: ['fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd']},
//     {name: 'namebook2', pageCount: 355, authors: ['fdadfa sggd', 'fdafa sgsgd', 'fdafa sggffd'], genres: ['fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd']},
//     {name: 'namebook3', pageCount: 555, authors: ['fdadfa sggd', 'fdafa sgsgd', 'fdafa sggffd'], genres: ['fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd']},
//     {name: 'namebook4', pageCount: 655, authors: ['fdadfa sggdhfhd', 'fdafa sgsgd', 'fdafa sggffd'], genres: ['fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd']},
//     {name: 'namebook5', pageCount: 755, authors: ['fdadfa sgfghggd', 'fdafa sgsgd', 'fdafa sgghgffd'], genres: ['fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd','fdsgsgsd','fdsgsgsd']},
//     {name: 'nnnamebosdfsdafok6', pageCount: 655, authors: ['fdadfa sggd', 'fdafa sgsgd', 'fdafa sggffd'], genres: ['fdsgsghgsd', 'fdsgsgsd', 'fdsgsgsd', 'fdsgsgsd']},
//     {name: 'namebook7', pageCount: 366, authors: ['fdadfa sggd', 'fdafa sgsgd', 'fdafa sggffgfhd'], genres: ['fdsgsgsghd', 'fdsgsgsd', 'fdsgsgsd']},
//     {name: 'nameboodsasdk8', pageCount: 334, authors: ['fdadfa sggd', 'fdafa sgsgd', 'fdafa sggffdfghd'], genres: ['fdsgsgsd', 'fdsgsgsd', 'fdsgsgfhgsd']},
//     {name: 'namebookkkk9', pageCount: 233, authors: ['fdadfa sggd', 'fdafa sgsgd', 'fdafa sggffd'], genres: ['fdsgsggsd', 'fdggsgsgsd', 'fdsgsgsfhd']},
// ]
// let count = books [0];
// for (const book of books) {
//     if (book.pageCount > count.pageCount ) {
//        count=book;
// }
// };
//     console.log(count)
// - знайти книжку/ки з найбільшою кількістю жанрів
// let count = books [0];
// for (const book of books) {
//     if (book.genres.length > count.genres.length ) {
//        count=book;
// }
// };
//     console.log(count)
// - знайти книжку/ки з найдовшою назвою
// let count = books [0];
// for (const book of books) {
//     if (book.name.length > count.name.length ) {
//         count=book;
//     }
// };
// console.log(count)
// - знайти книжку/ки які писали 2 автори

// let count = books [0];
// for (const book of books) {
//     if (book.authors.length = 2 ) {
//         count=book;
//     }
// };
// console.log(count)
// - знайти книжку/ки які писав 1 автор
//
// let count = books [0];
// for (const book of books) {
//     if (book.authors.length = 1 ) {
//         count=book;
//     }
// };
// console.log(count)