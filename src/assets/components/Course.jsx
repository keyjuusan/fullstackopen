import { Content } from "../components/Content"
import { Header } from "../components/Header"
import { Total } from "../components/Total"
export const Course = ({ curso }) => {
    
    return (
        <>
            <Header nombreCurso={curso.name} />
            <Content contenido={curso.parts} />
            <Total partes={curso.parts} />
        </>
    )
}