import axios from "axios"
import { useState, useEffect } from "react"
import { Titulo } from "./Titulo"

export const CountryWeather = ({ city }) => {

    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_REACT_APP_API_KEY}&q=${city}`)
            .then(res => setWeatherData(res.data))
    }, [city]);
    
    return (
        <>
            <Titulo text={`Clima en ${city}`} />

            {weatherData.current==undefined ? (<></>) : (
                <>
                    <p><b>Temperatura: </b> {weatherData.current.temp_c}°C</p>
                    <img src={`${weatherData.current.condition.icon}`} alt="icono-clima" />
                    <p><b>Viento:</b> {weatherData.current.wind_mph}mph <b>direccion:</b> {weatherData.current.wind_dir}</p>
                </>
            )}

        </>
    )
}