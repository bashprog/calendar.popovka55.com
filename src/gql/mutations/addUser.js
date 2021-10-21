import { gql } from 'apollo-boost';

export const addUser = gql`
    mutation ($name: String!, $email: String!, $password: String!){
        addUser(name: $name, email: $email, password: $password){
            _id
        }
    }
`;