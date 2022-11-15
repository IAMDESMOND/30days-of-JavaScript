// //day 2 Exercises: level 1

// //no.1
// let challenge = '30 Days Of JavaScript';

// //no.2
// console.log(challenge);

// //no.3
// console.log(challenge.length);

// //no.4
// console.log(challenge.toUpperCase());

// //no.5
// console.log(challenge.toLowerCase());

// //no.6
// console.log(challenge.substring(0, 2));

// //no.7
// console.log(challenge.substring(2, 21));

// //no.8
// console.log(challenge.includes('Script'));

// //no.9
// console.log(challenge.split(''));

// //no.10
// console.log(challenge.split(' '));

// //no.11
// let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

// console.log(brands.split(','))

// //no.12
// console.log(challenge.replace('30 Days Of JavaScript', '30 Days Of Python'));

// //no.13
// console.log(challenge.charAt(15))

// //no.14
// console.log(challenge.charCodeAt(challenge.indexOf('J')))

// //no.15
// console.log(challenge.indexOf('a'))

// //no.16
// console.log(challenge.lastIndexOf('a'));

// //no.17
// let conjunction = 'you cannot end a sentence with because because because is a conjunction';

// console.log(conjunction.indexOf('because'));

// //no.18
// console.log(conjunction.lastIndexOf('because'));

// //no.19
// console.log(conjunction.search('because'));

// //no.20
// let trimSubject = '  hello world  '

// console.log(trimSubject.trim());

// //no.21
// console.log(challenge.startsWith('30'));

// //no.22
// console.log(challenge.endsWith('JavaScript'));

// //no.23
// console.log(challenge.match(/a/g));

// //no.24
// let firstHalf = '30days of';

// console.log(firstHalf.concat(' JavaScript'))

// //no.25
// console.log(challenge.repeat(2))



// //day 2 Exercise:level 2

// //no.1
// console.log("The quote 'there is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another");

// //no.2
// console.log(`"love is not about patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so dont't just give money but reach out your hand instead."`)

// //no.3
// console.log(typeof '10');

// console.log(typeof parseInt('10'));

// //no.4
// console.log(parseFloat('9.8'))

// console.log(Math.round(parseFloat('9.8')));

// //no.5
// let python = 'python',
//     jargon = 'jargon';

// console.log(python.includes('on'))
// console.log(jargon.includes('on'));

// //no.6
// let testSub = 'i hope this course is not full of jargon';

// console.log(testSub.includes('jargon'))

// //no.7
// console.log(Math.floor(Math.random() * 101))

// //no.8
// console.log(Math.floor(Math.random() * 51) +50)


// //no.9
// console.log(Math.floor(Math.random() * 256))

// //no.10
// let stringData = 'javaScript'

// console.log(stringData.charAt(Math.floor(Math.random() * (stringData.length + 1))));    

// //no.11
// console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// //no.12
// let start = conjunction.indexOf('because');

// console.log(conjunction.substr(start, 24));

// //Day 2 Exercise:Level 3

// //no.1
// let string = "'Love is the best thing in  the world. Some found their love and some are still looking for their love.'"

// let love = string.match(/love/gi);

// console.log(love.length);

// //no.2
// console.log(conjunction.match(/because/gi).length);

// //no.3
//  const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
 

 
//  console.log(sentence.replace(/[%$#@&;!?]/gi, ''));

//  //no.4
//  let text = 'He earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// let income = text.match(/\d+/g);
// let salary = Number(income[0] * 12),
//     bonus = Number(income[1]),
//     onlineCourse = Number(income[2] * 12);

// let totalAnnualIncome = salary + bonus + onlineCourse

//  console.log(totalAnnualIncome);