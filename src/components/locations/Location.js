import React from 'react';


export default function Location({ id, name, dimension }) {
    return (
        <div>
            <li>
                {id}
                {name}
                {dimension}
            </li>
        </div>
    );
}


