// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 145;
// if (x !== 0) {
//     console.log(true);
// } else {
//     console.log(false)
//
// }
// let a = x;
// console.log(a >= 1);
// console.log(a === 0);
// console.log(a === -3);
//
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
//
// let time = 45;
//
// if (time >= 1 && time <= 15) {
//     console.log('Перша чверть години 1/4');
// } else if (time > 15 && time <= 30) {
//     console.log('Друга чверть години 2/4');
//
// } else if (time > 30 && time <= 45) {
//     console.log('Третя чверть години 3/4');
//
// } else if (time > 45 && time <= 60) {
//     console.log('Четверта чверть години 4/4');
// } else {
//     console.log('Try again')
// }
//
// console.log(time)
//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = +prompt('Уведи число місяця');
if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця');
}
;
//
//
// //
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// // let schedule = +prompt('Уведи порядковий номер дня тижня');
// //
// switch (schedule) {
//     case (1):
//         document.write('Sunday');
//         break;
//     case (2):
//         document.write('Monday');
//         break;
//     case (3):
//         document.write('Tuesday');
//         break;
//     case (4):
//         document.write('Wednesday');
//         break;
//     case (5):
//         document.write('Thursday');
//         break;
//     case (6):
//         document.write('Friday');
//         break;
//     case (7):
//         document.write('Saturday');
//         break;
//     default:
//         document.write("????")
// }
// ;
//
// //
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
//
// let userMsg1 = +prompt('Enter random number!');
// let userMsg2 = +prompt('Enter nrandom number again!');
//
// if (userMsg1 > userMsg2) {
//     console.log(userMsg1);
// } else if (userMsg2 > userMsg1) {
//     console.log(userMsg2)
// }
// ;
//
//
//
// //
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
//
// let x = prompt() || 'default';
// console.log(x);
//
// let x1 = '' || 'default';
// console.log(x1);
//
// let x2 = 0 || 'default';
// console.log(x2);
//
// let x3 = null || 'default';
// console.log(x3);
//
// let x4 = undefined || 'default';
// console.log(x4);
//
// let x5 = false || 'default';
// console.log(x5);
//
//
