const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


const countries = async ()  => {
    let response = await fetch(countriesAPI) 
    let resData = await response.json()

    resData.map(country => {
        const info = {
            name: country.name,
            population : country.population,
            capital : country.capital,
            languages : country.languages,
            area : country. capital
        }
        console.log(info); 
    })

    // let langCount = 0
    // resData.forEach(country => {
    //       langCount += country.languages.length
    // })
    // console.log(langCount, 'languages in the world');

    let areaInfo = resData.map(country => {
        let info ={}
        info[country.name] = country.area
        return info
    })
    console.log(areaInfo);
        
    let highestCountry = 0;
    let largestCountries = [];

        resData.forEach(country => {
            if (country.area >= highestCountry) {
                highestCountry = country.area;
                largestCountries.push(country)
            }
        })
        console.log(largestCountries);
    
}

countries()



    // const cat = async ()  => {
    //     let response = await fetch(catsAPI) 
    //     let resData = await response.json()
    //     let catNames = resData.map(country => {
    //         const info =  country.name    
    //         // console.log(catNames);
    //     })
    //     let catWeightArr = resData.map(country => country.weight.metric)
    //     console.log(catWeightArr);
    //     // const catWeight =  
    // }
    
// cat()
    
     
