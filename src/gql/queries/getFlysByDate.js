import { gql } from 'apollo-boost';

export const getFlysByDate = gql`
    query getFlysByDate($from: DateTime!, $to: DateTime!){
        getFlysByDate(from: $from, to: $to){
            _id
            date
            duration
            author{
                _id
                name
                email
            }
            plane{
                _id
                name
            }
            comments{
                _id
                comment
            }
        }
    }
`;