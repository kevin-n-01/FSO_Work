import axios from 'axios'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

const RetrieveCountries = {
    getAll: async () => {
        return axios.get(`${baseUrl}/all`)
                    .then(response => {
                        console.log("Retrieving Countries")
                        const countries = response.data.reduce((acc, country) => {
                            acc.set(country.name.common, country)
                            return acc
                        }, new Map())
                        console.log(countries)
                        const countryNames = Array.from(countries.keys())
                        return {countries, countryNames}
                    })
    },
    getSingleCountry: (name) => {
        const country = axios.get(`${baseUrl}/name/${name}`)
                             .then(response => response.data)
                             .catch(`The server could not find country with name ${name}`)
        return country
    }
}

export default RetrieveCountries