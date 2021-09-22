import { gql } from 'apollo-boost';

export const addFly = gql`
    mutation ($author_id: String!, $plane_id: String!, $date: DateTime!, $duration: Int!){
        addFly(author_id: $author_id, plane_id: $plane_id, date: $date, duration: $duration){
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