import { gql } from 'apollo-boost';

export const deleteComment = gql`
    mutation ($comment_id: String!){
        deleteComment(comment_id: $comment_id){
            _id
        }
    }
`;