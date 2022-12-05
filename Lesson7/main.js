// console.log('start')
// try {
// console.log(a)
//
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log('goal')
// }
// console.log('end')

//closures//
function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age=age;
            }
        }

    }

}

let builder = userBuilder('vasya', 44)
console.log(builder);
console.log(builder.getAge());
console.log(builder.getName());
builder.setAge(66)
console.log(builder.getAge())