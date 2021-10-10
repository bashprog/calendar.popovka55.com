import { gql } from 'apollo-boost';

export const deletePlane = gql`
    mutation ($_id: String!){
        deletePlane(_id: $_id){
            _id
        }
    }
`;