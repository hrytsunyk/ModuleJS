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
//             value+= item / arr.length;
//         }
//     return value;
//     }
//
// console.log(maxNumb(array));
// console.log(maxNumb(array2));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let nNumber = function () {
//     console.log(arguments);
//
//     if (arguments.length < 0) {
//       return arguments;
//
//     } else if (arguments.length > 0) {
//
//     }
// }
// nNumber(1, 54, 5, 57, 26, 5, 767)

// - створити функцію яка заповнює масив рандомними числам
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]