import axios from "axios"
import { useState } from "react"
import crud from "./CrudAxiosTelefonica.jsx"

export const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const escribiendoNombre = (e) => {
        setNewName(e.target.value)
    }
    const escribiendoNumero = (e) => {
        setNewNumber(e.target.value)
    }

    const addPerson = (e) => {
        e.preventDefault()

        const lastId = parseInt(persons[persons.length - 1].id);

        const newPerson = {
            name: newName,
            number: newNumber,
            id: lastId + 1
        }

        let cAgrega = true
        let idPerson = 0;
        persons.map(person => {
            if (person.name === newPerson.name) {
                cAgrega = false
                idPerson = parseInt(person.id)
            }
        })

        if (!cAgrega) {

            if (window.confirm(`el contacto de ${newName} ya ha sido agregado. ¿Desea actualizar el numero de telefono?`)) {
                crud.actualizar(idPerson, newPerson)
                    .then(() => {
                        crud.consultar()
                            .then((res)=>{
                                setPersons(res.data)
                            })
                    })
            }
        } else {
            crud.registrar(newPerson)
                .then(res => {
                    setPersons(persons.concat(res.data))
                    setNewName('')
                    setNewNumber('')
                })
        }

    }

    return (
        <form onSubmit={addPerson}>
            <label>
                name: <input onChange={escribiendoNombre} value={newName} />
            </label>
            <label>
                number: <input onChange={escribiendoNumero} value={newNumber} />
            </label>
            <label>
                <button type="submit">add</button>
            </label>
        </form >
    )
}