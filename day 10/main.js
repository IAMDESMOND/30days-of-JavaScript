
 const countries = ['Finland', 'Sweden', 'Norway', 'japan', 'Nigeria']

const emptySet = new Set()
const setOfTen = new Set()

for (let i = 0; i < 11; i++) {
   setOfTen.add(i)
}

setOfTen.delete(2)
setOfTen.clear()

let stringSet
for (let i = 0; i < 4; i++) {
    stringSet = new Set(countries)
 }
 

console.log(stringSet);
console.log(setOfTen);

const country = [
    ['Nigeria', 7],
    ['South-Africa', 4]
]

let countryMap = new Map(country)
console.log(countryMap);

 const a = [4, 5, 8, 9]
 const b = [3, 4, 5, 7]
 const c = [...a, ...b]
 const d = [a, b]


 let setA = new Set(a)
 let setB = new Set(b)
 let aUB = new Set(c)

 console.log(aUB); 

 let aIntersectB = a.filter(num => {
    return setB.has(num)
 })
 let intersectSet = new Set(aIntersectB)

 console.log(intersectSet);