import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { FetchDataContext } from '../../context/fetchDataContext'

function CharacterTable() {
    const context = useContext(FetchDataContext);

    const { showData, isActive } = context;

    const { characters } = context;
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Gender</td>
                    <td>Culture</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            {characters.map((character, i) => {
                                if (character.name === "") {
                                    return (
                                        <li key={character.url} name={character.name} >
                                            N/A
                                        </li>
                                    )
                                } else {
                                    return (
                                        // <li key={character.url} name={character.name} onCLick={showData} className={isActive ? "show active" : "show"} >
                                        //     {character.name}
                                        //     <button onClick={showData}>
                                        //         Click Me
                                        //     </button>
                                        // </li>
                                        <li>
                                            <NavLink to="/details">
                                                {character.name}
                                            </NavLink>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </td>

                    <td>
                        <ul>
                            {characters.map((character) => {
                                if (character.gender === "") {
                                    console.log('')
                                    return <li key={character.url} name={character.gender}>N/A</li>
                                } else {
                                    return <li key={character.url} name={character.gender} >{character.gender}</li>
                                }
                            })}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {characters.map((character) => {
                                if (character.culture === "") {
                                    return <li key={character.url} name={character.culture} >N/A</li>
                                } else {
                                    return <li key={character.url} name={character.culture} >{character.culture}</li>
                                }
                            })}
                        </ul>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr></tr>
            </tfoot>
        </table>
    )
}

export default CharacterTable;
