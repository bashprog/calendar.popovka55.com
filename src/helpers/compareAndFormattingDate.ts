import {DatesArray} from "./interfaces"

import {IFormattingDates} from "./interfaces";

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

function compare(a: any, b: any) {
    if (+a.date < +b.date)
        return -1;
    if (+a.date > +b.date)
        return 1;
    return 0;
}

function isValidDate(date: any) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

const compareArray = (array: DatesArray[] | any) => {
    if (!Array.isArray(array) || !array) {
        console.log("Error. Arg isn't array");
        return null;
    }

    let some = array.map(val => {
        if (val.date == +val.date)
            val.date = new Date(+val.date);
        return val;
    }); // Temp fix (If dates in ISO format +val.date === NaN and broke function) (Problem is in recall this function and i wanna sleep sorry)

    let comparedArray = [...some].map(val => {
        if (isValidDate(new Date(val?.date))) {
            val.date = new Date(val?.date);
            return val;
        } else {
            console.log("Error. Arg have no date field ");
            return null;
        }
    });

    comparedArray.filter(n => n); // remove all nulls

    if (!comparedArray[0]?.date)
        return null;

    comparedArray.sort(compare);

    comparedArray = comparedArray.map(val => {
        val.date = val.date.toISOString();
        return val;
    });

    return comparedArray;
};

const formattingArray = (array: DatesArray[] | any): IFormattingDates[] | undefined => {
    if (!Array.isArray(array) || !array || !array.length) {
        console.log("Error. Arg isn't array");
        return undefined;
    }

    let daysArray: string[] = [];

    let formattingArray: IFormattingDates[] = [];

    array.forEach(val => {
        daysArray.push(val.date.slice(0, 10));
    });

    daysArray = [... new Set(daysArray)];

    daysArray.forEach(val => {
        let obj: IFormattingDates = {
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

export const comparedAndFormattingDates = (dates: DatesArray | any) => {
    if (Array.isArray(dates) && !dates[0].day){
        let array = [... dates];
        console.log("dates", dates);
        console.log("array", array);
        let comparedArray = compareArray(array);
        if (comparedArray)
            return formattingArray(comparedArray);
    } else {
        return dates;
    }
};