declare global {
    interface Date {
        addMinutes(m: number): Date;
        addHours(h: number): Date;
        addWeek(): Date;
        isValid(): boolean;
    }
}

Date.prototype.addMinutes = function (m: number) {
    this.setMinutes(this.getMinutes() + m);
    return this;
};

Date.prototype.addHours = function (h: number) {
    this.setHours(this.getHours() + h);
    return this;
};

Date.prototype.addWeek = function () {
    this.setDate(this.getDate() + 7);
    return this;
};

Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
};

export {};