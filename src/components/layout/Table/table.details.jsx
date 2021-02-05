import React, { useContext } from 'react'
import { FetchDataContext } from '../../context/fetchDataContext'

function Details() {
    const context = useContext(FetchDataContext);

    const { characters } = context;

    return (
        <div>
            Welcome to Page details
            {characters.map(character => {
                return (
                    <div key={character.url} name={character.name}>{character.name}</div>
                )
            })}
        </div>
    )
}
export default Details;
