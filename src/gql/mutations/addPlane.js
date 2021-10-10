import { gql } from 'apollo-boost';

export const addPlane = gql`
    mutation ($name: String!){
        addPlane(name: $name){
            _id
            name
        }
    }
`;