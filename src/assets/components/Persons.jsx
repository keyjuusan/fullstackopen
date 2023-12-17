import crud from "./CrudAxiosTelefonica";

export const Persons = ({ personsFilter, setPersons, setMensaje }) => {
    
  const eliminarPersona = (event, personId, personName) => {
    if (window.confirm(`Está seguro de que desea eliminar a ${personName}`)) {
      crud
        .eliminar(personId)
        .then((res) => {
          crud.consultar().then((res) => {
            setPersons(res.data);
          });
          setMensaje({
            mensaje: `Contacto eliminado correctamente.`,
            bol: true,
          });
          setTimeout(() => {
            setMensaje({ mensaje: "", bol: true });
          }, 3000);
        })
        .catch(() => {
          setMensaje({
            mensaje: `El contacto no se pudo elimiar debido a un error.`,
            bol: false,
          });
          setTimeout(() => {
            setMensaje({ mensaje: "", bol: false });
          }, 3000);
        });
    }
  };
  
  return (
    <ul>
      {personsFilter.map((person) => (
        <li key={person.id}>
          {person.name} {person.number} 
          <button
            type="button"
            onClick={(e) => {
              eliminarPersona(e, person.id, person.name);
            }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};
