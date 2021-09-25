import { gql } from 'apollo-boost';

export const getAllPlanes = gql`
    query{
        getAllPlanes{
            _id
            name
        }
    }
`;