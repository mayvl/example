import React from 'react';

export default function Episode({name, episode}) {
    return (
        <ol>
            { name }
            .  {episode}
        </ol>
    );
}

