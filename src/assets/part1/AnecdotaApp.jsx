import { useState } from "react"
import { Btn } from "./components/Btn"
import { Parrafo } from "./components/Parrafo"
import { Titulo } from "./components/Titulo"

const ANECDOTAS = [
    { anecdota: 'If it hurts, do it more often', n_votos: 0 },
    { anecdota: 'Adding manpower to a late software project makes it later!', n_votos: 0 },
    { anecdota: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', n_votos: 0 },
    { anecdota: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', n_votos: 0 },
    { anecdota: 'Premature optimization is the root of all evil.', n_votos: 0 },
    { anecdota: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', n_votos: 0 },
]

export const AnecdotaApp = () => {

    const [anecdotas, setAnecdotas] = useState(ANECDOTAS)
    const [anecdota, setAnecdota] = useState(anecdotas[Math.floor(Math.random() * anecdotas.length)])
    const [anecdotaPopular, setAnecdotaPopular] = useState("")
    const [mayorVotos,setMayorVotos]= useState(0)

    const randAnecdota = () => {
        setAnecdota(anecdotas[Math.floor(Math.random() * anecdotas.length)])
    }

    const indexAnecdota = anecdotas.indexOf(anecdota);

    const votar = () => {
        const copy = [...anecdotas];
        copy[indexAnecdota].n_votos += 1;
        setAnecdotas(copy);

    }
    
    for (let i = 0; i < anecdotas.length; i++) {
        if (anecdotas[i + 1] != undefined) {
            if (anecdotas[i].n_votos > mayorVotos) {
                setMayorVotos(anecdotas[i].n_votos)
                setAnecdotaPopular(anecdotas[i].anecdota)
            }
        }
    }    

    return (
        <>
            <Titulo text={"Anecdota del dia"} />
            <Parrafo texto={anecdota.anecdota} />
            <Parrafo texto={"Tiene " + anecdota.n_votos + " votos"} />
            <Btn value={"Vote"} clickEvent={votar} />
            <Btn value="Siguiente Anecdota" clickEvent={randAnecdota} />
            <Titulo text={"Anecdota mas popular"} />
            <Parrafo texto={anecdotaPopular} />
        </>
    )


} 