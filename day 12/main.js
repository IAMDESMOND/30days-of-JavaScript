let text2 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let salaries = text2.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)

const pattern = /[F/f]irst_?[Nn]ame/
const isValidVariable = (str) => {
    console.log(pattern.test(str));
}
isValidVariable('firstName')