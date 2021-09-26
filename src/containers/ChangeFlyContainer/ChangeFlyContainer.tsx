import React from "react";

import {useParams} from "react-router-dom";
import {useQuery} from "react-apollo";
import {getFlyById} from "../../gql/queries/getFlyById";

const ChangeFlyContainer: React.FC = () => {
    const {id} = useParams<{id?: string}>();

    const fly = useQuery(getFlyById, {variables: {_id: id}});

    console.log(fly);

    return(
        <h2>ChangeFlyContainer</h2>
    )
};

export default ChangeFlyContainer;