import { useState, useEffect } from 'react'
import './App.css'
import RetrieveCountries from './services/getCountries'
import SearchResult from './components/SearchResult'

function App() {

  const [input, setInput] = useState('Select a Country')
  const [countries, setCountries] = useState(new Map())
  const [countryNames, setCountryNames] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])

  useEffect( () => {
    RetrieveCountries.getAll()
                     .then(({countries, countryNames}) => {
                      setCountries(countries)
                      setCountryNames(countryNames)
                     })
  }, [])

  const searchCountry = (event) => {
    event.preventDefault()
    console.log("Form Submitted", event.target)
  
    const selectedCountries = countryNames.filter(country => country.includes(input))
    setSelectedCountries(selectedCountries)
  }

  return (
    <div>
      <form onSubmit={searchCountry}>
        <label htmlFor="countryInput">Find Countries:</label>
        <input id="countryInput" value={input} onChange={(event) => setInput(event.target.value)} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <SearchResult result={selectedCountries} countries={countries} />
    </div>
   
  )
}

export default App
