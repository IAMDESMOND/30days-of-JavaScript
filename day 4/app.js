//Day 3 :level 1

//no.1
// let yourAge = Number(prompt('Enter your age.'));

// if (yourAge > 18) {
//     console.log('you are old enough to drive')
// } else {
//     console.log(`you are left with ${18 - yourAge} years to drive.`)
// };

//no.2
// let yourAge = Number(prompt('Enter your age.'));
// let myAge = 16;


// if (yourAge > myAge) {
//     console.log(`You are ${yourAge - myAge} years older than me`)
// } else {
//     console.log(`I am ${myAge - yourAge} years older than you`)
// };

//no.3
// let a = 4
// let b = 3

// if (a > b) {
//     console.log(`${a} is greater than ${b}`);
// } else {
//     console.log(`${b} is greater than ${a}`);
// };

// a > b 
//    ? console.log(`${a} is greater than ${b}`)
//    : console.log(`${b} is greater than ${a}`);
    
//no.4

// let num = Number(prompt('Enter number'))
// let test = num % 2

// if (test = 0) {
//     console.log(`${num} is an even number`);
// } else {
//     console.log(`${num} is a odd number`); 
// };

//level 2

//no.1
// let num = Math.floor(Math.random() * 101)

// switch (true) {
//     case num < 50:
//         console.log(`${num}: F`)
//         break;
//     case num < 60 && num > 49:
//         console.log(`${num}: D`)
//         break;
//     case num < 70 && num > 59:
//         console.log(`${num}: C`)
//         break;
//     case num < 80 && num > 69:
//         console.log(`${num}: B`)
//         break;                 
//     case num < 101 && num > 79:
//         console.log(`${num}: A`)
//         break;
//     default:
//        console.log('not a number')
//         break;
// }

//no.2
// let monthUserInput =  prompt('Enter month');
// let month = monthUserInput.toLowerCase();

// switch (month) {
//     case 'january':
//         console.log('Season is winter')
//         break;
//     case 'february':
//         console.log('Season is winter')
//         break;
//     case 'march':
//         console.log('Season is spring')
//         break;
//     case 'april':
//         console.log('Season is spring')
//         break;
//     case 'may':
//         console.log('Season is spring')
//         break;
//     case 'june':
//         console.log('Season is summer')
//         break;
//     case 'july':
//         console.log('Season is summer')
//         break;                             
//     case 'august':
//         console.log('Season is summer')
//         break;
//     case 'september':
//         console.log('Season is autumn')
//         break; 
//     case 'october':
//         console.log('Season is autumn')
//         break;
//     case 'november':
//         console.log('Season is autumn')
//         break;
//     case month == 'december':
//         console.log('Season is winter')
//         break;                
//     default:
//         console.log('not a month')
//         break;
// }

//no.3
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Monday is working day')
//     break
//   case 'tuesday':
//     console.log('Tuesday is working day')
//     break
//   case 'wednesday':
//     console.log('Wednesday is working day')
//     break
//   case 'thursday':
//     console.log('Thursday is working day')
//     break
//   case 'friday':
//     console.log('Friday is working day')
//     break
//   case 'saturday':
//     console.log('Saturday is weekend')
//     break
//   case 'sunday':
//     console.log('Sunday is weekend')
//     break
//   default:
//     console.log('It is not a week day.')
// }

//level 3

//no.1
//  let monthUserInput =  prompt('Enter month');
//  let month = monthUserInput.toLowerCase();
//  switch (month) {
//      case 'january':
//          console.log('january has 31 days')
//          break;
//      case 'february':
//          console.log('february has 28 days, and 29 on leap years')
//          break;
//      case 'march':
//          console.log('march has 30 days')
//          break;
//      case 'april':
//          console.log('april has 31 days')
//          break;
//      case 'may':
//          console.log('may has 30 days')
//          break;
//      case 'june':
//          console.log('june has 31 days')
//          break;
//      case 'july':
//          console.log('july has 30 days')
//          break;                             
//      case 'august':
//          console.log('august has 31 days')
//          break;
//      case 'september':
//          console.log('september has 30 days')
//          break; 
//      case 'october':
//          console.log('october has 31 days')
//          break;
//      case 'november':
//          console.log('november has 30 days')
//          break;
//      case 'december':
//          console.log('december has 31 days')
//          break;                
//      default:
//          console.log('not a month')
//          break;
//  }
