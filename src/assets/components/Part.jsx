export const Part = ({ parte }) => {
    const { name, exercises } = parte

    return (
        <p>{name} {exercises}</p>
    )
}