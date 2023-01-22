// 1. Створити функцію, яка буде видаляти людей з масиву за індексом, який ми передамо параметром.

// const arr = ['Vasya', 'Petya', 'Alexey']
// const removeUser = arr.splice(2, 1);
// console.log(arr) /// ['Vasya', 'Alexey']

//------------------------

// 2. Створити функцію яка поверне всі ключі об'єкта, переданого параметром
// const obj = { name: 'Vasya', age: 1}
// const getAllKeys= Object.keys(obj);
// console.log(getAllKeys) /// ["name", "age"]

//------------------------

// 3. Створити функцію, яка поверне всі значення об'єкта переданого параметром
// const obj = { name: 'Vasya', age: 1}
// const getAllValues = Object.values(obj);
// console.log(getAllValues) /// ["Vasya", 1]

//------------------------


// 4. Створити функцію, де ми першим параметром передамо об'єкт з новим кандидатом, а другим параметром - id будь-якого кондидата в масиві condidateArr. Функція повинна буде вставити кандидата переданого через перший параметр до масиву перед кондидатом у якого id одно тому що передали у другому параметрі
   
    // const firstObj = {
    //     id: 3,
    //     name: 'Vasya'
    // }
    
    // const secondObj = {
    //     id: 4,
    //     name: 'Katya'
    // }
    
    // const arr = [
    //     {
    //         id: 1,
    //         name: 'Kolya'
    //     },
    //     {
    //         id: 2,
    //         name: 'Petya'
    //     },
    // ];
    // function insertIntoarr(obj, id) {
    //     for(let i = 0; i < arr.length; i++) {
    //         if (arr[i].id === id) {
    //             arr.splice(i, 0, obj);
    //             return arr;
    //         }
    //     }
    // }

// insertIntoarr(firstObj, 2)
// console.log(arr);
// /// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

// insertIntoarr(secondObj, 1)
// console.log(arr) 
// /// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]
//------------------------
