import { useState, useEffect } from 'react'
import './App.css'
import RetrieveCountries from './services/getCountries'
import GetWeather from './services/getWeather'
import SearchResult from './components/SearchResult'

function App() {

  const defaultInput = "Enter a Country Name...";
  const [input, setInput] = useState(defaultInput);
  const [countryArray, setCountryArray] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [isFocused, setIsFocused] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect( () => {
    RetrieveCountries.getAllArray()
                     .then((countries) => setCountryArray(countries))
                     .catch("Unable to assign countries to state")
  }, [])

  const handleFocus = () => {
    setIsFocused(true);
    if(input === defaultInput) {
      setInput('');
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if(input.trim() === '') {
      setInput(defaultInput);
    }
  }

  const searchCountry = (event) => {
    event.preventDefault()
    console.log("Form Submitted", event.target)
    const selectedCountries = countryArray.filter((country) => country.name.common.toLowerCase().includes(input.toLowerCase()))
    setFilteredCountries(selectedCountries);
    setHasSearched(true);
  }

  const handleShowCountry = (country) => {
    setFilteredCountries([country]);
  }

  const handleWeather = (weather) => {
    setWeather(weather);
  }

  // return (
  //   <div>
  //     <form onSubmit={searchCountry}>
  //       <label htmlFor="countryInput">Find Countries:</label>
  //       <input id="countryInput" value={input} onChange={(event) => setInput(event.target.value)} />
  //       <div>
  //         <button type="submit">Submit</button>
  //       </div>
  //     </form>
  //     <SearchResult 
  //       result={selectedCountries} 
  //       countries={countries} 
  //       setCountries={setSelectedCountries} 
  //       displayedCountry={displayedCountry}
  //       setDisplayedCountry={setDisplayedCountry}
  //     />
  //   </div>
   
  // )

  return (
    <div>
      <form onSubmit={searchCountry}>
        <label htmlFor='countryInput'>Find Countries:</label>
        <input 
          id='countryInput' 
          type="text"
          value={input} 
          onChange={(event) => setInput(event.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{color: input === defaultInput && !isFocused ? '#aaa' : '#000'}}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <SearchResult
        result={filteredCountries}
        hasSearched={hasSearched}
        onShowCountry={handleShowCountry}
        handleWeather={handleWeather}
        weather={weather}
      />
    </div>
  )
}

export default App
