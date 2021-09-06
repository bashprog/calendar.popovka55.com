import {DatesArray} from "../../interfaces";

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

export const compareArray = (array: DatesArray[] | any) => {
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