import { gql } from 'apollo-boost';

export const loginByToken = gql`
    query loginByToken($token: String!){
        getUserByToken(token: $token){
            _id
            account_name
        }
    }
`;