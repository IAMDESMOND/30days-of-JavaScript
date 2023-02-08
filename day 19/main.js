function outerFunction() {
    let item = 0
    function innerfunction() {
        item++
    }
    return innerfunction()
}

function outerFunction() {
    let item = 0
    function incrementation() {
        item++
        return item
    }
    function decrementation() {
        item--
        return item
    }
    function square() {
        item ** 2
        return item
    }
}

function personAccount () {
    let firstname = 'John'
    let lastname = 'Doe'
    let age = 16
    let incomes = {
        freelance: 3000,
        art: 4000,
        fxtrading: 5000
    }
    let expenses = {
        food: 300,
        rent: 3000
    }
    
    totalIncome = () => {
        let total = 0;
        for (const income in incomes) {
            if (Object.hasOwnProperty.call(incomes, income)) {
                const item = incomes[income];
               total += item
                 
            }
        }
        return total
    },
    totalExpense = () =>{
        let total = 0;
        for (const expense in expenses) {
            if (Object.hasOwnProperty.call(expenses, expense)) {
                const item = expenses[expense];
               total += item
                 
            }
        }
        return total
    }
    
    acctBalance = () =>{
        return totalIncome() - totalExpense()
    }
    
    accountInfo = () =>{
        let skills = Object.keys(incomes)
        return `Users name is ${firstname}, User is ${age} yrs old, and ${firstname} earns a living through ${skills[0]}.`
    }
    
    addIncome = (item, income) => {
        incomes[item] = income    

        return incomes
    }
    
    addExpense = (item, expense) => {
        expenses[item] = expense    

        return expenses
    }

    return {
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        totalIncome: totalIncome(),
        acctInfo: accountInfo(),
        addIncome: addIncome()
    }
}

const personAcct = personAccount()

console.log(personAcct.totalIncome);
console.log(personAcct.totalExpense);
console.log(personAcct.acctBalance);
console.log(personAcct.acctInfo);

