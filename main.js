console.log('#20. JavaScript homework: замовлення в інтернет-магазині')

/*
 * Загальні умови:
 * - кроки виконуються послідовно, один під одним, у цьому самому файлі;
 * - результат кожного кроку виводьте в консоль через console.log.
 */

/*
 * ЗАВДАННЯ. Замовлення в інтернет-магазині
 *
 * Вихідні дані (скопіюйте собі у файл і далі працюйте з ними):
 *
 * const orderObj = {
 *   id: 1024,
 *   customer: { firstName: 'John', lastName: 'Smith', age: 15 },
 *   priceStr: '1099.99 грн',
 *   quantityStr: '3',
 *   deliveryDay: 3,
 *   tempNote: 'службова нотатка, видалити перед відправкою',
 * }
 */

/*
 * Крок 1. Об'єкти
 *
 * Додайте до orderObj властивість city.
 * Виведіть у консоль один рядок у форматі 'John Smith from Київ', де John - orderObj.customer.firstName,
 * Smith - orderObj.customer.lastName.
 */

/*
 * Крок 2. in / delete
 *
 * a) Перевірте через оператор in, чи є в orderObj властивість 'tempNote'.
 * b) Видаліть її через оператор delete і перевірте через in ще раз.
 */

/*
 * Крок 3. Копіювання об'єктів
 *
 * a) Зробіть глибоку копію замовлення - backupOrder.
 *    Змініть у копії backupOrder.customer.firstName на 'Ann' і переконайтесь,
 *    що в оригіналі ім'я не змінилось.
 * b) За допомогою Object.assign() створіть НОВИЙ об'єкт paidOrder - злиття orderObj та { status: 'paid' }.
 *    Переконайтесь, що в orderObj поле status не з'явилось.
 */

/*
 * Крок 4. Перетворення типів
 *
 * a) З рядка orderObj.priceStr отримайте число price.
 * b) З рядка orderObj.quantityStr отримайте число quantity.
 * c) Обчисліть total = price * quantity.
 */

/*
 * Крок 5. Тернарний оператор
 *
 * Обчисліть знижку discount за віком клієнта (orderObj.customer.age):
 * менше 18  - 0.1
 * 18..60    - 0
 * понад 60  - 0.15
 *
 * Дозволений тільки тернарний оператор ?, використання if і switch заборонено.
 * Обчисліть finalTotal - суму зі знижкою.
 */

/*
 * Крок 6. if ... else if ... else
 *
 * За допомогою конструкції if ... else if ... else обчисліть вартість доставки deliveryPrice:
 * finalTotal менше 500   - 100
 * finalTotal 500..1500   - 50
 * finalTotal понад 1500  - 0
 */

/*
 * Крок 7. switch / case / default
 *
 * За номером orderObj.deliveryDay обчисліть змінну deliveryDayName - назву дня тижня
 * (1 - 'Понеділок', ..., 7 - 'Неділя').
 * Якщо в deliveryDay рядок, дробове число або число поза діапазоном 1...7 -
 * deliveryDayName має дорівнювати 'Невідомий день'.
 * Обов'язково використайте switch / case / default.
 *
 * Перевірте роботу коду для значень deliveryDay:
 * 3   → 'Середа'
 * 7   → 'Неділя'
 * 9   → 'Невідомий день'
 * 1.5 → 'Невідомий день'
 * '2' → 'Невідомий день'
 */

/*
 * Крок 8. Цикл for, оператор кома, break / continue
 *
 * Обчисліть bonusSum - бонуси клієнта.
 * У циклі for переберіть числа від 1 до 20 і додавайте кожне з них до bonusSum.
 *
 * Причому:
 * - лічильник i та верхня межа limit оголошуються в одному for через оператор кома,
 * - числа, кратні 3, до суми не додаються (continue),
 * - як тільки bonusSum стає більшою за 50, цикл припиняється (break).
 *
 * Результат: bonusSum → 61
 */

 const orderObj = {
    id: 1024,
    customer: { firstName: 'John', lastName: 'Smith', age: 15 },
    priceStr: '1099.99 грн',
    quantityStr: '3',
    deliveryDay: 3,
    tempNote: 'службова нотатка, видалити перед відправкою',
}

orderObj.city = 'Київ'
console.log(orderObj.customer.firstName + ' ' + orderObj.customer.lastName + ' from ' + orderObj.city)

'tempNote' in orderObj
delete orderObj.tempNote
'tempNote' in orderObj
console.log('tempNote' in orderObj)

const backupOrder = structuredClone(orderObj)
backupOrder.customer.firstName = 'Ann'
console.log(orderObj.customer.firstName)
console.log(backupOrder.customer.firstName)

const paidOrder = Object.assign({}, orderObj, { status: 'paid'})
console.log('status' in orderObj)

const price = parseFloat(orderObj.priceStr)
const quantity = Number(orderObj.quantityStr)
const total = price * quantity

const discount = orderObj.customer.age < 18
    ? 0.1
    : orderObj.customer.age <= 60
    ? 0 : 0.15

const finalTotal = total * (1 - discount)
console.log(finalTotal)

let deliveryPrice
if (finalTotal < 500) {deliveryPrice = 100}
else if (finalTotal <= 1500) {deliveryPrice = 50}
else {deliveryPrice = 0}
console.log(deliveryPrice)

let deliveryDayName
switch (orderObj.deliveryDay) {
    case 1:
        deliveryDayName = 'Понеділок'
        break
    case 2:
        deliveryDayName = 'Вівторок'
        break
    case 3:
        deliveryDayName = 'Середа'
        break
    case 4:
        deliveryDayName = 'Четвер'
        break
    case 5:
        deliveryDayName = 'П’ятниця'
        break
    case 6:
        deliveryDayName = 'Субота'
        break
    case 7:
        deliveryDayName = 'Неділя'
        break
    default:
        deliveryDayName = 'Невідомий день'
}
console.log(deliveryDayName)

const testDays = [3, 7, 9, 1.5, '2']

for (const day of testDays) {

    let testDayName

    switch (day) {
        case 1: testDayName = 'Понеділок'; break
        case 2: testDayName = 'Вівторок'; break
        case 3: testDayName = 'Середа'; break
        case 4: testDayName = 'Четвер'; break
        case 5: testDayName = 'П’ятниця'; break
        case 6: testDayName = 'Субота'; break
        case 7: testDayName = 'Неділя'; break
        default: testDayName = 'Невідомий день'
    }

    console.log(day, ' ', testDayName)
}

let bonusSum = 0
for (let i = 1, limit = 20; i <= limit; i++) {
    if (i % 3 === 0) continue
    bonusSum += i
    if (bonusSum > 50) break
}
console.log(bonusSum)