// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [123, 'name', -123, true, 3.14, 'Hello', 'Okten', 23666245, false, 'end'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = [
    {title: 'Okten', pageCount: 134, genre: 'SCRUM'},
    {title: 'Okten', pageCount: 300, genre: 'Java Script'},
    {title: 'Okten', pageCount: 230, genre: 'HTML.CSS'}
]
console.log(book1[0]['genre'])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let objBook1 = {
        title: 'Okten',
        pageCount: 300,
        genre: 'Information Technology',
        authors: [{name:'Artur Freedman',age:54}, {name:'John Stone',age:34}, {name:'James Arthur',age:34}]
    }

console.log(objBook1['authors'])

let objBook2 = {
    title: 'Okten',
    pageCount: 300,
    genre: 'Information Technology',
    authors: [{name:'Bill Collins',age:36}, {name:'Sia Standford',age:44}, {name:'Lisa Dubblin',age:36}]
}

console.log(objBook2['authors'])

let objBook3 = {
    title: 'Okten',
    pageCount: 300,
    genre: 'Information Technology',
    authors: [{name:'Artur Freedman',age:54}, {name:'John Stone',age:34}, {name:'James Arthur',age:34}]
}

console.log(objBook3['authors'])


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {username: 'owl', name:'vasya', password: 12345 },
    {username: 'vision', name:'vasya', password: 545645 },
    {username: 'bull', name:'vasya', password: 34764},
    {username: 'molly', name:'vasya', password: 136743 },
    {username: 'goote', name:'vasya', password: 5468663 },
    {username: 'fool', name:'vasya', password: 4567363 },
    {username: 'dondon', name:'vasya', password: 36734745 },
    {username: 'piton', name:'vasya', password: 16789768},
    {username: 'rofl', name:'vasya', password: 6789689 },
    {username: 'gookten', name:'vasya', password: 56787658 }
]

console.log(users[0]['password'])
console.log(users[1]['password'])
console.log(users[2]['password'])
console.log(users[3]['password'])
console.log(users[4]['password'])
console.log(users[5]['password'])
console.log(users[6]['password'])
console.log(users[7]['password'])
console.log(users[8]['password'])
console.log(users[9]['password'])

scrip