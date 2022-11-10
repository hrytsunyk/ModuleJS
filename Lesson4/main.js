// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let i = 0;
for (let i = 0; i < 10; i++) {
   document.write(`<div><h3>Okten school</h3></div>`);
};


document.write('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині



for (let i = 0; i < 10; i++) {
   const arrElement = i;
   document.write(`<div><h3>Okten school - ${arrElement} </h3></div>`);

};

document.write('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a = 1;
while (a < 21) {
    document.write(`<h1>Some Text Inside</h1>`);
    a++;
};

document.write('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


let b = 1;
while (b < 21) {
    let arrElements = b;
    document.write(`<h1>Some Text Inside - ${arrElements}</h1>`)
    b++;
};

document.write('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')


//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (let x = 0; x < listOfItems.length; x++) {
    const listOfItem = listOfItems[x];
    document.write(`<li>${listOfItem}</li>`);
};
document.write(`</ul>`);



// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
// -----------------------------------------------


//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
//
//

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<div class="father">`)
for (let z = 0; z < products.length; z++) {
    const product = products[z];
    document.write(`
<div class="product-card"> <h3 class="product-title">${product.title} - ${product.price}</h3>
    <img src="${product.image}" alt="" class="product-image">
 </div>`);

};
document.write(`</div>`);


//
document.write('---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')

// --------------------
//     є масив


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.age >= 30) {
        document.write(`<div>${user.status} ${user.age}</div>`);

    };
};

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

