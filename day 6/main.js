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

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum)

// let sumOfEven = 0;
// let sumOfOdd = 0;
// const arr = []

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sumOfEven += i;
//     }else{
//         sumOfOdd += i;
//     }
// }

// console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}.`);

// arr.push(sumOfEven, sumOfOdd);
// console.log(arr);

// const arr = [];

// for (let i = 0; i < 5; i++) {
//     let num = Math.floor(Math.random() * 100);
//     arr.push(num);
// }

// console.log(arr);


// const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// let id = Array(6)

// for (let i = 0; i < 6; i++) {
//     let letter =  alpha[Math.floor(Math.random() * 26)].toLowerCase()
//     let num = Math.floor(Math.random() * 10)
//     let idCharacter = [letter, num]

//     id[i] = idCharacter[Math.floor(Math.random() * 2)]
// } 

// console.log(id.join(''));

/* const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let id = Array(Math.floor(Math.random() * 20 + 5))

for (let i = 0; i < id.length; i++) {
    	let letter =  alpha[Math.floor(Math.random() * 26)].toLowerCase()
    	let num = Math.floor(Math.random() * 10)
    	let idCharacter = [letter, num]

    id[i] = idCharacter[Math.floor(Math.random() * 2)]
} 

console.log(id.join(''));*/

/*const alpha = ["A","B","C","D","E","F"];

 let id = Array(6)
 id[0] = '#'

for (let i = 1; i < 6; i++) {
     let letter =  alpha[Math.floor(Math.random() * 6)].toLowerCase()
     let num = Math.floor(Math.random() * 10)
     let idCharacter = [letter, num]

     id[i] = idCharacter[Math.floor(Math.random() * 2)]
 } 


console.log(id.join(''));*/

/*let arrNum = Array(3)

for (let i = 0; i < 3; i++) {
     let num = Math.floor(Math.random() * 256);

     arrNum[i] = num
 } 

let rgbColor = `rgb(${arrNum.join()})`
console.log(rgbColor)*/

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const newArr = []
// const countryLength = []
// const countryAbbr = []
// const arrOfArray = []
// const landCountries = []
// const iaLands = []


// for (const country of countries) {
//         newArr.push(country.toUpperCase())
// 	countryLength.push(country.length)
// 	countryAbbr.push(country.slice(0, 3).toUpperCase())
// 	arrOfArray.push([country.toUpperCase(), country.slice(0, 3).toUpperCase(), country.length])
//   if (country.match('land')) {
//     landCountries.push(country)
//   }
//   if (country.match('ia')) {
//     iaLands.push(country)
//   }
// }


// console.log(newArr)
// console.log(countryLength)
// console.log(countryAbbr)
// console.log(arrOfArray)

// if (landCountries.length > 0) {
//   console.log(landCountries)
// }else{
//   console.log('All these countries are without land');
// }

// if (iaLands.length > 0) {
//   console.log(iaLands)
// }else{
//   console.log('All these countries are without iaLands')
// }

// let highest = countries[0];

// for (let i = 1; i < countries.length; i++) {
//   if (highest.length < countries[i].length) {
//     highest = countries[i];
//   }
// }

// console.log(highest);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
// const newArr = []


// for (const webTech of webTechs) {
//   newArr.push([webTech, webTech.length])
//   console.log(webTech)
// }
// newArr

const mernStack = [
  'MongoDB',
  'Express',
  'React', 
  'Node'
];

// const firstLetterArr = []


// for (const mern of mernStack) {
//   firstLetterArr.push(mern.charAt(0))
// }

// firstLetterArr

// let acronym = firstLetterArr.join('')
// console.log(acronym)

// const techs= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// for (const tech of techs) {
//   console.log(tech);
// }

// const fruits = [
//  'banana',
//  'orange',
//  'mango',
//  'lemon'
// ]

// const newFruit = []

// for (let i = fruits.length -1; i > -1; i--) {
//     console.log(i);
//     newFruit.push(fruits[i])
// }

// console.log(newFruit)

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ];

// for (let i = 0; i < fullStack.length; i++) {
//     for (let k = 0; k < fullStack[i].length; k++) {
//         console.log(fullStack[i][k])        
//     }    
// }


console.log(countries);
const copyCountries = [];
const lengthFour = [];
let highest = countries[0] ;
const landCountry = []
const twoWord = []

for (const country of countries) {
  copyCountries.push(country)
  if (highest.length < country.length) {
    highest = country
  }
if (country.match('land')) {
  landCountry.push(country)
}
if (country.match(' ')) {
  twoWord.push(country)
}
  if(country.length == 4){
    lengthFour.push(country)
  }
}

console.log(lengthFour);

console.log(copyCountries);

const sortedCountries = copyCountries.sort();

console.log(sortedCountries);

const sortedMernStack = mernStack.sort();
const sortedWebTechs = webTechs.sort();

console.log(sortedMernStack, sortedWebTechs);

const newCountry = []

for (let i = countries.length -1; i > -1; i--) {
    newCountry.push(countries[i].toUpperCase())
}

console.log(newCountry)
console.log(highest );
console.log(landCountry);
console.log(twoWord);