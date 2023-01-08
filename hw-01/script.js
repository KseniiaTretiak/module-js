// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.


// let weight = '88.3';
// let height = '1.75';

// const bmi = weight / Math.pow(height,2);
// console.log(bmi); // 28.8



//-----------------------------------

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.

// let firstNumber = 27.3;
// let secondNumber = 27.9;

// const value = Math.floor(firstNumber);
// console.log(value);
// const valueSecond = Math.floor(secondNumber);
// console.log(valueSecond);

// const valueThird = Math.ceil(firstNumber);
// console.log(valueThird);
// const valueFourth = Math.ceil(secondNumber);
// console.log(valueFourth);

// const valueFifth = Math.round(firstNumber);
// console.log(valueFifth);
// const valueSixth = Math.round(secondNumber);
// console.log(valueSixth);


// -----------------------------------

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 70;
// console.log(new Date(totalMinutes*1000).toUTCString().split(/ /)[4]);
// const totalMinutesFirst = 450;
// console.log(new Date(totalMinutesFirst*1000).toUTCString().split(/ /)[4]);
// const totalMinutesSecond = 1441;
// console.log(new Date(totalMinutesSecond*1000).toUTCString().split(/ /)[4]);

//-----------------------------------

/* 
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */

// let result = prompt('Enter the number');
// console.log(Number(result))

//-----------------------------------

/* 
   * За допомогою модального вікна prompt отримати від користувача два числа.
   * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
   * */
//   let firstNumber = Number(prompt('Enter the first number'));
//   let secondNumber = Number(prompt('Enter the second number'));
// console.log('+',firstNumber + secondNumber);
// console.log('-',firstNumber - secondNumber);
// console.log('*',firstNumber * secondNumber);
// console.log('/',firstNumber / secondNumber);
// console.log('%',firstNumber % secondNumber);