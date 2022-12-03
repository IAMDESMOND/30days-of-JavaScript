// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// };

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++
// };

// do {
//     console.log(i);
//     i++
// } while (i <= 10);

// for (let i = 10; i <= 0; i--) {
//     console.log(i);
// };

// let i = 10;

// while (i <= 0) {
//     console.log(i);
//     i--
// };

// do {
//     console.log(i);
//     i--
// } while (i <= 0);

// let n = Math.floor(Math.random() * 31)
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// };

// let hashTag = '#';
// console.log(hashTag);
// for (let i = 0; i <= 5; i++) {
//     hashTag += '#';
//     console.log(hashTag)
// };

// for (let i = 0; i <=10; i++) {
//     let timeTable = `${i} x ${i} = ${i * i}` ;
//     console.log(timeTable);
// };

// console.log('i    i^2   i^3');
// for (let i = 0; i <=10; i++) {
//     console.log(`${i}    ${i ** 2}    ${i ** 3}`);
// };

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0 && i != 0) {
//         console.log(i);
//     }   
// };


// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0 && i != 0) {
//         console.log(i);
//     }   
// };

// for (let i = 0; i <= 100; i++) {
// let flag = 0;
//     for (let k = 2; k < i; k++) {
//         if (i % k == 0) {
//             flag = 1;
//             break
//         }
//     }
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
    
// }

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)
