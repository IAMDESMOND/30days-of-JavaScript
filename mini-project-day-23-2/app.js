const body = document.querySelector('body')
const key = document.querySelector('.key-pressed')
const display = document.querySelector('.number-display')

body.style = `
    height: 100vh;
    display: flex; 
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    font-family: sans-serif;
`

key.style = `
    padding: 20px;
    box-shadow: 0px 0px 6px black;
    margin: 1rem auto;
`
display.style = `
    width: 4rem;    
    box-shadow: 0px 0px 6px black;
    margin: auto;
    color: green;
`

const printKey = (e) => {
    let name = e.key
   let keyCode = e.keyCode
   console.log(name);
   const span = document.createElement('span')
   
   key.textContent = 'You pressed '

   span.style.color = 'green'
    name == ' '?
        span.textContent = `Space`:
        span.textContent = name;

        key.appendChild(span)
        span.style.color = 'green'



   display.textContent = keyCode
   display.style.padding = '20px 10px'
}

body.addEventListener('keydown', printKey)