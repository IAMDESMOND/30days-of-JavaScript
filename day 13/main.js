const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
console.table(countries)

console.assert(10 > 2 *5, 'alarm')
console.warn('alarm')
console.error('error')

console.time()
let i = 0
while (i <5) {
   console.log(i) 
   i++
}
console.timeEnd()

console.time()
let d = 0
do {
    console.log(d);
    d++
} while (d <=5);
console.timeEnd()


console.time()
for (const country of countries) {
    console.log(country);
}
console.timeEnd()


console.time()
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    console.log(element)
}
console.timeEnd()
