import { gql } from 'apollo-boost';

export const getFlyById = gql`
    query getFlyById($_id: String!){
        getFlyById(_id: $_id){
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
                author{
                    _id
                    name
                }
            }
        }
    }
`;