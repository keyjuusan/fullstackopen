import React from "react";
import { useState } from "react"
import { Btn } from "../components/Btn";
import { Titulo } from "../components/Titulo";

const DatoEstadistica = ({ titulo, dato, s_medida }) => {

    return (
        s_medida != undefined ? 
        <tr>
            <td>{titulo}</td>
            <td>{dato}{s_medida}</td>
        </tr> 
        : 
        <tr>
            <td>{titulo}</td>
            <td>{dato}</td>
        </tr> 
    )
}

const Estadisticas = ({ datos }) => {
    const { bueno, neutral, malo, todo, promedio, positivo } = datos;
    if (todo > 0) {
        return (
            <>
                <table>
                    <tbody>
                        <DatoEstadistica titulo="Bueno" dato={bueno} />
                        <DatoEstadistica titulo="Neutral" dato={neutral} />
                        <DatoEstadistica titulo="Malo" dato={malo} />
                        <DatoEstadistica titulo="Todo" dato={todo} />
                        <DatoEstadistica titulo="Promedio" dato={promedio} />
                        <DatoEstadistica titulo="Positivo" dato={positivo} s_medida="%" />
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <h4>No hay comentarios aún</h4>
        )
    }
}

export const UnicafeApp = () => {
    // Cambiar a estado de objeto
    const [datos, setDatos] = useState({
        bueno: 0,
        neutral: 0,
        malo: 0,
        todo: 0,
        promedio: 0,
        positivo: 0
    })

    const cuentaBueno = () => {
        setDatos({
            ...datos,
            bueno: datos.bueno + 1,
            todo: datos.todo + 1
        })

    }
    const cuentaNeutral = () => {
        setDatos({
            ...datos,
            neutral: datos.neutral + 1,
            todo: datos.todo + 1
        })

    }
    const cuentaMalo = () => {
        setDatos({
            ...datos,
            malo: datos.malo + 1,
            todo: datos.todo + 1
        })

    }


    const nuevoPromedio = (datos.bueno - datos.malo) / datos.todo;
    const nuevoPositivo = (datos.bueno / datos.todo) * 100;

    if (nuevoPositivo != datos.positivo && nuevoPromedio != datos.promedio) {
        if (datos.todo > 0) {

            setDatos({
                ...datos,
                promedio: nuevoPromedio,
                positivo: nuevoPositivo
            })
        }
    }
    return (
        <>
            <Titulo text="Recibir Comentario" />
            <Btn value="Bueno" clickEvent={cuentaBueno}></Btn>
            <Btn value="Neutral" clickEvent={cuentaNeutral}></Btn>
            <Btn value="Malo" clickEvent={cuentaMalo}></Btn>
            <Titulo text="Estadisticas" />
            <Estadisticas datos={datos} />
        </>
    )
}