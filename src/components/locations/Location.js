import React from 'react';


export default function Location({ id, name, dimension }) {
    return (
        <div>
            <ol>
                {id}
                . {name}
                {dimension}
            </ol>
        </div>
    );
}


