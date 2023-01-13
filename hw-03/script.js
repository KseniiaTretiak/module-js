// 1 Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz, якщо i кротну цифру 3, то вивести FizBuz.

// for(let i = 1; i < 11; i++){

//       if(i % 2 !== 0){
//           console.log(`Buz`);
//       }
//       if(i % 2 === 0){
//           console.log(`Fiz`);
//       }
//       if(i % 3 === 0) {
//           console.log(`FizBuz`);  
//       }
//   }


// // 2 Написати логіку знаходження факторіалу числа 10.
// function factorial(n){
//     let result = 1;
//   for ( ; n > 1; n--){
//     result = result * n;
//   }
//     return result;
// }
// console.log(factorial(10))
// 3 У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?

// function sumWeeks() {
//  let paper = (Math.ceil(1200/500*8));
//       return paper;
//     }
//     console.log(sumWeeks());
  

// 4 Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири. Поверхів у нас 9, квартир на поверсі по 3

// let flat = 28;
// function home() {
// let entrance = (Math.trunc(((flat-1) / 27)+ 1));
// let floor = (Math.trunc((((flat-1) % 27)/ 3)+ 1));
// return {entrance, floor}
// }
// console.log(home());


// 5 Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків

// let rows = 3;
// let pattern = "";

// for (let i = 1; i <= rows; i++) {
//    for (let j = 1; j <= rows - i; j++) {
//       pattern += " ";
//    }
 
//    for (let k = 1; k <= 2 * i - 1; k++) {
//       pattern += "*";
//    }
//    pattern += "\n";
// }
// console.log(pattern);

