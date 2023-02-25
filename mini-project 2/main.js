const countriesAPI = 'https://restcountries.com/v2/all'
const err = 'https://httpstat.us/404'
const ul = document.querySelector('ul')
const counter =  document.querySelector('.country-counter')

document.body.style.textAlign = 'center'
ul.style = `
        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
        grid-gap: 1rem;
        list-style: none;
        `


const countries = async () => {
    try {
    let response = await fetch(countriesAPI)
    let resData = await response.json()
    let count = 0
    resData.forEach(country => {
        console.log(country);
        const li = document.createElement('li')
        li.textContent = country.name.toUpperCase()
        li.style = `
                border: 2px solid black;
                font-size: 10px;
                font-weight: bold;
                padding: 1.5rem;
        `
        ul.appendChild(li)
        count += 1
    });
   counter.textContent = `Total Number of Countries: ${count}`
   counter.style.fontWeight = 'bold    '
    return resData  
    } catch (error) {
        console.log(error)
    }
    
}

countries()
