export const Filter = ({functionEvent,valueSearch}) =>{
    return(
        <label >
                search:
                <input type="text" placeholder="search by name" onChange={functionEvent} value={valueSearch} />
            </label>
    )
}