const populationBtn = document.querySelector('.population')
const langBtn = document.querySelector('.languages')
const graphContainer = document.querySelector('.graph-container')

getJson()


async function getJson() {
    const countryLangObj = {}

    let response = await fetch('countries.json')
    let resData = await response.json()

    for (const country of resData) {
        countryLangObj[country.name] = country.languages
    }

    function percentage(num, total) {
          let percent = num / total * 100   
          return percent 
    }

    function getMostPop() {
         const popObj = {}
         let totalWorldPopulation = 0;

        for (const country of resData) {
            popObj[country.name] = country.population
            totalWorldPopulation += country.population
        }

        graphContainer.innerHTML = ''
        for (let i = 0; i < 10; i++) {
            const graphItem = document.createElement('div')
            graphItem.className = 'graph-item'
            const country = document.createElement('div')
            country.className = 'country'
            const bar = document.createElement('div')
            bar.className = 'bar'
            const progress = document.createElement('div')
            progress.className = 'progress'
            const number = document.createElement('div')
            number.className = 'count'
            bar.appendChild(progress)
            graphItem.appendChild(country)
            graphItem.appendChild(bar)
            graphItem.appendChild(number)
            let count = 0;
            const firstTenCountries = {}
            let winner;
            for (const country in popObj) {
                if (Object.hasOwnProperty.call(popObj, country)) {
                  const element = popObj[country];
                  
                  if (element > count) {
                    count = element
                    winner = country
                  }

                }      
            }

            if (i = 0) {
                progress.style = `width: 100%;`
                country.textContent = 'World'
                number.textContent = totalWorldPopulation
                graphContainer.appendChild(graphItem)
            }
            popObj[winner] = 0
            progress.style = `width: ${percentage(count, totalWorldPopulation)}%;`
            country.textContent = winner
            number.textContent = count
            graphContainer.appendChild(graphItem)
        }
       
    }
    

    function getMostSpokenLang() {
        graphContainer.innerHTML = ''
        const arrOfLang = Object.values(countryLangObj)
        const langObj = {}
        
        for (const country of arrOfLang) {
            for (const lang of country) {
                if (langObj[lang]) {
                    ++langObj[lang]
                } else {
                    langObj[lang] = 1
                }
            }
        }

        for (let i = 0; i < 10; i++) {
            const graphItem = document.createElement('div')
            graphItem.className = 'graph-item'
            const country = document.createElement('div')
            country.className = 'country'
            const bar = document.createElement('div')
            bar.className = 'bar'
            const progress = document.createElement('div')
            progress.className = 'progress'
            const number = document.createElement('div')
            number.className = 'count'
            bar.appendChild(progress)
            graphItem.appendChild(country)
            graphItem.appendChild(bar)
            graphItem.appendChild(number)
            let totalNumberOfLang = 0
            let count = 0;
            let winner;
            for (const lang in langObj) {
                if (Object.hasOwnProperty.call(langObj, lang)) {
                  const element = langObj[lang];
                  totalNumberOfLang += element
                  if (element > count) {
                    count = element
                    winner = lang
                  }
                }

            }
            langObj[winner] = 0
            progress.style = `width: ${percentage(count, totalNumberOfLang)}%;`
            country.textContent = winner
            number.textContent = count
            console.log(winner, count); 
            graphContainer.appendChild(graphItem)
        }
    }

langBtn.addEventListener('click', getMostSpokenLang)
populationBtn.addEventListener('click', getMostPop)

}

