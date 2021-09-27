import React from "react";

import {useParams} from "react-router-dom";
import {useQuery} from "react-apollo";
import {getFlyById} from "../../gql/queries/getFlyById";
import ChangeFly from "../../components/ChangeFly/ChangeFly";
import {getAllPlanes} from "../../gql/queries/getAllPlanes";

const ChangeFlyContainer: React.FC = () => {
    const {id} = useParams<{ id?: string }>();

    const fly = useQuery(getFlyById, {variables: {_id: id}});
    const planes = useQuery(getAllPlanes);

    return (
        <>
            {(fly?.data?.getFlyById && planes) ? <ChangeFly fly={fly?.data?.getFlyById} planes={planes?.data?.getAllPlanes}/> : null}
        </>
    )
};

export default ChangeFlyContainer;