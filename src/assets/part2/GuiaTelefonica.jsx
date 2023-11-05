import { useState } from "react"
import { Titulo } from "../components/Titulo"
import { Filter } from "../components/Filter"
import { PersonForm } from "../components/PersonForm"
import { Persons } from "../components/Persons"
import { useEffect } from "react"
import crud from "../components/CrudAxiosTelefonica"
import { Notificacion } from "../components/Notificacion"

export const GuiaTelefonica = () => {
    const [persons, setPersons] = useState([])
    const [newSearch, setNewSearch] = useState('')
    const [mensaje,setMensaje]= useState({mensaje:""})
    
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
        <div className="principal">
            <Titulo text={"Phonebook"} />
            <Notificacion mensaje={mensaje}/>
            <Filter functionEvent={buscarContacto} valueSearch={newSearch} />

            <Titulo text={"Add a new"} />
            <PersonForm persons={persons} setPersons={setPersons} setMensaje={setMensaje}/>

            <Titulo text={"Numbers"} />
            <Persons personsFilter={filtrado} setPersons={setPersons} setMensaje={setMensaje}/>
        </div>
    )
}
