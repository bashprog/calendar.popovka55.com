import React from "react";

import PlanesSettings from "../../components/PlanesSettings/PlanesSettings";

import {useQuery} from "react-apollo";
import {getAllPlanes} from "../../gql/queries/getAllPlanes";

const PlanesSettingsContainer: React.FC = () => {
    const planes = useQuery(getAllPlanes);

    return(
        <PlanesSettings planes={planes?.data?.getAllPlanes} />
    )
};

export default PlanesSettingsContainer;