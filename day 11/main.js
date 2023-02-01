const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
let [fin, est, sw, den, nor] = countries
let {width, height, area, perimeter} = rectangle

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
console.log(fin, est, sw, den, nor);
console.log(width, height, area, perimeter);

for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
    if(skills.length > 2){
        console.log(`${name} has less than two skills`);
    }
}

const devs = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, jsScore, reactScore] = devs
console.log(name, skills, jsScore, reactScore)

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
    const res = []
    
    for (const info of arr) {
       let obj = {}
       let [name, skill, score] = info
        obj.name = name
        obj.skills = skill
        obj.scores = score

        res.push(obj)
    }
    return res
}
console.log(convertArrayToObject(students));

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudents = {...student}
newStudents.skills.frontEnd.push({skill: 'BootStrap', level: 8})
newStudents.skills.backEnd.push({skill: 'Express', level: 9})
newStudents.skills.dataBase.push({skill: 'SQL', level: 8})
newStudents.skills.dataScience.push('SQL')

console.log(newStudents);