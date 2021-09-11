import { gql } from 'apollo-boost';

export const loginByToken = gql`
    query loginByToken($token: String!){
        loginByToken(token: $token){
            _id
            name
            email
            token
        }
    }
`;