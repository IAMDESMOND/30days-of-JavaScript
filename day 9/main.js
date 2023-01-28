// forEach loops/iterates through elements of an array
// filter filters elements of an array which fulfill with its conditions
// reduce takes an accumulator and current and return a single value,  it also takes and initial value
// map iterates through an array and modifies it elements and returns a new array
// they all take in a callback function

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((a) => console.log(a))
names.forEach((a, b) => console.log(a, b))
numbers.forEach(a => console.log(a))

const upperCountryArr = countries.map(a => a.toUpperCase())
console.log(upperCountryArr);

const lengthCountryArr = countries.map(a => a.length)
console.log(lengthCountryArr);


const upperNameArr = names.map(a => a.toUpperCase())
console.log(upperNameArr);

const mappedProductPrices = products.map(a => {
  return `${a.product}:${a.price}`
})
console.log(mappedProductPrices);

const landCountries = countries.filter(a => a.includes('land'))
console.log(landCountries);

const sixCharacterCountries = countries.filter(function (country) {
  return country.length == 6
})
console.log(sixCharacterCountries);

const sixCharacterAndMoreCountries = countries.filter(a => a.length >= 6)
console.log(sixCharacterAndMoreCountries);

const countriesWithE = countries.filter(a => a.indexOf('E') == 0)
console.log(countriesWithE);

const pricesWithValues = products.filter(a => a.price > 0)
console.log(pricesWithValues);

function getStringLists(arr) {
  let val = arr.filter(item => typeof item === "string")
  return val
}
const mixedArr = [2, 'jjfj', 3, true]
console.log(getStringLists(mixedArr));

const sumOfArr = numbers.reduce((acc, cur) => {
  let sum = acc + cur
  return sum
}, 0)
console.log(sumOfArr)


let joinCountries = countries.reduce((acc, cur) => {
  return acc +', '+ cur;
})
console.log(joinCountries);

//some takes a callback function and returns a booleans if some elements are similar in one aspect
//every checks if all elements are similar in one aspect

const someIsGreaterThan6 = names.some(name => {
  return name.length > 6
})
console.log(someIsGreaterThan6);

const everyContainsLand = names.every(name => {
  return name.includes('land')
})
console.log(everyContainsLand);

// find return the first elements of an array which fulfills its condition
// findIndex returns the index of the first element which fulfills it condition

const firstCountryWithSixLetters = countries.find(item => {
  return item.length == 6
})
console.log(firstCountryWithSixLetters);


const indexOfFirstCountryWithSixletters = countries.findIndex(item => {
  return item.length == 6
})
console.log(indexOfFirstCountryWithSixletters);

const findIndexOfNorway = countries.findIndex(item => item == 'Norway')
console.log(findIndexOfNorway);

const findIndexOfRussia = countries.findIndex(item => item == 'Russia')
console.log(findIndexOfRussia);

const fullPrice = products.map(product => product.price).filter(price => price > 0).reduce((acc, curr) => acc + curr);

function catergorizeCountries(arr) {
  const catergory = {}

  catergory.landCountries = arr.filter(a => a.includes('land'))
  catergory.iaCountries = arr.filter(a => a.includes('ia'))
  catergory.islandCountries = arr.filter(a => a.includes('island'))
  catergory.stanCountries = arr.filter(a => a.includes('stan'))

  return catergory
}

console.log(catergorizeCountries(countries));
console.log(countries.indexOf('Canada'));
function firstFiveCountries(arr) {
  const firstFive = arr.filter(item => {
    return arr.indexOf(item) < 5
  })
  return firstFive
}
console.log(firstFiveCountries(countries));

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {
  mean: function (arr) {
    let mean = (arr.reduce((acc, curr) => acc + curr)) / arr.length

    return Math.round(mean)
  }
  // median: function (arr) {
  //   let orderedArr = arr.sort(function (a, b) {
  // return a - b
  // })
  //   let median = orderedArr[orderedArr.length / 2]

  //   return median
  // }
} 

console.log('Mean: ', statistics.mean(ages)) // 30