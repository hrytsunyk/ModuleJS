// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}




// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];

let user = new User(1, 'Bob', 'Bobbinson', 'bobbinson@gmail.com', +380000000001);
let user = new User(2, 'Robby', 'Robbinson', 'robbinson@gmail.com', +380000000002);
let user = new User(3, 'Greta', 'Grettinson', 'grettinson@gmail.com', +380000000003);
let user = new User(4, 'Piter', 'Pitersson', 'pitersson@gmail.com', +380000000004);
let user = new User(5, 'Jake', 'Jackson', 'jackson@gmail.com', +380000000005);
let user = new User(6, 'Molli', 'Molisson','molisson@gmail.com', +380000000006);
let user = new User(7, 'Bart', 'Bartson', 'bartson@gmail.com', +380000000007);
let user = new User(8, 'Mary', 'Marrisson', 'marisson@gmail.com', +380000000008);
let user = new User(9, 'Steven', 'Stevenson', 'stevenson@gmail.com', +380000000009);
let user = new User(10, 'Jane', 'Janesson', 'janesson@gmail.com', +380000000010);



//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// Footer
// © 2022 GitHub, Inc.
//     Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
