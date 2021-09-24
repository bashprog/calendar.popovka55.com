import React from "react";
import AddFly from "../../components/AddFly/AddFly";

import {useQuery} from "react-apollo";
import {getAllPlanes} from "../../gql/queries/getAllPlanes";
import Preloader from "../../components/Preloader/Preloader";
import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

import { useMutation } from "react-apollo";
import { addFly } from "../../gql/mutations/addFly";
import {addComment} from "../../gql/mutations/addComment";

function formatDate(date: string, time: string) {
    return `${date.slice(6,10)}-${date.slice(3,5)}-${date.slice(0,2)}T${time}:00.000Z`;
}

const AddFlyContainer: React.FC = () => {
    const [auth] = useAtom(authAtom);

    const planes = useQuery(getAllPlanes);

    const [addFlyMut, addFlyInfo] = useMutation(addFly);
    const [addCommentMut, addCommentInfo] = useMutation(addComment);

    const add = (): void => {
        let date = (document.getElementById("date") as HTMLInputElement).value;
        let time = (document.getElementById("time") as HTMLInputElement).value;
        let duration = (document.getElementById("duration") as HTMLInputElement).value;
        let comment = (document.getElementById("comment") as HTMLInputElement).value;
        let plane = (document.getElementById("plane") as HTMLInputElement).textContent;

        let planeObj = planes?.data?.getAllPlanes.find((el: {id: string; name: string; __typename?: any}) => plane == el.name); //Get chosen plane object

        const obj = {
            date: formatDate(date, time),
            duration: +duration.slice(0, 2) * 60 + +duration.slice(3, 5),
            plane_id: `${planeObj._id}`,
            author_id: `${auth._id}`
        };

        addFlyMut({variables: {author_id: obj.author_id, plane_id: obj.plane_id, date: obj.date, duration: obj.duration}})
            .then(({data}) => {
                console.log(comment, auth._id, data.addFly._id);
                addCommentMut({variables: {comment: comment, author_id: auth._id, fly_id: data.addFly._id}}).then(res => console.log(res));
            })
            .catch(e => console.log(e));

        console.log(obj)
    };

    return(
        <>
            {planes?.loading ? <Preloader/> : <AddFly add={() => add()} planes={planes?.data?.getAllPlanes}/>}
        </>
    )
};

export default AddFlyContainer;