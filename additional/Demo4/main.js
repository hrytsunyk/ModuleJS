// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let getMinNumber = (a,b,c) => {
//     if (a<b && a<c) {
//         console.log(a)
//     } else if (b<a && b<c) {
//         console.log(b)
//     }else if (c<a && c<b) {
//         console.log(c)
//     }
// }
//
// getMinNumber(4, 6,1)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function getMax(a,b,c) {
//     if (a>b && a>c) {
//         console.log(a)
//     } else if (b>a && b>c) {
//         console.log(b)
//     }else if (c>a && c>b) {
//         console.log(c)
//     }
// }
//
// getMax(3,66,33)

// - створити функцію яка повертає найбільше число з масиву


// let array = [6, 2, 3,45,34,73,4,2,14,6,344,624];
//
// let maxNumb = (arr) => {
//     let max = arr [0];
//     for (const  item of arr) {
//         if (item > max) {
//             max=item;
//         }
//     }
//     return max;
// }
//
// console.log(maxNumb(array));
//


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//  let array = [10,20,20,50];
// let array2= [45,45,76,32,1,57,32,73,3,26,2]
//
// let maxNumb = (arr) => {
//     let value = 0;
//     for (const  item of arr) {
//             value+= item;
//         }
//     return value / arr.length;
//     }
//
// console.log(maxNumb(array));
// console.log(maxNumb(array2));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let nNumber = function (...arguments) {
// let min = arguments [0];
// let max = arguments [0];
//
//     for (const item of arguments) {
//         if (item< min) {
//             min = item;
//         } if (item > max) {
//         max=item;
//         }
//     }
//     console.log(max);
//     return min;
//     }
// console.log(nNumber(1, 54, 5, 57, 26, 5, 767));

// - створити функцію яка заповнює масив рандомними числам
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [];
//
// function foo (array) {
//     for (let i = 0; i < 100; i++) {
//         arr [i] = Math.round(Math.random() * 100);
//     }
//     console.log(arr);
//
// }
// foo ()


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr= [];
//
// function foo(limit) {
//     for (let i = 0; i < limit; i++) {
//         arr [i] = Math.round(Math.random()*100)
//     }
//     console.log(arr);
// }
// foo (15)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let num = [2, 5, 64, 23, 5, 62, 5, 3];
//
// function foo(array) {
//     let mun = [];
//     for (let i = array.length - 1, j = 0; i >= 0; i--) {
//         mun [j++] = num [i];
//     }
//     return mun;
// }
//
// console.log(foo(num));


//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// let get = (...arguments) => arguments.length===2 ? arguments [0] + arguments [1]: arguments [0];
//
// let res= get(3,'3');
// console.log(res);

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// let arr = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5, 5];
//
// function foo(array1, array2) {
//     let res = [];
//     let por = array1.length >= array2.length ? array1 : array2;
//     for (let i = 0; i < por.length; i++) {
//         res [i] = (array1 [i] || 0) + (array2 [i] || 0);
//     }
//     return res;
// }
//
// console.log(foo(arr, arr2));

// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let objects = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}];
//
// function foo(arr) {
//     let res = [];
//
//     for (let i = 0, j = 0; i <  arr.length; i++) {
//         for (const key in arr[i]) {
//            res [j++] = key;
//        }
//
//     }
//         return res;
// }

// console.log(foo(objects));
//
// function foo(array) {
//     let newarr = [];
//     for (let i = 0, j=0; i < array.length; i++) {
//         for (const key in array [i]) {
//             newarr [j++] = key;
//         }
//
//     }
//     return newarr;
// }
//
// console.log(foo(objects));

//
// function ofo(array) {
//     let arr = [];
//     for (let i = 0, j = 0; i < array.length; i++) {
//
//     }
//     return arr;
// }
//
// console.log(ofo(objects));

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]