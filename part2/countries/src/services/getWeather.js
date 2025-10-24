import axios from 'axios';

const api_key = import.meta.env.VITE_WEATHER_KEY;
const baseUrl = `https://api.weatherapi.com/v1/current.json?key=${api_key}`

const GetWeather = {
    getSingleCityLive: async (city) => {
        return axios.get(`${baseUrl}&q=${city}&aqi=yes`)
                    .then(response => {
                    console.log("Weather Retrieved")
                    return response.data
                    })
    }
}

export default GetWeather