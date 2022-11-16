// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rect (a,b) {
//     return a*b;
// }
//
// console.log(rect (10,30));
// console.log(rect(100,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function cir(PI, r) {
//     return PI * (r * r);
// }
//
// console.log(cir(3.14, 5));

//
/// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cyl (R, h, PI) {
//     return 2*PI*R*(R+h);
// }
//
// console.log(cyl(5,15,3.14))


// - створити функцію яка приймає масив та виводить кожен його елемент
//
//

// let data= ['hello', 'okten', 134, true, false, null];
// let dataBase = ['SOME TEXT INSIDE'];
//
// function print (arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
//
// print(data);
// print(dataBase);
// //
//


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(paragraph) {
//     document.write(
//         `
//  <p>${paragraph}</p>
//
// `
//     );
//
// };
// text('SOME TEXT INSIDE');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function text(li) {
//     document.write(
//         `
//         <ul>
//         <li>${li}</li>
//         <li>${li}</li>
//         <li>${li}</li>
// </ul>
// `);
//
// };
// text('SOME TEXT INSIDE');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function text(li, numb) {
//     for (let i = 0; i < numb; i++) {
//
//         document.write(` <ul>`)
//
//         document.write(`<li>${li}</li>`);
//
//         document.write(`</ul>`);
//
//     }
//
// };
//
// text('SOME TEXT INSIDE', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



// let list = [12, 'hello', true, false, 'OKTEN', 314];
//
// function listArray (arr) {
//
//     for (const item of arr) {
//
//         document.write(` <ul>`)
//
//         document.write(`<li>${item}</li>`);
//
//         document.write(`</ul>`);
//     }
// };
//     listArray(list);
//





// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 28},
//     {id: 2, name: 'anton', age: 30},
//     {id: 3, name: 'alex', age: 15},
//     {id: 4, name: 'ihor', age: 45},
//     {id: 5, name: 'katya', age: 25}
// ];
//
//
// function user (arr) {
//     for (const user of arr) {
//         document.write(
//             `<div>
//      ${user.id}. ${user.name} - ${user.age};
//          </div>`)
//     }
//
// };
//
// user(users)
//
//

// - створити функцію яка повертає найменьше число з масиву

let pum = [544,5,453,234,62,424,33,122,55];
let num = [54,5,43,24,6,42,33,1,55];



function mini (arr) {
    let min = arr [0];
    for (const item of arr) {
        if (item < min) {
            min = item;
        }
    }
    return min;

};

console.log(mini(num));
console.log(mini(pum));
// min(pum);




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let num = [5,5,10,20,10,50];
// let num1 = [5,5,10,20,10,50,45,6,36,3,2];
//
// let sum= 0;
//
// function calc (arr) {
//     for (let i = 0; i < arr.length; i++) {
//     sum+= arr[i];
//     }
//     return sum;
//
// }
//
// console.log(calc(num));
// console.log(calc(num1));
