import { useEffect } from "react";
import GetWeather from "../services/getWeather";

const Weather = ({country , weather, handleWeather}) => {

    const capital = country.capital[0] || '';

    useEffect(()=> {
        GetWeather.getSingleCityLive(capital)
                  .then(response => {
                    console.log("Full Weather Response", JSON.stringify(response, null, 2))
                    handleWeather(response)
                    })
                  .catch(error => console.error("Unable to load weather into state: ", error))
    }
    , [capital, handleWeather])

    if(!weather) {
        return <div>Loading weather data...</div>
    }

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p> Conditions: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} />
            <p> Temperature: {weather.current.temp_c} &deg;C</p>
            <p>Wind: {weather.current.wind_mph} mph</p>
        </div>
        
    )
}

export default Weather;