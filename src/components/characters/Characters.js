import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from '../../graphql/characters';
import Character from './Character';

export default function Characters() {
    const { loading, data } = useQuery(GET_CHARACTERS)

    function showCharacters() {
        return (
            data.characters.results.map(character => {
                return <Character
                    key={character.id}
                    name={character.name} />
            })
        )
    }
    return (
        <div>
            { loading ? <p>Cargando.. </p> :
                <ul>
                    {showCharacters()}
                </ul>}
        </div>
    )
}