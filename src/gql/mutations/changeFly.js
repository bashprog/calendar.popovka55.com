import { gql } from 'apollo-boost';

export const changeFly = gql`
    mutation ($fly_id: String!, $plane_id: String!, $date: DateTime!, $duration: Int!){
        changeFly(fly_id: $fly_id, plane_id: $plane_id, date: $date, duration: $duration){
            _id
            date
            duration
            plane_id
            author{
                _id
            }
            plane{
                _id
                name
            }
        }
    }
`;