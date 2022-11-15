//Day 3 Exercises: level 1

//no.1
// let firstName = 'Desmond';
// let lastName = 'Emmanuel';
// let country = 'Nigeria';
// let city = 'Lagos';
// let age = 16;
// let isMarried = 'single';
// let year = new Date().getFullYear;

// console.log(typeof firstName,
//             typeof lastName,
//             typeof country,
//             typeof city,
//             typeof age,
//             typeof isMarried,
//             typeof year
//     );

// //no.2
// console.log(typeof '10');

// //no.3
// console.log(parseInt(9.8));

// //no.4
// console.log(true);
// console.log(1 === 1);
// console.log(4 > 3);
// console.log(false);
// console.log(2 === 1);
// console.log(4 < 3);

// //no.5
// console.log(4 > 3);  //true
// console.log(4 >= 3);  //true 
// console.log(4 < 3);  //false
// console.log(4 <= 3);  //false
// console.log(4 == 4);  //true
// console.log( 4 === 4); //true
// console.log(4 != 4);  //false
// console.log(4 !== 4);  //false
// console.log( 4 != '4'); //false
// console.log(4 == '4'); //true
// console.log(4 === '4') ; // false
// console.log( ('jargon'.length) == ('python'.length));

// //no.6

// console.log(4 > 3 && 10 < 12);  // true
// console.log(4 > 3 && 10 > 12); // false
// console.log( 4 > 3 || 10 < 12);// true
// console.log( 4 > 3 || 10 > 12);// true
// console.log(!(4 > 3)); // false
// console.log(!(4 < 3)); // true
// console.log(!(false)); // true
// console.log(!(4 > 3 && 10 < 12)); // false
// console.log(!(4 > 3 && 10 > 12)); // true
// console.log( !(4 === '4'));// true
// console.log(!(('python'.includes('on')) && ('jargon'.includes('on'))))// false


// //no.7
// let datObj = new Date();

// console.log(datObj.getFullYear())
// console.log(datObj.getMonth() + 1);
// console.log(datObj.getDate());
// console.log(datObj.getDay());
// console.log(datObj.getHours());
// console.log(datObj.getMinutes());
// console.log(datObj.getTime());

//level 2 

//no.1

// let base = prompt('Enter base');
// let height = prompt('Enter height');
// let area = 0.5 * Number(base) * Number(height)

// console.log(`Base: ${base}`);
// console.log(`Height: ${height}`);
// console.log(`The Area of the triangle is ${area}`)

//no.2

// let sideA = Number(prompt('Enter side A'));
// let sideB = Number(prompt('Enter side B'));
// let sideC = Number(prompt('Enter side C'))
// let perimeter = sideA + sideB + sideC;

// console.log(`side A: ${sideA}`);
// console.log(`side B: ${sideB}`);
// console.log(`side C: ${sideC}`);
// console.log(`The perimeter of the triangle is ${perimeter}`)

//no.3

// let length = Number(prompt('Enter length'));
// let width = Number(prompt('Enter width'));
// let area =  length * width
// let perimeter = 2 * (length + width);
// console.log(`length: ${length}`);
// console.log(`width: ${width}`);
// console.log(`The Area of the rectangle is ${area}`)
// console.log(`The perimeter of the rectangle is ${perimeter}`)

//no.4
//  const pi = 3.14
//  let radius = Number(prompt('Enter Radius'));
//  let area =  pi * radius ** 2
//  let circumference = 2 * pi * radius;
//  console.log(`Radius: ${radius}`);
//  console.log(`The Area of the cicle is ${area}`)
//  console.log(`The circumference of the cicle is ${circumference}`)

//no.5
// let X1 = 0,
//     X2 = 1,
//     Y1 = 2 * X1 -2,
//     Y2 = 2 * X2 -2,
//     dY = Y2 - Y1,
//     dX = X2 - X1,
//     slope = dY/dX;

// console.log(slope);    

//no.6
// let x1 = 2,
//     y1 = 2,
//     x2 = 6,
//     y2 = 10,
//     dy = y2 - y1,
//     dx = x2 - x1,
//     m = dy/dx;

// console.log(m);    

// //no.7
// console.log(slope == m);

//no.8
// let X = -3;
// let Y = (X ** 2) + (6 * X) + 9

// Y == 0 ? console.log(`Y = 0 where X = ${X}`) : console.log(`Y = ${Y}`);

// //no.9
// let hours = prompt('Enter hours');
// let ratePerHour = prompt('Enter rate Per Hour');
// let weeklyEarning = Number(hours) * Number(ratePerHour)
// console.log(`hours: ${hours}`);
// console.log(`rate Per Hour: ${ratePerHour}`);
// console.log(`Your weekly Earning is ${weeklyEarning}`)

//n0.10
// 'desmond'.length > 7 ? console.log( 'your name is long') : console.log('your name is short.');

//no.11
// let firstName = 'Emmanuel'
// let lastName = 'Desmond'

// firstName.length > lastName.length 
// ? console.log( `Your first name, ${firstName} is longer than your family name, ${lastName}`) : console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);

//no.12
// let myAge = 25;
// let yourAge = 200;

// myAge > yourAge 
//    ? console.log(`I am ${myAge - yourAge} years older than you`)
//    : console.log(`I am ${yourAge - myAge} years older than you`);

//no.13
// let yourBirthYear = Number(prompt('Enter your Birth year'));
// let year = new Date().getFullYear();
// let yourAge = year - yourBirthYear;

// yourAge < 18
//     ? console.log(`You are ${yourAge}. You will be allowed to drive after ${18 - yourAge} years`)
//     : console.log(`You are ${yourAge}. You are old enough to drive`);

//no.14
// let year = new Date().getFullYear();
// let yearsLived = Number(prompt('Enter number of years you live'));
// let yourBirthYear = year - yearsLived
// let secondsInYear = 60 * 60 * 24 * 365;
// let secondsLived = yearsLived * secondsInYear;

// console.log(`You are ${yearsLived}, You have lived ${secondsLived} seconds, Your year of Birth is ${yourBirthYear}.`);

//n0.15
// let time = new Date(),
//     timeInYear = time.getFullYear(),
//     timeInMonth = time.getMonth(),
//     timeInDay = time.getDate(),
//     timeInHour = time.getHours(),
//     timeInMinutes = time.getMinutes();

// console.log(`${timeInYear}-${timeInMonth}-${timeInDay} ${timeInHour}:${timeInMinutes
// }`);    
// console.log(`${timeInDay}-${timeInMonth}-${timeInYear} ${timeInHour}:${timeInMinutes
// }`);    
// console.log(`${timeInDay}/${timeInMonth}/${timeInYear} ${timeInHour}:${timeInMinutes
// }`);    


//level 3

//no.1
// let time = new Date(),
//     timeInYear = time.getFullYear(),
//     timeInMonth = time.getMonth(),
//     timeInDay = time.getDate(),
//     timeInHour = 1,
//     timeInMinutes = 2;

// let hours = String(timeInHour).length < 2 ;
// let minutes = String(timeInMinutes).length < 2 ;

// hours !== minutes ? console.log(`${timeInYear}-${timeInMonth}-${timeInDay} 0${timeInHour}:0${timeInMinutes}`): console.log(`${timeInYear}-${timeInMonth}-${timeInDay} ${timeInHour}:${timeInMinutes}`);
