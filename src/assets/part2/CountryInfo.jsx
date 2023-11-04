import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import { Titulo } from "../components/Titulo";
import { CountryDetails } from "../components/CountryDetails";
import { CountryBox } from "../components/CountryBox";

export const CountryInfo = () => {

    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => setCountries(res.data))
    }, [])

    const buscandoPais = (e) => {
        setSearchCountry(e.target.value)
    }

    const filtrado = countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()));

    // console.log(import.meta.env.VITE_REACT_APP_API_KEY);

    return (
        <>
            <form >
                <label>Search Country:</label>
                <input type="text" name="countryName" onChange={buscandoPais} value={searchCountry} />
                {filtrado.length > 10 ?
                    (<div><span>Por favor se mas especifico</span></div>)
                    :
                    filtrado.length === 1 ?
                        (
                            // *Estructura comopleta de la app
                            <>
                                <CountryDetails filtrado={filtrado} />
                            </>
                        )
                        :
                        filtrado.map((country, key) => (
                            <CountryBox countryName={country.name.common} key={key} Key={key} filtrado={filtrado} />
                        ))
                }
            </form>

        </>
    )
}