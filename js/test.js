// рекурсивная функция!

// const febo = function (amount, resArr = [0, 1]) {

//     resArr.push(resArr[resArr.length - 2] + resArr[resArr.length - 1]);

//     if (resArr.length < amount) {
//         return febo(amount, resArr);
//     } else{
//         return resArr;
//     }
// }

// console.log(febo(10));

// --------------Задача про обмен валют-------------

// const usdBuy = 28.5;
// const usdSell = 27.5;

// const evroBuy = 32.5;
// const evroSell = 31.5;

// const rubBuy = 0.5;
// const rubSell = 0.3;

// const exeBuy = (amount, currency) => amount / currency;

// const exeSell = (amount, currency) => amount * currency;

// console.log('Произведен обмен ' + exeBuy(100, usdBuy));

// console.log('Произведен обмен ' + exeSell(100, usdSell));

// console.log('Произведен обмен ' + exeBuy(100, rubBuy));

// --------------END Задача про обмен валют-------------

// -------написать функцию каторая заполнит масив рандомными значениями и потом находим срежнее арифметическое!

// const randomArr = (amount, min, max) => {
//   let num = [];
//   for (let i = 0; i < amount; i++) {
//     num.push(parseInt(Math.random() * (max - min) + min));
//   }

//   let sumItem = 0;
//   for (let item of num) {
//     sumItem += item;
//   }

//   return sumItem / num.length;
// };

// console.log(randomArr(10, 1, 100));

// ------------

// ------------Вывести все числа которые делятся на цело (number)

// const number = 808;

// const intr = number => {
//   const result = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// console.log(intr(number));

// ------------ END Вывести все числа которые делятся на цело (number)

//------------
// Сгенерировать обьект с рандомными названиями ключей.
// После этого в значение каждого ключа поместить число, это количество символов ключа умноженное
// на порядковый номер в алфавите последней буквы ключа.

// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// const generateRandomString = function (minLength, maxLength) {
//   const strLength = parseInt(
//     Math.random() * (maxLength - minLength) + minLength,
//   );
//   let stringResponse = '';
//   for (let i = 0; i < strLength; i++)
//     stringResponse += alphabet.charAt(
//       parseInt(Math.random() * alphabet.length),
//     );
//   return stringResponse;
// };

// const generateRandomObject = function (minLength, maxLength) {
//   const objectResponse = {};
//   const keyCount = parseInt(
//     Math.random() * (maxLength - minLength) + minLength,
//   );
//   for (let i = 0; i < keyCount; i++) {
//     let randomString = generateRandomString(5, 8);
//     objectResponse[randomString] =
//       randomString.length * alphabet.indexOf(randomString.substr(-1));
//   }
//   return objectResponse;
// };

// console.log(generateRandomString(5, 8));
// console.log(generateRandomObject(5, 8));

// ---------------------------21.12.2020

// ----Задача с spred и rest
// 1.функция гинерирует масив случайных чисел
// 2.функция принимает масив случайных чисел
// 3.возвращяет макс и мин (объект)

// const generateRandomArray = (count, min, max) => {
//     const responseArrey = [];
//     for (let i = 0; i < count; i += 1) {
//         responseArrey.push(parseInt(Math.random() * (max - min) + min));
//     }
//     return responseArrey;
// }

// -------------------------22.12.2020
// сгенерировать массив случ.чисел +  перевести четные в нечетные
// получить максимальное нечетное число +  не дольше 1 строки;

// const generateRandomArr = (count, min, max, callback) => {
//     let arr = [];
//     for (let i = 0; i < count; i++) arr.push(parseInt(Math.random() * (max - min) + min));
//     if (callback !== undefined) return callback(arr);
//     return arr;
// }

// console.log(generateRandomArr(100, 10, 100, (arr) => {
//     console.log(arr);
//     let new_array = arr.map(item => ++item);
//     let newArr = new_array.filter(item => item % 2 !== 0);
//     let maxNumber = Math.max(...newArr);
//     console.log(new_array);
//     console.log(newArr);
//     console.log(maxNumber);
// }));

// тоже самое но в одну строку

// console.log(
//     generateRandomArr(100, 10, 100, arr =>
//         Math.max(...arr.map(item => ++item).filter(item => item % 2 !== 0)),
//     ),
// );


// ==============================

//сформировать случ. строку из символов и цифр,
//отфильтровать строку на цифры => получить среднее арифметическое полученных цифр

// const baseString = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const generateRandomString = (length, callback) => {
//     let randomValue = '';
//     for (let i = 0; i < length; i++)
//         randomValue += baseString[parseInt(Math.random() * baseString.length)];

//     if (callback !== undefined) return callback(randomValue);
//     return randomValue;
// };

// const tempFn = str => {
//     const arrayNum = str
//         .split('')
//         .filter(item => !Number.isNaN(Number(item)))
//         .map(item => (item = parseInt(item)));
//     let total = 0;
//     arrayNum.forEach(element => {
//         total += element;
//     });
//     return total / arrayNum.length;
// }

// console.log(generateRandomString(250, tempFn));

// ================================
// дз-4; зад-1

const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
        this.discount = value;
    },
    showOrders() {
        return this.orders;
    },
    addOrder(cost, order) {
        this.balance -= cost;
        this.orders.push(order);
    },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// =============================

// дз - 4; зад - 2

const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);

        inventory.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);

        inventory.items = inventory.items.filter(item => item !== itemName);
    },
};

const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};

invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']


