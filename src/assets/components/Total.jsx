import { useState } from "react"

export const Total = ({partes})=>{
    const [nEjercicios, setNEjercicios] = useState(0)

    let acumulado = 0;
    partes.map(part=>{
        acumulado += part.exercises
    })

    if(nEjercicios != acumulado){
        setNEjercicios(acumulado)
    }

    return (
        <p>Numero total de ejercicios: {nEjercicios}</p>
    )
}