import { gql } from 'apollo-boost';

export const getAllUsers = gql`
    query{
        getAllUsers{
            _id
            name
            email
        }
    }
`;