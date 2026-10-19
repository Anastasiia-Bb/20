// ===== Домашнє завдання 25 =====
// Тема: класи, конструктор, методи, екземпляри класу,
// наслідування через extends і super.

// ---------- Завдання 1 (обов'язкове) ----------
// Створити клас Product — товар в інтернет-магазині.
//
// 1. Конструктор приймає name, price і quantity
//    та записує їх у властивості екземпляра.
//
// 2. Додати метод getTotal(), який повертає загальну вартість
//    товару на складі: price * quantity.
//
// 3. Додати метод getInfo(), який повертає рядок виду:
//    "Laptop: 1200$, in stock: 3 pcs, total: 3600$."
//    Усередині використати метод getTotal(), а не дублювати обчислення.
//
// 4. Створити щонайменше три екземпляри класу Product з різними даними.
//
// 5. Вивести в консоль самі екземпляри і результат getInfo() для кожного.
//
// Додатково (за бажанням):
// Додати геттер і сеттер discount:
//    - геттер повертає збережене значення, а якщо його ще не задали — 0;
//    - сеттер зберігає значення у властивість _discount.
// Врахувати знижку (у відсотках) у методі getTotal().

class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get discount() {
        return this._discount ?? 0;
    }

    set discount(value){
        this._discount = value
    }

    getTotal(){
        const total = this.price * this.quantity;
        return total - (total * this.discount / 100)
    }

    getInfo() {
        return '${this.name}: ${this.price}, in stock ${this.quantity} pcs, total: ${this.getTotal()}$.';
    }
}

const laptop = new Product("Laptop", 1200, 3);
const phone = new Product("Phone", 800, 5);
const mouse = new Product("Mouse", 25, 10);

laptop.discount = 10;

console.log(laptop);
console.log(laptop.getInfo());

console.log(phone);
console.log(phone.getInfo());

console.log(mouse);
console.log(mouse.getInfo());

// ---------- Завдання 2 (за бажанням) ----------
// Створити ланцюг наслідування з трьох класів: Vehicle → Car → ElectricCar.
//
// 1. Клас Vehicle:
//    - конструктор приймає brand і maxSpeed;
//    - метод getInfo() повертає рядок виду:
//      "Tesla, max speed: 250 km/h."
//
// 2. Клас Car наслідує Vehicle (extends):
//    - конструктор приймає brand, maxSpeed і seats;
//      brand і maxSpeed передати в батьківський конструктор через super;
//    - метод getSeats() повертає рядок виду:
//      "Tesla has 5 seats."
//
// 3. Клас ElectricCar наслідує Car:
//    - конструктор приймає brand, maxSpeed, seats і batteryRange;
//      перші три параметри передати через super;
//    - метод getRange() повертає рядок виду:
//      "Tesla can drive 500 km on a single charge."
//
// 4. Створити по одному екземпляру кожного класу.
//    Для екземпляра ElectricCar викликати всі три методи:
//    getInfo(), getSeats() і getRange() — і вивести результати в консоль.
//
// 5. Перевірити, що в екземпляра Vehicle немає методу getSeats,
//    а в екземпляра Car — методу getRange.

class Vehicle {
    constructor(brand, maxSpeed){
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        return '${this.brand}, max speed: ${this.maxSpeed} km/h.';
    }
}

class Car extends Vehicle{
    constructor(brand, maxSpeed, seats) {
        super(brand,maxSpeed);
        this.seats = seats;
    }

    getSeats() {
        return '${this.brand} has ${this.seats} seats.';
    }
}

class ElectricCar extends Car {
    constructor(brand, maxSpeed, seats, batteryRange) {
        super(brand, maxSpeed, seats);
        this.batteryRange = batteryRange;
    }

    getRange() {
        return '${this.brand} can drive ${this.maxSpeed} km on a single charge.';
    }
}

const vehicle = new Vehicle("Volvo", 180);
const car = new Car("Toyota", 200, 5);
const electricCar = new ElectricCar("Tesla", 250, 5, 500);

console.log(vehicle);
console.log(car);
console.log(electricCar);

console.log(electricCar.getInfo());
console.log(electricCar.getSeats());
console.log(electricCar.getRange());

console.log(typeof vehicle.getSeats);
console.log(typeof car.getRange);