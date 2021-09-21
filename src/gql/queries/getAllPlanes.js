import { gql } from 'apollo-boost';

export const getAllPlanes = gql`
    query getAllPlanes{
        getAllPlanes{
            _id
            name
        }
    }
`;