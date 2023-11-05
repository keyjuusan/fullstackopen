export const Notificacion = ({ mensaje }) => {
    if(mensaje.mensaje===""){
        return null
    }else{

        return (
            mensaje.bol ?
            (<div className="mensaje mensajePositivo">{mensaje.mensaje}</div>)
            :
            (<div className="mensaje mensajeNegativo">{mensaje.mensaje}</div>)
        )
    }
}