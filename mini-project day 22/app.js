const container = document.querySelector('div')
const list = document.querySelector('ul')


list.style = `
display: grid;
grid-template-columns: repeat(5, 60px);
grid-gap: 2px;
padding: 0;
margin: auto;
justify-content: center;
`

for (let i = 1; i < 101; i++) {
    const element =  document.createElement('li')   
    element.textContent = i
    element.style = `
        list-style: none;
        text-align: center;
        padding: 5px 0px;
        color: white;
    `
    list.appendChild(element)

    if (i % 2 == 0) {
        element.style.backgroundColor = '#4caf50'
    }else{
        element.style.backgroundColor = '#cce428'
    }
let flag = 0;
    for (let k = 2; k < i; k++) {
        if (i % k == 0) {
            flag = 1;
            break
        }
    }
    if (i > 1 && flag == 0) {
        element.style.backgroundColor = '#f66e6e'
    }
     
}



