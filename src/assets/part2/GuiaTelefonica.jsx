import { useState } from "react"
import { Titulo } from "../components/Titulo"
import { Filter } from "../components/Filter"
import { PersonForm } from "../components/PersonForm"
import { Persons } from "../components/Persons"
import axios from "axios"
import { useEffect } from "react"
import crud from "../components/CrudAxiosTelefonica"

export const GuiaTelefonica = () => {
    const [persons, setPersons] = useState([])
    const [newSearch, setNewSearch] = useState('')
    
    useEffect(()=>{
        crud.consultar()
        .then(res=>{
            setPersons(res.data);
        })
    },[])

    const buscarContacto = (e) => {
        setNewSearch(e.target.value)

        // setPersonsFilter()
    }

    const filtrado = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

    

    return (
        <div>
            <Titulo text={"Phonebook"} />
            <Filter functionEvent={buscarContacto} valueSearch={newSearch} />

            <Titulo text={"Add a new"} />
            <PersonForm persons={persons} setPersons={setPersons}/>

            <Titulo text={"Numbers"} />
            <Persons personsFilter={filtrado} setPersons={setPersons} />
        </div>
    )
}
