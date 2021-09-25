import { gql } from 'apollo-boost';

export const getDailyFlys = gql`
    query getDailyFlys($date: DateTime!){
        getDailyFlys(date: $date){
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