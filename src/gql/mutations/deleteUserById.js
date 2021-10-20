import { gql } from 'apollo-boost';

export const deleteUserById = gql`
    mutation deleteUserById($_id: String!){
        deleteUserById(_id: $_id){
            _id
        }
    }
`;