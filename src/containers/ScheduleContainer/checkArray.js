export const checkArray = (array) => {
    let daysArray = [];
    array.forEach((val, key) => {
        daysArray.push(val.date.slice(0,10));
    });
    daysArray = [... new Set(daysArray)];

    let test = [];

    daysArray.forEach((val) => {
        test.push({
            day: val,
            array: []
        })
    });

    console.log(test);

    array.forEach((val, key) => {
        let day = val.date.slice(0,10);
        test.forEach((value) => {
            if (day == value.day) {
                value.array.push(array[key]);
            }
        })
    });

    console.log(test);

    return test;
};