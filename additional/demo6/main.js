// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];

let user1 = new User(1, 'Bob', 'Bobbinson', 'bobbinson@gmail.com', +380000000001);
let user2 = new User(2, 'Robby', 'Robbinson', 'robbinson@gmail.com', +380000000002);
let user3 = new User(3, 'Greta', 'Grettinson', 'grettinson@gmail.com', +380000000003);
let user4 = new User(4, 'Piter', 'Pitersson', 'pitersson@gmail.com', +380000000004);
let user5 = new User(5, 'Jake', 'Jackson', 'jackson@gmail.com', +380000000005);
let user6 = new User(6, 'Molli', 'Molisson', 'molisson@gmail.com', +380000000006);
let user7 = new User(7, 'Bart', 'Bartson', 'bartson@gmail.com', +380000000007);
let user8 = new User(8, 'Mary', 'Marrisson', 'marisson@gmail.com', +380000000008);
let user9 = new User(9, 'Steven', 'Stevenson', 'stevenson@gmail.com', +380000000009);
let user10 = new User(10, 'Jane', 'Janesson', 'janesson@gmail.com', +380000000010);


users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter(value => value.id %2===0 ? value.id : null);
console.log(filter);
//
//
///
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = users.sort((a,b) => a.id - b.id)
console.log(sort);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
constructor(id, name, surname, email, phone, orders) {
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.orders = orders;
}
};
let clients = [];

let client1 = new Client(1, 'Bob', 'Bobbinson', 'bobbinson@gmail.com', +380000000001, ['eggs', 'water', 'cheese', 'tea']);
let client2 = new Client(2, 'Robby', 'Robbinson', 'robbinson@gmail.com', +380000000002, ['eggs', 'water', 'cheese', 'tea', 'milk', 'meat']);
let client3 = new Client(3, 'Greta', 'Grettinson', 'grettinson@gmail.com', +380000000003, ['eggs', 'water', 'cheese', 'tea']);
let client4 = new Client(4, 'Piter', 'Pitersson', 'pitersson@gmail.com', +380000000004, ['eggs', 'water', 'cheese', 'tea', 'milk', 'meat', 'icecream']);
let client5 = new Client(5, 'Jake', 'Jackson', 'jackson@gmail.com', +380000000005, ['eggs', 'water', 'cheese', 'tea']);
let client6 = new Client(6, 'Molli', 'Molisson', 'molisson@gmail.com', +380000000006, ['eggs', 'water', 'cheese', 'tea']);
let client7 = new Client(7, 'Bart', 'Bartson', 'bartson@gmail.com', +380000000007, ['eggs', 'water', 'cheese', 'tea', 'milk', 'meat', 'icecream', 'wine']);
let client8 = new Client(8, 'Mary', 'Marrisson', 'marisson@gmail.com', +380000000008, ['eggs', 'water', 'cheese', 'tea']);
let client9 = new Client(9, 'Steven', 'Stevenson', 'stevenson@gmail.com', +380000000009, ['eggs', 'water', 'cheese', 'tea', 'milk', 'meat']);
let client10 = new Client(10, 'Jane', 'Janesson', 'janesson@gmail.com', +380000000010, ['eggs', 'water']);

clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
let sortClients = clients.sort((a,b) => a.orders.length - b.orders.length)
console.log(sortClients);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class SalonCars {
    constructor(car, model, manufactured, year, maxSpeed, engineCapacity) {
        this.car = car;
        this.model = model;
        this.manufactured = manufactured;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    getDrive () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}км/годину!`);
    }
    getIngo () {
        console.log(`Інформація: 
        ${this.car}  
        ${this.model} 
        ${this.manufactured} 
        ${this.year} 
        ${this.maxSpeed} 
        ${this.engineCapacity}`)
    }

};

let car1 = new SalonCars('Mitsubishi', 'Colt', 'Japon', 2006, 120, 1.3)

car1.getIngo()


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
