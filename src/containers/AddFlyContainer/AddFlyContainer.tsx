import React from "react";
import AddFly from "../../components/AddFly/AddFly";

const AddFlyContainer: React.FC = () => {
    const currencies = [
        {
            name: "Cessna 210"
        },
        {
            name: "Cessna 182"
        },
        {
            name: "Cessna 317"
        },
        {
            name: "Sigma"
        }
    ];

    return(
        <>
            <AddFly currencies={currencies}/>
        </>
    )
};

export default AddFlyContainer;