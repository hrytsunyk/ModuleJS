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

let filter = users.filter(value => value.id % 2 === 0 ? value.id : null);
console.log(filter);
//
//
///
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = users.sort((a, b) => a.id - b.id)
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

clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
let sortClients = clients.sort((a, b) => a.orders.length - b.orders.length)
console.log(sortClients);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (car, model, manufactured, year, maxSpeed, engineCapacity, name) {
    this.car = car;
    this.model = model;
    this.manufactured = manufactured;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    // this.name = name;
    this.drive = () => `Їдемо зі швидкістю ${this.maxSpeed}км/годину!`
    this.info = () => console.log(this)
this.increaseMaxSpeed = (newSpeed) => this.maxSpeed = newSpeed;
    this.changeYear =  (newValue) => this.year = newValue;
    this.addDriver = (driver) => this.name = driver;
}

let car11 = new Car('Mitsubishi', 'Colt', 'Japan', 2006, 120, 1.3,);
let car12 = new Car('Mitsubishi', 'Pajero', 'Japan', 2020, 280, 2.5,);
let car13 = new Car('Volkswagen', 'Tuareg', 'Germany', 2021, 270, 3);
let car14 = new Car('Volkswagen', 'Caddy', 'Germany', 2009, 150, 1.9);
let car15 = new Car('Ford', 'Fusion', 'USA', 2022, 200, 2);
let car16 = new Car('Ford', 'EDGE', 'USA', 2019, 275, 2.5);
let car17 = new Car('Ford', 'Mustang', 'USA', 2017, 340, 3.5);
let car18 = new Car('Fiat', '500', 'Italy', 2008, 150, 1.8);
let car19 = new Car('Fiat', 'Scudo', 'Italy', 2009, 130, 2.5);
let car20 = new Car('Toyota', 'Camry', 'Japan', 2020, 280, 2.8);


console.log(car11.drive());
car15.info()
let newSpeed = car15.increaseMaxSpeed(33);
console.log(car15)
car15.changeYear(2000);
console.log(car15)
car15.addDriver('Vasya');
console.log(car15)


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
class SalonCars {
    constructor(car, model, manufactured, year, maxSpeed, engineCapacity, name) {
        this.car = car;
        this.model = model;
        this.manufactured = manufactured;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.name = name;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}км/годину!`);
    }

    get info() {
        console.log(this);
    }

    set increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    set changeYear(newValue) {
        this.year = newValue;
    }

    set addDriver(driver) {
        this.name = driver
    }

};

let car1 = new SalonCars('Mitsubishi', 'Colt', 'Japan', 2006, 120, 1.3,);
let car2 = new SalonCars('Mitsubishi', 'Pajero', 'Japan', 2020, 280, 2.5,);
let car3 = new SalonCars('Volkswagen', 'Tuareg', 'Germany', 2021, 270, 3);
let car4 = new SalonCars('Volkswagen', 'Caddy', 'Germany', 2009, 150, 1.9);
let car5 = new SalonCars('Ford', 'Fusion', 'USA', 2022, 200, 2);
let car6 = new SalonCars('Ford', 'EDGE', 'USA', 2019, 275, 2.5);
let car7 = new SalonCars('Ford', 'Mustang', 'USA', 2017, 340, 3.5);
let car8 = new SalonCars('Fiat', '500', 'Italy', 2008, 150, 1.8);
let car9 = new SalonCars('Fiat', 'Scudo', 'Italy', 2009, 130, 2.5);
let car10 = new SalonCars('Toyota', 'Camry', 'Japan', 2020, 280, 2.8);

let cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
console.log(cars);

car1.drive();
car1.info;
car1.increaseMaxSpeed = 80;
console.log(car1)
car1.changeYear = 2001;
console.log(car1);
car1.addDriver = 'Mr. Green';
console.log(car1)
//
//
///
///
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function CinderellaPrince(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderella1 = new CinderellaPrince('Cinderella-1', 22, 38);
let cinderella2 = new CinderellaPrince('Cinderella-2', 23, 39);
let cinderella3 = new CinderellaPrince('Cinderella-3', 24, 40);
let cinderella4 = new CinderellaPrince('Cinderella-4', 25, 45);
let cinderella5 = new CinderellaPrince('Cinderella-5', 26, 39);
let cinderella6 = new CinderellaPrince('Cinderella-6', 27, 32);
let cinderella7 = new CinderellaPrince('Cinderella-7', 28, 35);
let cinderella8 = new CinderellaPrince('Cinderella-8', 29, 36);
let cinderella9 = new CinderellaPrince('Cinderella-9', 20, 37);
let cinderella10 = new CinderellaPrince('Cinderella-10', 24, 43);


class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
};

let prince = new Prince('Prince', 30, 37);
let cinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10, prince];

for (let i = 0; i < cinderellas.length; i++) {
    const cinderella = cinderellas[i];
    let result = (cinderella.footSize === prince.shoe) ? console.log(cinderella.name) : null;

}

let find = cinderellas.find(value => value.name === 'Cinderella-9');
console.log(find);

