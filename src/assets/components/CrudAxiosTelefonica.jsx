import axios from "axios";

const urlBase = "http://localhost:3001/persons"

const consultar = ()=>{
    return axios.get(urlBase)
}

const registrar = (newObject)=>{
    return axios.post(urlBase, newObject)
}

const actualizar = (id,newObject)=>{
    return axios.put(`${urlBase}/${id}`, newObject)
}

const eliminar = (id)=>{
    return axios.delete(`${urlBase}/${id}`)
}

export default {
    consultar,
    registrar,
    actualizar,
    eliminar
}