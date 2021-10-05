import { gql } from 'apollo-boost';

export const updateUser = gql`
    mutation ($_id: String!, $name: String!, $email: String!, $password: String!){
        updateUser(_id: $_id, name: $name, email: $email, password: $password){
            _id
            name
            email
            password
        }
    }
`;