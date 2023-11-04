import crud from "./CrudAxiosTelefonica"

export const Persons = ({ personsFilter,setPersons }) => {
    
    const eliminarPersona = (event,personId,personName)=>{
        
        if(window.confirm(`Está seguro de que desea eliminar a ${personName}`)){
            crud.eliminar(personId)
            .then(res=>crud.consultar().then(r=>setPersons(r.data)))
        }
    }

    return (
        <ul>
            {personsFilter.map((person) =>
            (
                <li key={parseInt(person.id)}>
                    {person.name} {person.number}
                    <button type="button" onClick={(e)=>{eliminarPersona(e,parseInt(person.id),person.name)}}>Eliminar</button>
                </li>
            ))}
        </ul>
    )
}