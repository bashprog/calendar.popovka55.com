import React from "react";

import {useParams} from "react-router-dom";
import {useQuery, useMutation} from "react-apollo";
import {getFlyById} from "../../gql/queries/getFlyById";
import ChangeFly from "../../components/ChangeFly/ChangeFly";
import {getAllPlanes} from "../../gql/queries/getAllPlanes";
import {changeFly} from "../../gql/mutations/changeFly";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";
import Preloader from "../../components/Preloader/Preloader";


function formatDate(date: string, time: string) {
    return `${date.slice(6, 10)}-${date.slice(3, 5)}-${date.slice(0, 2)}T${time}:00.000Z`;
}

const ChangeFlyContainer: React.FC = () => {
    const {id} = useParams<{ id?: string }>();

    const [auth] = useAtom(authAtom);

    const fly = useQuery(getFlyById, {variables: {_id: id}});
    const planes = useQuery(getAllPlanes);

    const [changeFlyMut, changeInfo] = useMutation(changeFly);

    const handleSaveChanges = () => {
        let date = (document.getElementById("c-date") as HTMLInputElement).value;
        let time = (document.getElementById("c-time") as HTMLInputElement).value;
        let duration = (document.getElementById("c-duration") as HTMLInputElement).value;
        let plane = (document.getElementById("c-plane") as HTMLInputElement).textContent;

        let planeObj = planes?.data?.getAllPlanes.find((el: { id: string; name: string; __typename?: any }) => plane == el.name); //Get chosen plane object

        const obj = {
            fly_id: id,
            date: formatDate(date, time),
            duration: +duration.slice(0, 2) * 60 + +duration.slice(3, 5),
            plane_id: `${planeObj._id}`,
            author_id: `${auth._id}`
        };

        changeFlyMut(({
            variables: {
                fly_id: obj.fly_id,
                plane_id: obj.plane_id,
                date: obj.date,
                duration: obj.duration
            }
        })).then(res => console.log(res));
    };

    return (
        <>
            {(fly?.data?.getFlyById && planes) ?
                <>
                    {changeInfo.loading ? <Preloader/> : <ChangeFly save={handleSaveChanges} fly={fly?.data?.getFlyById}
                                                                    planes={planes?.data?.getAllPlanes}/>}
                </>
                : null}
        </>
    )
};

export default ChangeFlyContainer;