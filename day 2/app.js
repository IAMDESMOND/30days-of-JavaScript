//day 2 Exercises: level 1

//no.1
let challenge = '30 Days Of JavaScript';

//no.2
console.log(challenge);

//no.3
console.log(challenge.length);

//no.4
console.log(challenge.toUpperCase());

//no.5
console.log(challenge.toLowerCase());

//no.6
console.log(challenge.substring(0, 2));

//no.7
console.log(challenge.substring(2, 21));

//no.8
console.log(challenge.includes('Script'));

//no.9
console.log(challenge.split(''));

//no.10
console.log(challenge.split(' '));

//no.11
let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(brands.split(','))

//no.12
console.log(challenge.replace('30 Days Of JavaScript', '30 Days Of Python'));

//no.13
console.log(challenge.charAt(15))

//no.14
console.log(challenge.charCodeAt(challenge.indexOf('J')))

//no.15
console.log(challenge.indexOf('a'))

//no.16
console.log(challenge.lastIndexOf('a'));

//no.17
let conjunction = 'you cannot end a sentence with because because because is a conjunction';

console.log(conjunction.indexOf('because'));

//no.18
console.log(conjunction.lastIndexOf('because'));

//no.19
console.log(conjunction.search('because'));

//no.20
let trimSubject = '  hello world  '

console.log(trimSubject.trim());

//no.21
console.log(challenge.startsWith('30'));

//no.22
console.log(challenge.endsWith('JavaScript'));

//no.23
let firstHalf = '30days of';

console.log(firstHalf.concat(' JavaScript'))

//no.24
console.log(challenge.repeat(2))



//day 2 Exercise:level 2

//no.1
console.log("The quote 'there is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another");

//no.2
console.log(`"love is not about patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so dont't just give money but reach out your hand instead."`)

//no.3
console.log(typeof '10');

console.log(typeof parseInt('10'));

//no.4
console.log(parseFloat('9.8'))

console.log(Math.round(parseFloat('9.8')));

//no.5
let python = 'python',
    jargon = 'jargon';

console.log(python.includes('on'))
console.log(jargon.includes('on'));

//no.6
let testSub = 'i hope this course is not full of jargon';

console.log(testSub.includes('jargon'))

//no.7
console.log(Math.ceil(Math.random() * 100))

//no.8
// i don't know


//no.9
console.log(Math.ceil(Math.random() * 255))

//no.10
let stringData = 'javaScript'

console.log(stringData.charAt(Math.ceil(Math.random() * stringData.length)));
