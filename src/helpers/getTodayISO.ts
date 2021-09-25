export const getTodayISO = (): string => {
    let a: any = new Date(); //Get today
    let GMTOffset = a.getTimezoneOffset() / 60;
    a.addHours(~GMTOffset+1); //Add GMT (reverse GMTOffset)
    a = a.toISOString();

    let d = a.slice(0, 10);

    return `${d}T00:00:00.000Z`;
};