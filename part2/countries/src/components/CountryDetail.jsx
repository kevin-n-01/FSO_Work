import "./CountryDetail.modules.css"

const CountryDetail = ({country}) => {
    console.log(country)
    //const languages = Object.values(country.language)
    const languages = Object.values(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <br />
            <p>
                Capital: {country.capital} <br />
                Area: {country.area}
            </p>
            <h2>Languages</h2>
            <div>
                <ul>
                    {languages.map((language , index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>
            <img className="flag" src={country.flags.svg} alt={country.flags.alt} />
        </div>
    )
}

export default CountryDetail