import axios from "axios"
import { useState } from "react"
import crud from "./CrudAxiosTelefonica.jsx"

export const PersonForm = ({ persons, setPersons, setMensaje }) => {
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

            if (window.confirm(`el contacto de ${newPerson.name} ya ha sido agregado. ¿Desea actualizar el numero de telefono?`)) {
                crud.actualizar(idPerson, newPerson)
                    .then(() => {
                        crud.consultar()
                            .then((res) => {
                                setPersons(res.data)
                            })
                        setMensaje({mensaje:`Los datos de ${newPerson.name} han sido actualizados`,bol:true})
                        setTimeout(() => {
                            setMensaje({mensaje:"",bol:true})
                        }, 3000);
                    })
                    .catch(() => {
                        setMensaje({mensaje:`Error al actualizar el contacto`,bol:false})
                        setTimeout(() => {
                            setMensaje({mensaje:"",bol:false})
                        }, 3000);
                    })
            }
        } else {
            crud.registrar(newPerson)
                .then(res => {
                    setPersons(persons.concat(res.data))
                    setNewName('')
                    setNewNumber('')
                    setMensaje({mensaje:`${newPerson.name} ha sido añadido a los contactos`,bol:true})
                    setTimeout(() => {
                        setMensaje({mensaje:"",bol:true})
                    }, 3000);
                })
                .catch(() => {
                    setMensaje({mensaje:`Error al registrar el contacto`,bol:false})
                    setTimeout(() => {
                        setMensaje({mensaje:"",bol:false})
                    }, 3000);
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