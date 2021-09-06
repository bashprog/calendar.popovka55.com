import React from "react";

import Schedule from "../../components/Schedule/Schedule";

const ScheduleContainer = () => {
    let array = [
        {
            id: "sdkjhgsjdag",
            date: "2021-08-08T09:50:00.710+00:00",
            duration: 25,
            author: {
                name: "Author_name"
            }
        },
        {
            id: "sdkj123jdag1",
            date: "2021-08-18T21:20:00.710+00:00",
            duration: 30,
            author: {
                name: "Author_name"
            }
        },
        {
            id: "sdk51gs1dag2",
            date: "2021-08-08T09:20:00.710+00:00",
            duration: 15,
            author: {
                name: "Author_name"
            }
        },
    ];

    return (
        <Schedule array={array}/>
    )
};

export default ScheduleContainer;