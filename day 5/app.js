//  const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//  const arr = [];

//  const cars = ['Honda', 'Toyota', 'Kia', 'Nissan', 'Bentley', 'Tesla'];

//  console.log(cars.length)

//  let lastIndex = cars.length - 1;
//  let middleIndex = cars.length / 2
//  console.log(cars[0], cars[middleIndex], cars[lastIndex]);

//  const mixedArrayTypes = [2, 3, 'hello', true, false, null];

  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//  console.log(itCompanies);

//  console.log(itCompanies.length);

//  lastIndex = itCompanies.length - 1;
//  middleIndex = itCompanies.length / 2
//  console.log(itCompanies[0], itCompanies[middleIndex], itCompanies[lastIndex]);

//  console.log(itCompanies[0]);
//  console.log(itCompanies[1]);
//  console.log(itCompanies[2]);
//  console.log(itCompanies[3]);
//  console.log(itCompanies[4]);
//  console.log(itCompanies[5]);
//  console.log(itCompanies[6]);

//  console.log(itCompanies[0].toUpperCase());
//  console.log(itCompanies[1].toUpperCase());
//  console.log(itCompanies[2].toUpperCase());
//  console.log(itCompanies[3].toUpperCase());
//  console.log(itCompanies[4].toUpperCase());
//  console.log(itCompanies[5].toUpperCase());
//  console.log(itCompanies[6].toUpperCase());

//  console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`);

 if (itCompanies.includes('kia')) {
    console.log('kia') ;
 } else {
   console.log('company is not found');
 };

if (itCompanies[0].match(/o/gi).length) {
    console.log(itCompanies[0])
}

