
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

  // const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

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

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// if (confirm('Are you allergic to Honey')) {
//   shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
// };

// shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
// console.log(shoppingCart);

// if (countries.includes('Ethiopia')) {
//   console.log('ETHIOPIA');  
// };


// if (webTechs.includes('Sass')) {
//   console.log('Sass is a CSS preprocess');
// } else{
//  webTechs.push('Sass');
//  console.log(webTechs);
// };

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]
// console.log(fullStack)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// ages.sort();
// console.log(ages);
// console.log(`Min: ${ages[0]} \nMax: ${ages[ages.length -1]}`);

// let median;
// if (ages.length % 2 == 0) {
//   median = (ages[Math.floor(ages.length / 2)] + ages[Math.ceil(ages.length / 2)]) /2;
//   console.log('median:', median);
// } else {
//   median = Math.floor(ages.length / 2)
//   console.log('median:', ages[median]);
// };

// let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7]) / 2;
// console.log('average:', average);

// let range = ages[ages.length - 1] - ages[0];
// console.log(range);
// console.log(countries);
// // console.log(countries.splice(0, 10));

// if (countries.length % 2 == 0) {
//  console.log(countries[Math.floor(countries.length / 2)], countries[Math.ceil(countries.length / 2)])
// } else {
//   median = Math.floor(countries.length / 2)
//   console.log(median, countries.length);
//   console.log('median:', countries[median]);
// };

// let firstHalfOfCountries = countries.slice(0, median);
// let secondHalfOfCountries = countries.slice(median)
// console.log(firstHalfOfCountries, secondHalfOfCountries);