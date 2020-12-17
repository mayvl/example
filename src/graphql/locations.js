import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
query{
    locations{
        results{
            id
            name
            dimension
        }
    }
} 
`;