//  const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//  const arr = [];

//  const cars = ['Honda', 'Toyota', 'Kia', 'Nissan', 'Bentley', 'Tesla'];

//  console.log(cars.length)

//  let lastIndex = cars.length - 1;
//  let middleIndex = cars.length / 2
//  console.log(cars[0], cars[middleIndex], cars[lastIndex]);

//  const mixedArrayTypes = [2, 3, 'hello', true, false, null];

  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//  console.log(itCompanies);

//  console.log(itCompanies.length);

//  lastIndex = itCompanies.length - 1;
//  middleIndex = itCompanies.length / 2
//  console.log(itCompanies[0], itCompanies[middleIndex], itCompanies[lastIndex]);

//  console.log(itCompanies[0]);
//  console.log(itCompanies[1]);
//  console.log(itCompanies[2]);
//  console.log(itCompanies[3]);
//  console.log(itCompanies[4]);
//  console.log(itCompanies[5]);
//  console.log(itCompanies[6]);

//  console.log(itCompanies[0].toUpperCase());
//  console.log(itCompanies[1].toUpperCase());
//  console.log(itCompanies[2].toUpperCase());
//  console.log(itCompanies[3].toUpperCase());
//  console.log(itCompanies[4].toUpperCase());
//  console.log(itCompanies[5].toUpperCase());
//  console.log(itCompanies[6].toUpperCase());

//  console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`);

//  if (itCompanies.includes('kia')) {
//     console.log('kia') ;
//  } else {
//    console.log('company is not found');
//  };

// if (itCompanies[0].includes('o')) {
//     if (itCompanies[0].match(/o/gi).length > 1) {
//       console.log(itCompanies[0]);
//     }
// }

// if (itCompanies[1].includes('o')) {
//   if (itCompanies[1].match(/o/gi).length > 1) {
//     console.log(itCompanies[1]);
//   }
// }

// if (itCompanies[2].includes('o')) {
//   if (itCompanies[2].match(/o/gi).length > 1) {
//     console.log(itCompanies[2]);
//   }
// }

// if (itCompanies[3].includes('o')) {
//   if (itCompanies[3].match(/o/gi).length > 1) {
//     console.log(itCompanies[3]);
//   }
// }

// if (itCompanies[4].includes('o')) {
//   if (itCompanies[4].match(/o/gi).length > 1) {
//     console.log(itCompanies[4]);
//   }
// }

// if (itCompanies[5].includes('o')) {
//   if (itCompanies[5].match(/o/gi).length > 1) {
//     console.log(itCompanies[5]);
//   }
// }

// if (itCompanies[6].includes('o')) {
//   if (itCompanies[6].match(/o/gi).length > 1) {
//     console.log(itCompanies[6]);
//   }
// }

// itCompanies.sort();
// itCompanies.reverse();
// console.log(itCompanies.slice(0, 4));
// console.log(itCompanies.slice(-3)
// );


// // let middleIndex = Math.floor(itCompanies.length / 2);
// console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2)+1));

// itCompanies.shift();
// console.log(itCompanies.slice(Math.floor(itCompanies.length / 2) - 1, Math.floor(itCompanies.length / 2) + 1));

// itCompanies.pop();
// itCompanies.splice(0);
// console.log(itCompanies);

//level 2
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// text = text.replace(/[,.]/gi, '')
// console.log(text);

// const words = text.split(' ')

// console.log(words)
// console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// if (confirm('Are you allergic to Honey')) {
//   shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
// };

// shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
// console.log(shoppingCart);

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');  
};