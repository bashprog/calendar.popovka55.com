import React from "react";

import Schedule from "../../components/Schedule/Schedule";

import {comparedAndFormattingDates} from "../../helpers/compareAndFormattingDate";

const ScheduleContainer = () => {
    let array = [
        {
            id: "sdkjhgsjdag",
            date: "2021-08-08T09:50:00.710+00:00",
            duration: 25,
            author: {
                _id: "1234",
                name: "Author_name 2",
                email: "asiugfh123@asg.com",
                token: ""
            }
        },
        {
            id: "sdkj123jdag1",
            date: "2021-08-18T21:20:00.710+00:00",
            duration: 30,
            author: {
                _id: "123",
                name: "Author_name",
                email: "asiugfh@asg.com",
                token: ""
            }
        },
        {
            id: "sdk51gs1dag2",
            date: "2021-08-08T09:20:00.710+00:00",
            duration: 15,
            author: {
                _id: "1235",
                name: "Author_name 3",
                email: "assdiugfh@asaag.com",
                token: ""
            }
        },
        {
            id: "sdk51gs1da123g2agsah",
            date: "2021-08-08T09:20:00.710+00:00",
            duration: 15,
            author: {
                _id: "13235",
                name: "Author_name 4",
                email: "assdiugfh@asaag.com",
                token: ""
            }
        },
        {
            id: "sdk51gs1da123g2sadasd",
            date: "2021-08-08T09:20:00.710+00:00",
            duration: 15,
            author: {
                _id: "13235",
                name: "Author_name 4",
                email: "assdiugfh@asaag.com",
                token: ""
            }
        },
    ];

    let list = comparedAndFormattingDates(array);

    return (
        <Schedule array={list}/>
    )
};

export default ScheduleContainer;