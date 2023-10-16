import { Part } from "./Part"

export const Content = ({contenido}) => {

    return (
        <>
        {contenido.map((part,id)=>
            (<Part parte={part} key={id}/>)
        )}
        </>
    )
}