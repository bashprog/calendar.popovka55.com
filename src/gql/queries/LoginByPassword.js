import { gql } from 'apollo-boost';

export const loginByPassword = gql`
    mutation loginByPassword($login: String!, $password: String!){
        login(login: $login, password: $password){
            _id
            name
            email
            token
        }
    }
`;