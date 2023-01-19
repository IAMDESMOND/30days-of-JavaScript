function printFullName() {
    let firstName = 'Desmond',
        lastName = ' Emmanuel'

    console.log(firstName + lastName);    
}

printFullName()

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Desmond', 'Emmanuel'));

function addNumbers(num1, num2) {
    sum = num1 + num2
    return sum
}

console.log(addNumbers(10, 20))

function areaOfRectangle(length, width) {
    let area = length * width;
    return `area of rectangle = ${area}`
}
console.log(areaOfRectangle(2, 2)); 

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return  `perimeter of rectangle = ${perimeter}`
}
console.log(perimeterOfRectangle(2, 2));

function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume
}

console.log(volumeOfRectPrism(2, 2, 2))

function areaOfCircle(radius) {
    let area = Math.PI * radius * radius
    return area      
}

console.log(areaOfCircle(7));

function circumOfCircle(radius) {
    let circum = 2 * Math.PI * radius
    return circum      
}

console.log(circumOfCircle(7));

function densityOfSubstances(mass, volume) {
    let density = mass / volume
    return density 
}

console.log(densityOfSubstances(100, 50))

function calcSpeed(distance, time) {
    let speed = distance / time
    return speed
}
console.log(calcSpeed(120, 20))

function calcWeight(mass, gravity = 9.8) {
    area = mass * gravity
    return area      
}
console.log(calcWeight(10))

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(100))

function BMI(weight, height) {
    let bmi = weight / (height * height)

    switch (true) {
        case bmi < 18.5:
            return `${bmi} Underweight`
            break;
        case (bmi == 18.5) && (bmi <= 24.9):
            return `${bmi} Normal weight`
            break;
        case (bmi == 25) && (bmi <= 29.9):
            return `${bmi} Overweight`
            break;
        case (bmi >= 30):
            return `${bmi} Overweight`
            break;
        default:
            break;
    }
}

console.log(BMI(6000, 10))

function checkSeason(month) {
    switch (month) {
    case 'january':
        return ('Season is winter')
        break;
    case 'february':
        return ('Season is winter')
        break;
    case 'march':
        return ('Season is spring')
        break;
    case 'april':
        return ('Season is spring')
        break;
    case 'may':
        return ('Season is spring')
        break;
    case 'june':
        return ('Season is summer')
        break;
    case 'july':
        return ('Season is summer')
        break;                             
    case 'august':
        return ('Season is summer')
        break;
    case 'september':
        return ('Season is autumn')
        break; 
    case 'october':
        return ('Season is autumn')
        break;
    case 'november':
        return ('Season is autumn')
        break;
    case 'december':
        return ('Season is winter')
        break;                
    default:
        return ('not a month')
        break;
}
}

console.log(checkSeason('may'))

function findMax(arg1, arg2, arg3) {
    const arr = [arg1, arg2, arg3]
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (max < element) {
            max = element
        }
    }
    return max
}

console.log(findMax(0, 10, 5))


function printArray(arr) {
    for (const obj of arr) {
        console.log(obj);
    }
}

printArray([1, 2, 3, 5])
let time = new Date()

function showDateTime() {
    return `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
};

console.log(showDateTime())

function reverseArray(arr) {
   let reverseOfArr = []
   for (let i = arr.length -1; i >= 0; i--) {
    const element = arr[i];
    reverseOfArr.push(element)
   }
   return reverseOfArr
}

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

function capitalizeArray(arr) {
    let capitalizedArray = []
    for (const obj of arr) {
        capitalizedArray.push(obj.toUpperCase())
    }
    return capitalizedArray
}
console.log(capitalizeArray(['a', 's']))

const arr = [];

function addItem(item) {
    arr.push(item)
};
addItem('buchi')
addItem('eliza')
addItem('chinedu')
addItem('eliza')

function removeItem(index) {
    arr.splice(index-1, 1)
};
removeItem(2)


console.log(arr);