import { Content } from "../components/Content"
import { Header } from "../components/Header"
import { Total } from "../components/Total"

export const CursoInfo = () => {
    const course = {
        home: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <>
            <Header curso={course.home} />
            <Content contenido={course.parts} />
            <Total partes={course.parts}/>
        </>
        // *<div>
        // *    <h1>{course}</h1>
        // *    <p>
        // *        {part1} {exercises1}
        // *    </p>
        // *    <p>
        // *        {part2} {exercises2}
        // *    </p>
        // *    <p>
        // *        {part3} {exercises3}
        // *    </p>
        // *    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        // *</div>
    )
}