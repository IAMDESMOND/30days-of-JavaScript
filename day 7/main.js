// function printFullName() {
//     let firstName = 'Desmond',
//         lastName = ' Emmanuel'

//     console.log(firstName + lastName);    
// }

// printFullName()

// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
// }
// console.log(fullName('Desmond', 'Emmanuel'));

// function addNumbers(num1, num2) {
//     sum = num1 + num2
//     return sum
// }

// console.log(addNumbers(10, 20))

// function areaOfRectangle(length, width) {
//     let area = length * width;
//     return `area of rectangle = ${area}`
// }
// console.log(areaOfRectangle(2, 2)); 

// function perimeterOfRectangle(length, width) {
//     let perimeter = 2 * (length + width);
//     return  `perimeter of rectangle = ${perimeter}`
// }
// console.log(perimeterOfRectangle(2, 2));

// function volumeOfRectPrism(length, width, height) {
//     let volume = length * width * height;
//     return volume
// }

// console.log(volumeOfRectPrism(2, 2, 2))

// function areaOfCircle(radius) {
//     let area = Math.PI * radius * radius
//     return area      
// }

// console.log(areaOfCircle(7));

// function circumOfCircle(radius) {
//     let circum = 2 * Math.PI * radius
//     return circum      
// }

// console.log(circumOfCircle(7));

// function densityOfSubstances(mass, volume) {
//     let density = mass / volume
//     return density 
// }

// console.log(densityOfSubstances(100, 50))

// function calcSpeed(distance, time) {
//     let speed = distance / time
//     return speed
// }
// console.log(calcSpeed(120, 20))

// function calcWeight(mass, gravity = 9.8) {
//     area = mass * gravity
//     return area      
// }
// console.log(calcWeight(10))

// function convertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * (9/5)) + 32
//     return fahrenheit
// }
// console.log(convertCelsiusToFahrenheit(100))

// function BMI(weight, height) {
//     let bmi = weight / (height * height)

//     switch (true) {
//         case bmi < 18.5:
//             return `${bmi} Underweight`
//             break;
//         case (bmi == 18.5) && (bmi <= 24.9):
//             return `${bmi} Normal weight`
//             break;
//         case (bmi == 25) && (bmi <= 29.9):
//             return `${bmi} Overweight`
//             break;
//         case (bmi >= 30):
//             return `${bmi} Overweight`
//             break;
//         default:
//             break;
//     }
// }

// console.log(BMI(6000, 10))

// function checkSeason(month) {
//     switch (month) {
//     case 'january':
//         return ('Season is winter')
//         break;
//     case 'february':
//         return ('Season is winter')
//         break;
//     case 'march':
//         return ('Season is spring')
//         break;
//     case 'april':
//         return ('Season is spring')
//         break;
//     case 'may':
//         return ('Season is spring')
//         break;
//     case 'june':
//         return ('Season is summer')
//         break;
//     case 'july':
//         return ('Season is summer')
//         break;                             
//     case 'august':
//         return ('Season is summer')
//         break;
//     case 'september':
//         return ('Season is autumn')
//         break; 
//     case 'october':
//         return ('Season is autumn')
//         break;
//     case 'november':
//         return ('Season is autumn')
//         break;
//     case 'december':
//         return ('Season is winter')
//         break;                
//     default:
//         return ('not a month')
//         break;
// }
// }

// console.log(checkSeason('may'))

// function findMax(arg1, arg2, arg3) {
//     const arr = [arg1, arg2, arg3]
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (max < element) {
//             max = element
//         }
//     }
//     return max
// }

// console.log(findMax(0, 10, 5))


// function printArray(arr) {
//     for (const obj of arr) {
//         console.log(obj);
//     }
// }

// printArray([1, 2, 3, 5])
// let time = new Date()

// function showDateTime() {
//     return `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
// };

// console.log(showDateTime())

// function reverseArray(arr) {
//    let reverseOfArr = []
//    for (let i = arr.length -1; i >= 0; i--) {
//     const element = arr[i];
//     reverseOfArr.push(element)
//    }
//    return reverseOfArr
// }

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// function capitalizeArray(arr) {
//     let capitalizedArray = []
//     for (const obj of arr) {
//         capitalizedArray.push(obj.toUpperCase())
//     }
//     return capitalizedArray
// }
// console.log(capitalizeArray(['a', 's']))

// const arr = [];

// function addItem(item) {
//     arr.push(item)
// };
// addItem('buchi')
// addItem('eliza')
// addItem('chinedu')
// addItem('eliza')

// function removeItem(index) {
//     arr.splice(index-1, 1)
// };
// console.log(removeItem(2));

// console.log(arr);

// function sumOfNumbers(num) {
//     let sum = 0
//     for (let i = num; i > 0; i--) {
//         sum += i
//     }
// return sum
// }

// console.log(sumOfNumbers(4))

// function sumOfOdds(num) {
//   let sum = 0
//   for (let i = num; i > 0; i--) {
//     if (i % 2 !== 0) {
//         sum += i
//         console.log(i);
//     }
//   }
// return sum
// }

// console.log(sumOfOdds(7));


// function sumOfEvens(num) {
//     let sum = 0
//     for (let i = num; i > 0; i--) {
//       if (i % 2 == 0) {
//           sum += i
//           console.log(i);
//       }
//     }
//   return sum
//   }

//   console.log(sumOfEvens(7))

//   function evensAndOdds(num) {
//     if (num > -1) {
//         let numOfOdd = 0
//         let numOfEven = 0
//         for (let i = num; i > 0; i--) {
//           if (i % 2 !== 0) {
//               numOfOdd += 1
//           }else{
//               numOfEven += 1
//           }
//         }
//         return `The number of odds are ${numOfOdd}.\n
//         The number of evens are ${numOfEven}.`
//     } else {
//         return `Not a positive integer`
//     }
//   }
  
//   console.log(evensAndOdds(100));

//   function sumOf() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         sum += element
//     }
//     return sum
//   }

//   console.log( sumOf(1, 2, 3, 4));
 
// function randomHexaNumberGenerator() {
// 	const alpha = ["A","B","C","D","E","F"];
	
// 	 let id = Array(7)
// 	 id[0] = '#'
	
// 	for (let i = 1; i < 7; i++) {
// 	     let letter =  alpha[Math.floor(Math.random() * 6)].toLowerCase()
// 	     let num = Math.floor(Math.random() * 10)
// 	     let idCharacter = [letter, num]
	
// 	     id[i] = idCharacter[Math.floor(Math.random() * 2)]
// 	 } 
	
// 	return id.join('');
	
// }

// console.log(randomHexaNumberGenerator())

const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// function userIdGenerator() {
// 	let id = Array()
	
// 	for (let i = 0; i < 7; i++) {
// 	    let upperCaseLetter =  alpha[Math.floor(Math.random() * 26)]
//         let lowerCaseLetter =  alpha[Math.floor(Math.random() * 26)].toLowerCase()
// 	    let num = Math.floor(Math.random() * 10)
// 	    let idCharacter = [num, upperCaseLetter, lowerCaseLetter]
	
// 	    id[i] = idCharacter[Math.floor(Math.random() * 3)]
// 	} 
	
// 	return id.join('')
// }
// console.log(userIdGenerator());


// function userIdGeneratedByUser() {
// let numCharacters = prompt('input number of characters')
// let numOfId = prompt('number of id to generated')
// let id = Array()
// let ids = Array()
	
// 	for (let i = 0; i < numOfId; i++) {
	
// 	for (let i = 0; i < numCharacters; i++) {
// 	    let upperCaseLetter =  alpha[Math.floor(Math.random() * 26)]
//         let lowerCaseLetter =  alpha[Math.floor(Math.random() * 26)].toLowerCase()
// 	    let num = Math.floor(Math.random() * 10)
// 	    let idCharacter = [num, upperCaseLetter, lowerCaseLetter]
//         id[i] = idCharacter[Math.floor(Math.random() * 3)]
// 	} 
//     ids.push(id.join(''))
// }
	
// 	return ids
// }
// console.log(userIdGeneratedByUser());



function rgbColorGenerator() {
    let arrNum = Array(3)
	for (let i = 0; i < 3; i++) {
	     let num = Math.floor(Math.random() * 256);
	
	     arrNum[i] = num
	 } 
	
	let rgbColor = `rgb(${arrNum.join()})`
	return (rgbColor)
}

console.log(rgbColorGenerator());

