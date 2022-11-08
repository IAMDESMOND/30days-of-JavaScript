//Day 3 Exercises: level 1

//no.1
let firstName = 'Desmond';
let lastName = 'Emmanuel';
let country = 'Nigeria';
let city = 'Lagos';
let age = 16;
let isMarried = 'single';
let year = new Date().getFullYear;

console.log(typeof firstName,
            typeof lastName,
            typeof country,
            typeof city,
            typeof age,
            typeof isMarried,
            typeof year
    );

//no.2
console.log(typeof '10');

//no.3
console.log(parseInt(9.8));

//no.4
console.log(true);
console.log(1 === 1);
console.log(4 > 3);
console.log(false);
console.log(2 === 1);
console.log(4 < 3);

//no.5
console.log(4 > 3);  //true
console.log(4 >= 3);  //true 
console.log(4 < 3);  //false
console.log(4 <= 3);  //false
console.log(4 == 4);  //true
console.log( 4 === 4); //true
console.log(4 != 4);  //false
console.log(4 !== 4);  //false
console.log( 4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4') ; // false
console.log( ('jargon'.length) == ('python'.length));

//no.6

console.log(4 > 3 && 10 < 12);  // true
console.log(4 > 3 && 10 > 12); // false
console.log( 4 > 3 || 10 < 12);// true
console.log( 4 > 3 || 10 > 12);// true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log( !(4 === '4'));// true
console.log(!(('python'.includes('on')) && ('jargon'.includes('on'))))// false


//no.7
let datObj = new Date();

console.log(datObj.getFullYear())
console.log(datObj.getMonth() + 1);
console.log(datObj.getDate());
console.log(datObj.getDay());
console.log(datObj.getHours());
console.log(datObj.getMinutes());
console.log(datObj.getTime());
