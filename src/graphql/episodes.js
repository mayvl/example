import { from } from "@apollo/client";
import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
query{
    episodes {
        results {
            name
            episode
        }
    }
}
`;
