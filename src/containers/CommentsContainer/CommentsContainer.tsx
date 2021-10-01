import React from "react";
import Comments from "../../components/Comments/Comments";
import {IComments} from "../../helpers/interfaces";

interface IProps {
    comments?: IComments[]
}

const CommentsContainer: React.FC<IProps> = ({comments}) => {
    return(
        <Comments comments={comments}/>
    )
};

export default CommentsContainer;