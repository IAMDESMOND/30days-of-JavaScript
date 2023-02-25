const body = document.body
const wrapper = document.querySelector('.wrapper')
const h1 = document.querySelector('h1')
const year = document.querySelector('h1 span')
const h2 = document.querySelector('h2')
const p = document.querySelector('p')
const section = document.querySelector('section')
const listItem = document.querySelectorAll('div')

body.style = `
        display: flex;
        justify-content: center
`

wrapper.style = `
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
`
h1.style =`
        font-size: 1.5rem;
        padding: 0 4rem;
`

year.style = `
        font-size: 3rem
`

h2.style =`
        text-decoration: underline;
        font-weight: 300;
`

p.style = `
        padding: 0.7rem;
`

section.style = `
        padding: 0;
        width:100%
`


listItem.forEach(div => {
    let divText = div.textContent.toLocaleLowerCase()
    div.style = `
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 5px;
        padding: 1rem;

    `
    if (divText.includes('done')) {
        div.style.backgroundColor = 'green'
    } else if (divText.includes('ongoing')){
        div.style.backgroundColor = 'yellow'
    }else {
        div.style.backgroundColor = 'red'
    }
})


function showDateTime() {
  let time = new Date()
  
    p.textContent = time
};

setInterval(showDateTime, 1000)

const character= ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function colorChanger() {
    let color = ['#']
    for (let i = 0; i < 6; i++) {
        const element = character[Math.floor(Math.random() * 7)]
        color.push(element)
    }
    
    p.style.backgroundColor = color.join('')
}

setInterval(colorChanger, 1000)

const colorChanger2 = () => {
    let color = ['#']
    for (let i = 0; i < 6; i++) {
        const element = character[Math.floor(Math.random() * 7)]
        color.push(element)
    }
    
    year.style.color = color.join('')
}

setInterval(colorChanger2, 1000)