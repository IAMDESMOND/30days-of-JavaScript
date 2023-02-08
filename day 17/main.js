localStorage.clear()
const student = {
    firstname: 'desmond',
    lastname: 'emmanuel',
    age: 16,
    country: 'nigeria',
    city: 'lagos'
}

for (const user in student) {
    if (Object.hasOwnProperty.call(student, user)) {
        const info = student[user];
        localStorage.setItem(user, info)
    }
}

const personAccount = {
    firstname: 'John',
    lastname: 'Doe',
    age: 16,
    incomes: {
        freelance: 3000,
        art: 4000,
        fxtrading: 5000
    },
    expenses: {
        food: 300,
        rent: 3000
    },
    totalIncome(){
        let total = 0;
        for (const income in this.incomes) {
            if (Object.hasOwnProperty.call(this.incomes, income)) {
                const item = this.incomes[income];
               total += item
                 
            }
        }
        return total
    },
    totalExpense(){
        let total = 0;
        for (const expense in this.expenses) {
            if (Object.hasOwnProperty.call(this.expenses, expense)) {
                const item = this.expenses[expense];
               total += item
                 
            }
        }
        return total
    },
    acctBalance(){
        return this.totalIncome() - this.totalExpense()
    },
    accountInfo(){
        let skills = Object.keys(this.incomes)
        return `Users name is ${this.firstname}, User is ${this.age} yrs old, and ${this.firstname} earns a living through ${skills[0]}.`
    },
    addIncome(item, income){
        this.incomes[item] = income    

        return this.incomes
    },
    addExpense(item, expense){
        this.expenses[item] = expense    

        return this.expenses
    }
}

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.acctBalance());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome('cooking', 2000));
console.log(personAccount.addExpense('gym', 2000));