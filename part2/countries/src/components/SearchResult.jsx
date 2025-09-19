import CountryDetail from "./CountryDetail"

const SearchResult = ({result , countries}) => {
    console.log("Number of countries returned: ", result.length)

    const retrieveCountry = (name) => {
        return countries.get(name)
    }

    if(result.length > 5) {
        return (
            <p>Too many countries meet your search criteria please continue filtering.</p>
        )
    } else if (result.length > 1) {
        return (
            <ul>
                {result.map(country => (
                    <li key={country}>{country}</li>
                ))}
            </ul>
        )
    } else if (result.length === 1) {
        return <CountryDetail country={retrieveCountry(result[0])} />
    } else {
        return <></>
    }
}

export default SearchResult