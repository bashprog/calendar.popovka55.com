import {DatesArray} from "./interfaces"

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

    let comparedArray = [...array].map(val => {
        if (isValidDate(new Date(val?.date))) {
            val.date = new Date(val?.date);
            return val;
        } else {
            console.log("Error. arg have no date field ");
            return null;
        }
    });

    comparedArray.sort(compare);

    comparedArray = comparedArray.map(val => {
        val.date = val.date.toISOString();
        return val;
    });

    return comparedArray;
};

const formattingArray = (array: DatesArray[] | any) => {
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

    return formattingArray || undefined;
};

export const comparedAndFormattingDates = (dates: DatesArray | any) => {
    let comparedArray = compareArray(dates);
    return formattingArray(comparedArray);
};