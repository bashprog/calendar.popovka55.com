export const sortArray = (array) => {
    let comparedArray;

    // Set dates to normal format (if dates in ISO of UTF)
    if (Array.isArray(array))
        comparedArray = array.map(function (val) {
            if (isValidDate(new Date(val?.date))) {
                val.date = new Date(val?.date);
                return val;
            } else {
                console.log("Error. arg have no date ");
                return null;
            }
        });

    function compare(a, b) {
        if (+a.date < +b.date)
            return -1;
        if (+a.date > +b.date)
            return 1;
        return 0;
    }

    function isValidDate(date) {
        return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
    }

    if (Array.isArray(comparedArray) && comparedArray[0]?.date) {
        comparedArray.sort(compare);

        //Set dates to ISO format
        comparedArray = comparedArray.map(function (val) {
            val.date = val.date.toISOString();
            return val;
        });

        return comparedArray;
    }

    console.log("Error. arg have no date");

    return [];
};