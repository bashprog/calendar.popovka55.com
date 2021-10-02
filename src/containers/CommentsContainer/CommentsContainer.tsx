import React, {useState} from "react";
import Comments from "../../components/Comments/Comments";
import {IComments} from "../../helpers/interfaces";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

interface IProps {
    comments?: IComments[]
}

const CommentsContainer: React.FC<IProps> = ({comments}) => {
    const [auth] = useAtom(authAtom);

    const [commentsArray, changeCommentsArray] = useState(comments);

    const addComment = (newComment: HTMLInputElement) => {
        let array: any = [];
        if (commentsArray)
            array = [... commentsArray];

        let comment = {
            author_id: auth._id,
            comment: newComment.value
        };

        changeCommentsArray([... array, comment]);
    };

    const deleteComment = (key: number) => {
        let array: any = [];
        if (commentsArray)
            array = [... commentsArray];

        array.splice(key, 1);

        changeCommentsArray(array);
    };

    return(
        <Comments comments={commentsArray} addComment={addComment} deleteComment={deleteComment}/>
    )
};

export default CommentsContainer;