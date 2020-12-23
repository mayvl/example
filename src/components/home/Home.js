import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


export default function Home() {


    return (
        <div className='grid-container'>
            <div className='grid-item'>
                <Link className='link' to='Characters'>
                    Characters
                </Link>
            </div>
            <div className='grid-item'>
                <Link className='link' to='Episodes'>
                    Episodes
                </Link>
            </div>
            <div className='grid-item'>
                <Link className='link' to='Locations'>
                    Locations
                </Link>
            </div>
        </div>
    )
}