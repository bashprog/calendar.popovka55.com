import React, {useEffect} from "react";

import PopUp from "../../components/PopUp/PopUp";

import {useAtom} from "jotai";
import {popUpObject} from "../../atoms";

const PopUpContainer: React.FC = () => {
    const [object, change] = useAtom(popUpObject);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (object.success) {
                change({... object, visible: false});
            }
        }, 5000);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <PopUp object={object} />
        </>
    )
};

export default PopUpContainer;