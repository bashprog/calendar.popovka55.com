import React from "react";

import PlanesSettings from "../../components/PlanesSettings/PlanesSettings";

import {useQuery, useMutation} from "react-apollo";
import {getAllPlanes} from "../../gql/queries/getAllPlanes";
import {addPlane} from "../../gql/mutations/addPlane";
import {deletePlane} from "../../gql/mutations/deletePlane";
import Preloader from "../../components/Preloader/Preloader";

const PlanesSettingsContainer: React.FC = () => {
    const planes = useQuery(getAllPlanes);

    const [addPlaneMut, planeInfo] = useMutation(addPlane);

    const [deletePlaneMut, planeDeleteInfo] = useMutation(deletePlane);

    const handleAdd = () => {
        let name = (document.getElementById("new-plane") as HTMLInputElement).value;
        (document.getElementById("new-plane") as HTMLInputElement).value = "";
        addPlaneMut({variables: {name: name}}).then(() => planes.refetch());
    };

    const handleDelete = (id: string) => {
        deletePlaneMut({variables: {_id: id}}).then(() => planes.refetch());
    };

    return (
        <>
            {(planeInfo.loading || planeDeleteInfo.loading || planes.loading) ? <Preloader/> :
                <PlanesSettings planes={planes?.data?.getAllPlanes} add={handleAdd} handleDelete={handleDelete}/>}
        </>
    )
};

export default PlanesSettingsContainer;