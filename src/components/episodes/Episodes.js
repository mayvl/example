import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../graphql/episodes";
import  Episode  from './Episode';

export default function Episodes() {

    const { loading, data } = useQuery(GET_EPISODES);

    function showEpisodes() {
        return (
            data.episodes.results.map(episode => {
                return <Episode
                    key={episode.id}
                    name={episode.name}
                    episode={episode.episode} />
            })
        )
    }
    return (
        <div>
            {loading ? <p>Cargando</p> :
                <ol>
                    {showEpisodes()}
                </ol>
            }
        </div>
    );
}

