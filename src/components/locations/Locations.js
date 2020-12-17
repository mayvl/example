import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../graphql/locations";
import Location from "./Location";


export default function Locations() {
    const { loading, data } = useQuery(GET_LOCATIONS);

    function showLocations() {
        return (
            data.locations.results.map(location => {
                return <Location
                    key={location.id}
                    id={location.id}
                    name={location.name}
                    location={location.location}

                />
            }
            )  )
     }

    return (
        <div>
            { loading ? <p>Cargando...</p> :
                <li>
                    {showLocations()}
                </li>
            }
        </div>
    )
}