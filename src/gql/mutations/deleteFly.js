import { gql } from 'apollo-boost';

export const deleteFly = gql`
    mutation deleteFly($fly_id: String!){
        deleteFly(fly_id: $fly_id){
            _id
        }
    }
`;