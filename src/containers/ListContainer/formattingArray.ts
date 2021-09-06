import {DatesArray} from "../../interfaces";

interface FormattingArray {
    day: string;
    array: DatesArray[];
}

let monthArray: string[] = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
];

export const formattingArray = (array: DatesArray[] | any) => {
    if (!Array.isArray(array) || !array) {
        console.log("Error. Arg isn't array");
        return null;
    }

    let daysArray: string[] = [];

    let formattingArray: FormattingArray[] = [];

    array.forEach(val => {
        daysArray.push(val.date.slice(0, 10));
    });

    daysArray = [... new Set(daysArray)];

    daysArray.forEach(val => {
        let obj: FormattingArray = {
            day: `${+val.slice(8, 10)} ${monthArray[+val.slice(5,7)]} ${val.slice(0, 4)}`,
            array: []
        };

        array.forEach(value => {
            if (val == value.date.slice(0, 10)) {
                obj.array.push(value);
            }
        });

        formattingArray.push(obj);
    });

    return formattingArray;
};

