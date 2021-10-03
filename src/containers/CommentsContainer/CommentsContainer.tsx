import React, {useState} from "react";
import Comments from "../../components/Comments/Comments";
import {IComments} from "../../helpers/interfaces";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

import {useMutation} from "react-apollo";
import {addComment} from "../../gql/mutations/addComment";
import {deleteComment} from "../../gql/mutations/deleteComment";

import Preloader from "../../components/Preloader/Preloader";

interface IProps {
    comments?: IComments[],
    flyId: string
}

const CommentsContainer: React.FC<IProps> = ({comments, flyId}) => {
    const [auth] = useAtom(authAtom);

    const [commentsArray, changeCommentsArray] = useState(comments);

    const [addCommentMut, commentInfo] = useMutation(addComment);

    const [deleteCommentMut, deleteInfo] = useMutation(deleteComment);

    const handleAddComment = (newComment: HTMLInputElement) => {
        addCommentMut({variables: {comment: newComment.value, author_id: auth._id, fly_id: flyId}}).then(res => {
            if (Array.isArray(commentsArray)) {
                changeCommentsArray([...commentsArray, res.data?.addComment])
            } else {
                changeCommentsArray([...res.data?.addComment])
            }
        });
    };

    const handleDeleteComment = (id: string) => {
        deleteCommentMut({variables: {comment_id: id}}).then(res => {
            if (Array.isArray(commentsArray)) {
                let array = [... commentsArray];
                let i = array.findIndex(e => e._id == id);
                array.splice(i, 1);
                Array.isArray(array) ? changeCommentsArray(array) : changeCommentsArray([]);
            }
        })
    };

    return (
        <>
            {(commentInfo.loading || deleteInfo.loading) ? <Preloader/> :
                <Comments comments={commentsArray} addComment={handleAddComment} deleteComment={handleDeleteComment}/>
            }
        </>
    )
};

export default CommentsContainer;