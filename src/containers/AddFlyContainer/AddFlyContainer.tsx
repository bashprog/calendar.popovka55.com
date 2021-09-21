import React from "react";
import AddFly from "../../components/AddFly/AddFly";

import {useQuery} from "react-apollo";
import {getAllPlanes} from "../../gql/queries/getAllPlanes";
import Preloader from "../../components/Preloader/Preloader";

const AddFlyContainer: React.FC = () => {
    const planes = useQuery(getAllPlanes);

    return(
        <>
            {planes?.loading ? <Preloader/> : <AddFly planes={planes?.data?.getAllPlanes}/>}
        </>
    )
};

export default AddFlyContainer;