const mass = document.getElementById('mass')
const container = document.querySelector('.flex-container')
const planet = document.querySelector('select')
const calcWeightBtn = document.querySelector('button')
const main = document.main
const display = document.querySelector('.description')
const image = document.querySelector('img')
const divText = document.querySelector('.div-text')




function printWeight() {
    divText.style.display = 'none'
    container.style.justifyContent = 'space-evenly'
    display.innerHTML = ''
    let div = document.createElement('div')
    image.style.display = 'block'
    let massNum = mass.value

    div.style = `
        border-radius: 20%;
        background-color: rgba(255, 255, 255, 0.20);
        padding: 1rem;
        width: 100px;
        margin: 0px;

    `


    switch (planet.value) {
        case 'earth':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 9.807

            image.src = './images/earth.png'
            break;
        case 'moon':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 1.62

            image.src = './images/moon.png'
            break;
        case 'saturn':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 10.44

            image.src = './images/saturn.png'
            break;
        case 'neptune':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 11.15

            image.src = './images/neptune.png'
            break;
        case 'pluto':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 0.62

            image.src = './images/pluto.png'
            break;
        case 'mars':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 3.721

            image.src = './images/mars.png'
            break;
        case 'mercury':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 3.7

            image.src = './images/mercury.png'
            break
        case 'venus':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 8.87

            image.src = './images/venus.png'
            break;
        case 'jupiter':
            display.textContent = `The weight of the object on ${planet.value}`
            div.textContent = massNum * 24.79

            image.src = './images/jupiter.png'
            break
        default:
            break;
    }

    display.appendChild(div);
}

calcWeightBtn.addEventListener('click', printWeight)