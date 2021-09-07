declare global {
    interface Date {
        addMinutes(m: number): Date;
        addHours(h: number): Date;
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

Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
};

export {};