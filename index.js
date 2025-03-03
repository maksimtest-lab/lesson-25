// const obj = {
//     name: "Ivan",
//     age: 30,
//     sayHello: () => {
//         console.log(`Hello ${this.name}, im ${this.age} years old`);
//     }

// }

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//     this.sayHello = () => {
//         console.log(`Hello ${this.name}`);
//     }
// }

// let user = new User("Ivan");
// obj.sayHello();
// user.sayHello();

// --------------Наследование через Object.setPrototypeOf-----------------------

// const person = {
//     gender: 'male',
//     gret() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// const user = {
//     name: "Alice",
//     gender: 'female'
// }

// Object.setPrototypeOf(user, person);

// user.gret();

// console.log(user.gender);
// console.log(user);

// --------------Наследование через Object.create-------------------------------

// const animal = {
//     makeSound() {
//         console.log("Animal sound");
//     }
// }

// const dog = Object.create(animal);

// dog.makeSound();
// console.log(dog);

// dog.bark = () => {
//     console.log("Woof!");
// }

// --------------------------- далее ----------------------

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = () => {
//     console.log(`${this.name} makes a sound`);
// }

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = () => {
//     console.log(`${this.name} barks`);
// }

// const rex = new Dog("Rex", "Labrador");
// console.log(rex);
// rex.makeSound();
// rex.bark();

// -------------------- проектирование ----------------------

// Переделка на классы
// const spending = { // сущность Траты
//     amount: 100,
//     dataTime: Date.now(),
// }

// const history = { // сущность История
//     records: [],
//     addRecord(record) {
//         this.records.push(record);
//     }
// }

// const budget = { // сущность Бюджет
//     amount: 10000,
//     startDate: Date.now(),
//     daysCount: 10,
// }

// Дурной тон ниже
// const spending1 = { // сущность Траты
//     amount: 50,
//     dataTime: Date.now(),
// }

// const spending2 = { // сущность Траты
//     amount: 150,
//     dataTime: Date.now(),
// }
// const spending3 = { // сущность Траты
//     amount: 100,
//     dataTime: Date.now(),
// }

// function CreateSpending(amount) {
//     this.amount = amount;
//     this.dataTime = Date.now();
// }

// // const spending1 = new CreateSpending(50);
// // const spending2 = new CreateSpending(150);
// // const spending3 = new CreateSpending(200);
// const spending1 = new Record(50);
// const spending2 = new Record(150);
// const spending3 = new Record(200);

// const history1 = new History();
// const history2 = new History();

// // history1.addRecord(spending1.amount);
// // history2.addRecord(spending2.amount);
// // history2.addRecord(spending3.amount);

// history1.addRecord(spending1);
// history2.addRecord(spending2);
// history2.addRecord(spending3);

// ---- Испльзование классов ----

// class History {
//     records = [];
//     addRecord(record) {
//         this.records.push(record);
//     }
// }

// class Record {
//     constructor(amount) {
//         this.amount = amount;
//         this.dataTime = Date.now();
//     }
// }

// class Budget {
//     constructor(amount, daysCount) {
//         this.amount = amount;
//         this.startDate = Date.now();
//         this.daysCount = daysCount;
//     }
// }

// class DailyAmount {
//     constructor(budget, history) {
//         this.budget = budget;
//         this.history = history;
//     }
// }

// const budget = new Budget(10000, 10);
// const history = new History();
// const daily = new DailyAmount(budget, history);


// ----------------------

// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
// }

// ----------------------

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log(`I walk: ${this.name}`);
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//     walk() {
//         super.walk();
//         console.log(`...and jump`);
//     }
// }


// const rabbit = new Rabbit("Rabbit", 2);
// console.log(rabbit.name);
// console.log(rabbit.age);
// rabbit.walk();

// rabbit.run();

// --------------------- вернули приложение трат ----------------------

// class History {
//     records = [];
//     #dd = [1,2,3];
//     addRecord(record) {
//         this.records.push(record);
//     }
//     static showStatistics() {
//         console.log(this.#dd);
//         console.log(this.records);
//     }
// }

// class Record {
//     constructor(amount) {
//         this.amount = amount;
//         this.dataTime = Date.now();
//     }
// }

// class Budget {
//     constructor(amount, daysCount) {
//         this.amount = amount;
//         this.startDate = Date.now();
//         this.daysCount = daysCount;
//     }
// }

// class DailyAmount {
//     constructor(budget, history) {
//         this.budget = budget;
//         this.history = history;
//     }
// }

// const budget = new Budget(10000, 10);
// const history = new History();
// const daily = new DailyAmount(budget, history);

// history.addRecord(150);
// history.addRecord(250);
// history.addRecord(350);
// history.addRecord(150);

// History.showStatistics();

// class NotificationsHistory extends History {
//     notifications = [];
//     addNotification(notification) {
//         this.notifications.push(notification);
//     }

// }

// const notifications = new NotificationsHistory();

// console.log(history);
// console.log(history.#dd);
// console.log(notifications);
// console.log(notifications.#dd);

// -------- Создать объект car, содать electricCar добавить метод charge --------

// const car = {
//     start() {
//         console.log("Car started...")
//     }
// }


// const electricCar = {
//     charge() {
//         console.log("Charging battery...")
//     }
// }

// Object.setPrototypeOf(electricCar, car);

// electricCar.start();
// electricCar.charge();

// console.log(electricCar.isPrototypeOf(car));
// console.log(car.isPrototypeOf(electricCar));


// --------- Создать класс Animal ------------

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows!`)
    }
}

const cat = new Cat('Whickers');

console.log(cat.name);
console.log(cat.speak());