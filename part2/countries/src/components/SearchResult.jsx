import CountryDetail from "./CountryDetail"
import SelectCountry from "./SelectCountry"
import "./SearchResult.modules.css"

const SearchResult = ({result , weather, onShowCountry, handleWeather, hasSearched}) => {

    console.log("Number of Countries Found", result.length);

    if(!hasSearched) return null;

    if(!result || result.length === 0)
        return <p> No Results Found. Please try another search.</p>

    if(result.length > 10) {
        return (
            <p>Too many countries meet your search criteria please refine your search.</p>
        )
    } else if (result.length > 1) {
        return (
            <ul className="countryList">
                {result.map((country, id) => {
                    console.log("Listing countries...");
                    return (
                        <li key={id} className="countryListItem">
                            <span>{country.name.common}</span>
                            <button onClick={() => onShowCountry(country)}>Show</button>
                        </li>
                    )
                })}
            </ul>
        )
    } else if (result.length === 1) {
        return (
            <CountryDetail country={result[0]} weather={weather} handleWeather={handleWeather}/>
        )
    } else return <></>

}

export default SearchResult