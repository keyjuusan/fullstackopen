
import { Titulo } from "../components/Titulo";
import { CountryWeather } from "./CountryWeather";

export const CountryDetails = ({ filtrado }) => {
    return (
        <>
            <Titulo text={filtrado[0].name.common} />
            <table>
                <tbody style={{ textAlign: "left" }}>
                    <tr>
                        <th>Capital: </th>
                        <td>{filtrado[0].capital}</td>
                    </tr>
                    <tr>
                        <th>Poblacion: </th>
                        <td>{filtrado[0].population} personas</td>
                    </tr>
                </tbody>
            </table>

            <h3>Idiomas Hablados</h3>
            <ul>
                {Object.values(filtrado[0].languages).map((country, key) => (<li key={key}>{country}</li>
                ))}

            </ul>

            <img src={filtrado[0].flags.svg} alt={`Bandera de ${filtrado[0].name.common}`} width={200} />

            <CountryWeather city={filtrado[0].capital}/>
        </>
    )
}