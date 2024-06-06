
// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"


// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// const date = new Date(2030, 8, 16, 14, 25, 0, 0);
// console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)


// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Повертає години
// console.log("getHours(): ", date.getHours());

// // Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());


// const date = new Date("March 16, 2030 14:25:00");

// date.toString();
// console.log(date.toString())
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toTimeString();
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toLocaleTimeString();
// console.log(date.toLocaleTimeString())
// // "2:25:00 PM"

// date.toUTCString();
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// date.toDateString();
// // "Sat Mar 16 2030"

// date.toISOString();
// // "2030-03-16T12:25:00.000Z"

// date.toLocaleString();
// // "3/16/2030, 2:25:00 PM"

// date.getTime();
// // 1899894300000

// *******
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 500);
// });

// Change value of isSuccess variable to call resolve or reject

// *****

// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// promise
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// *******


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
    }, 2000);
});

promise
    .then(value => {
        console.log(value); // 5
        return value * 2;
    })
    .then(value => {
        console.log(value); // 10
        return value * 3;
    })
    .then(value => {
        console.log(value); // 30
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Final task");
    });
