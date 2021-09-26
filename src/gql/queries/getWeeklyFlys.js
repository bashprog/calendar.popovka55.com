import { gql } from 'apollo-boost';

export const getWeeklyFlys = gql`
    query getWeeklyFlys($date: DateTime!){
        getWeeklyFlys(date: $date){
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