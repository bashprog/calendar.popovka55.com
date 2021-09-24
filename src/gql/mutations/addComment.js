import { gql } from 'apollo-boost';

export const addComment = gql`
    mutation ($author_id: String!, $fly_id: String!, $comment: String!){
        addComment(author_id: $author_id, fly_id: $fly_id, comment: $comment){
            _id
            comment
            fly_id
            author_id
        }
    }
`;