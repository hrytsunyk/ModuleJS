// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let str = 'насолода';
//
// function foo(str, n) {
//     let arr = [];
//     for (let i = 0; i < str.length; i += n) {
//         arr.push(str.substring(i, i + n))
//     }
//     return arr;
// }
//
// document.write(foo(str, 2));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый;

// let str = 'Каждый охотник желает знать';
//
// let delete_characteres = function (str, length) {
//     let res = [];
//     res.push(str.slice(0,length));
//     return res;
// };
// console.log(delete_characteres(str, 6));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// function insert_dash(str) {
//     let res = [];
//     res.push(str.replaceAll(' ', '-').toUpperCase());
//     return res;
// };
//
// console.log(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let foo = (...arguments) => arguments[0].slice(0, 1).toUpperCase() + arguments[0].slice(1, arguments[0].length);
//
// console.log(foo('hello'))


//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let foo = (str) => str.replace('..', ' ').replace('---', ' ').replace('__', ' ');
// console.log(foo(n3));


// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let func = (random) => {
//     let rand = [];
//     for (let i = 0; i < 100; i++) {
//         rand.push(Math.round(Math.random() * 100))
//     }
//     return rand;
// }
//
// console.log(func());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let randomArray = [];
// let func = (arr) => {
//     for (let i = 0; i < 100; i++) {
//         randomArray.push(Math.round(Math.random() * 100))
//     }
//     return randomArray;
// }
//
// console.log(func(randomArray).sort((a, b) => a - b));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let randomArray = [];
// let func = (arr) => {
//     for (let i = 0; i < 100; i++) {
//         randomArray.push(Math.round(Math.random() * 100))
//     }
//     return randomArray;
// }
//
// console.log(func(randomArray).filter(value => value < 23));
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'hello okten school true'
// let capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase()+value.slice(1)).join(' ')
// console.log(capitalize(str));

// {
//     let str1 = str.split(' ')
//     let toUpperCase = str1.map(value => value[0].toUpperCase() + value.slice(1, value.length))
//     let join = toUpperCase.join(' ')
//     return join;
// }
// console.log(capitalize(str))


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com


// let valid = (...arguments) => {
//  if (arguments === )
// }
//
// console.log(valid('someemail@gmail.com'))

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

//
// let sort = coursesArray.sort((a,b) => b.modules.length - a.modules.length)
// console.log(sort);

//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// document.writeln(count(str, symb)) // 5


// let str = "Астрономия это наука о небесных объектах";
// let count = (str, symb) => {
//     let stingsearch = [];
//     let split = str.split('').forEach((value) => value.includes(symb) ? stingsearch.push(value[0]) : null)
//     return stingsearch.length;
// }
//
// console.log(count(str, 'о'))

//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


// let str = "Сила тяжести приложена к центру масс тела";
// let cutstring = (str, n) => str.split(' ').slice(0, n).join(' ');
// console.log(cutstring(str, 5));
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).s

let books = [
    {
        name: 'Book1',
        pages: 353,
        authors: ['Don Carleone', 'Mister Boolean', 'Mrs Phiona'],
        genres: 'fantastic'
    },
    {
        name: 'Boook2',
        pages: 35,
        authors: ['Don Carleone', 'Mrs Phiona'],
        genres: 'IT'
    },
    {
        name: 'Book3',
        pages: 200,
        authors: ['Don Carleone', 'Mister Boolean', 'Mrs Phiona', 'Santa Julia'],
        genres: 'fantastic'
    },
    {
        name: 'Booooook4',
        pages: 453,
        authors: ['Mrs Phiona'],
        genres: 'comics'
    },
    {
        name: 'Book5',
        pages: 334,
        authors: ['Don Carleone', 'Mister Boolean', 'Mrs Phiona'],
        genres: ['documental', 'documental', 'documental','documental']
    }
]

// -знайти наібльшу книжку.
let sortPages = books.sort((a,b) => b.pages - a.pages)[0].pages
console.log(sortPages)


// - знайти книжку/ки з найбільшою кількістю жанрів
let sortGenres =books.sort((a,b) => a.genres.length - b.genres.length)
console.log(sortGenres)

// - знайти книжку/ки з найдовшою назвою
let sort = books.sort((a, b) => b.name.length - a.name.length)[0].name
console.log(sort)

// - знайти книжку/ки які писали 2 автори
let filter = books.filter((value,index) => value.authors.length === 2)[0].authors.toString()
console.log(filter)
// - знайти книжку/ки які писав 1 автор
let auth = books.filter((value) => value.authors.length === 1)[0].authors.toString()
console.log(auth)

// - вісортувати книжки по кількості сторінок по зростанню

let sortNumb = books.sort((a,b) => a.pages - b.pages)[0].pages
console.log(sortNumb);
