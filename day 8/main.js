// //scope.js
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// letsLearnScope()
// console.log(a, b) // accessible

// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
//   }
  
//   //Object methods: Object.assign, Object.keys, Object.values, Object.entries
//   //hasOwnProperty

//   const copyPerson = Object.assign({}, person)
//   console.log(copyPerson)

//   const values = Object.values(copyPerson)
// console.log(values)

// const entries = Object.entries(copyPerson)
// console.log(entries)

// console.log(copyPerson.hasOwnProperty('name'))
// console.log(copyPerson.hasOwnProperty('score'))

// const dog = {}

// dog.name = 'zion'
// dog.legs = 4
// dog.color = 'white'
// dog.bark = true

// console.log(Object.values(dog));

// dog.breed = 'german shepherd'
// dog.getDogInfo = function () {
//     return `the name of the dog is ${this.name}, it has ${this.legs} legs...`
// }

// console.log(dog.getDogInfo());



const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
let winner;
let max = 0
let numberOfLoggedIn = 0
let greatThan50Points = 0
const mernStackDevs = []

for (const user in users) {
  
  if (Object.hasOwnProperty.call(users, user)) {
    const element = users[user];
    
    if (element.skills.length > max) {
      max = element.skills.length
      winner = user
    }
    
    if (element.isLoggedIn == true) {
      numberOfLoggedIn += 1
    }

    if (element.points >= 50) {
      greatThan50Points += 1
    }

    if (element.skills.includes('MongoDB')) {
      
    if (element.skills.includes('Express')) {
      
    if (element.skills.includes('React')) {
      
    if (element.skills.includes('Node')) {
      mernStackDevs.push(user)
    }
    }
    }
    }

  }
}
console.log(`${winner} has more skills. ${numberOfLoggedIn} users are logged in. ${greatThan50Points} users have greater than or equal to 50 points ` )
// console.log(mernStackDevs);
// const countries = {
//   name: 'Nigeria',
//   capital: 'Abuja',
//   Population: 'alot',
//   languages: ['igbo', 'yoruba', 'hausa']
// }

// console.log(countries.name, countries.Population, countries.languages
//   );

//  users.name = 'Desmond'

//  console.log(users);
// console.log( Object.keys(users));
// console.log(Object.values(users));

//  const personAccount = {
//   firstName: 'Desmond',
//   lastName: 'Emmanuel',
//   incomes: {
//     art: 20000,
//     coding: 40000
//   },
//   expenses: {
//     food: 5000,
//     rent: 6000
//   },
//   totalIncome: function() {
//     let artIncome = this.incomes.art
//     let codingIncome = this.incomes.coding
//     let totalIncome = artIncome + codingIncome
//     return totalIncome
//   },
//   totalExpenses: function () {
// 	let foodExpense = this.expenses.food
// 	    let rentExpense = this.expenses.rent
// 	    let totalExpense = foodExpense + rentExpense
// 	    return totalExpense
// }
//   ,
//   acctBalance: function () {
//     let accountBalance = this.totalIncome() - this.totalExpenses()
//     return accountBalance
//   }
//  }

//  console.log(personAccount.acctBalance())

// const users = [
//   {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt:'08/01/2020 9:00 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt:'08/01/2020 9:30 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt:'08/01/2020 9:45 AM',
//       isLoggedIn: true
//   },
//   {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt:'08/01/2020 9:50 AM',
//       isLoggedIn: false
//   },
//   {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt:'08/01/2020 10:00 AM',
//       isLoggedIn: false
//   }
//   ];

//   const products = [
// {
//   _id: 'eedfcf',
//   name: 'mobile phone',
//   description: 'Huawei Honor',
//   price: 200,
//   ratings: [
//     { userId: 'fg12cy', rate: 5 },
//     { userId: 'zwf8md', rate: 4.5 }
//   ],
//   likes: []
// },
// {
//   _id: 'aegfal',
//   name: 'Laptop',
//   description: 'MacPro: System Darwin',
//   price: 2500,
//   ratings: [],
//   likes: ['fg12cy']
// },
// {
//   _id: 'hedfcg',
//   name: 'TV',
//   description: 'Smart TV:Procaster',
//   price: 400,
//   ratings: [{ userId: 'fg12cy', rate: 5 }],
//   likes: ['fg12cy']
// }
// ]

//  const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// function userIdGenerator() {
// 	let id = Array()
	
// 	for (let i = 0; i < 6; i++) {
//       let lowerCaseLetter =  alpha[Math.floor(Math.random() * 26)].toLowerCase()
// 	    let num = Math.floor(Math.random() * 10)
// 	    let idCharacter = [num, lowerCaseLetter]
	
// 	    id[i] = idCharacter[Math.floor(Math.random() * 2)]
// 	} 
	
// 	return id.join('')
// }

// // function showDateTime() {
// //   let time = new Date()
// //     return `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
// // };
// // function signUp(username, email, password){
// //   let acctDetails
// //   let flag = 0
// //  for (const user of users) {
// //   if (user.email == email) {
// //     flag += 1
// //   }
// //  }
// //  if (flag == 0) {
// //   acctDetails = {
// //     _id: userIdGenerator(),
// //     username: username,
// //     email: email,
// //     password: password,
// //     createdAt: showDateTime(),
// //     isLoggedIn: true
// //     }
// //     users.push(acctDetails)
// //  } else {
// //   return `This user already exists` 
// //  }

// //  return `Acct successfully created ${acctDetails.username}`
// // }

// // console.log(signUp('dezy', 'emmades247@gmail.com', 'Dezy247'));

// // function signIn(email, password) {
// //   let acctDetails
// //   let flag = 0
// //  for (const user of users) {
// //   if (user.email == email && user.password == password) {
// //     flag += 1
// //     acctDetails = user
// //   }
// //  }
// //  if (flag == 1) {
// //   return `Welcome back ${acctDetails.username}`
// //  } else {
// //   return `you do not have an Acct Please Sign Up`
// //  }
// // }

// // console.log(signIn('emmades247@gmail.com', 'Dezy247'));

// function rateProduct(userId, rating, productName) {
//   let rateDetails = { 
//     userId: userId, 
//     rate: rating }
  
//  for (const product of products) {
// 	 if (product.name == productName) {
// 	    product.ratings.push(rateDetails)
// 	  }
// }
// }

// rateProduct(userIdGenerator(), 2, 'TV')

// console.log(products);

// function averageRating(productName) {
//   let sum = 0 
//   let average = 0
//   for (const product of products) {
//     if (product.name == productName) {
//        for (let i = 0; i < product.ratings.length; i++) {
//         const element = product.ratings[i];
//         sum += element.rate 
//        }
//        average = sum / product.ratings.length
//      }
//     }

//     return average
// }

// console.log(averageRating('TV'))

// function likeProduct(userId, productName) {
 
//  for (const product of products) {
//     if (product.likes.includes(userId)) {
//       product.likes.splice(product.likes.indexOf(userId), 1)
//     } else {
//       if (product.name == productName) {
// 	    product.likes.push(userId)
// 	  }
//     }
// }
// }
// likeProduct('ggggg', 'mobile phone')
// likeProduct('hhhhh', 'mobile phone')
// likeProduct('hhhhh', 'mobile phone')
// likeProduct('hhhhh', 'mobile phone')

// console.log(products)

