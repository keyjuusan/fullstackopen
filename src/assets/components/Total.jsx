import { useState } from "react"

export const Total = ({partes})=>{
    const [nEjercicios, setNEjercicios] = useState(0)

    let total = partes.reduce((pv,cv)=>pv + cv.exercises,0)
    console.log(total)

    if(nEjercicios != total){
        setNEjercicios(total)
    }

    return (
        <p>Numero total de ejercicios: {nEjercicios}</p>
    )
}