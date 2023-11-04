import { useState } from "react"
import { CountryDetails } from "./CountryDetails";

export const CountryBox = ({ countryName, Key, filtrado }) => {

    const [isShow, setIsShow] = useState(false)

    const showCountry = () => {
        setIsShow(!isShow);

    }

    const nuevoFiltrado = filtrado.filter(Country => 
        Country.name.common.toLowerCase().includes(countryName.toLowerCase())
    );

    return (
        <div id={`countryName${Key}`}>
            <span >{countryName}</span>
            <button type="button" onClick={showCountry}>Show</button>
            {isShow ?
                <CountryDetails filtrado={nuevoFiltrado} />
                :
                <></>}
        </div>
    )
}