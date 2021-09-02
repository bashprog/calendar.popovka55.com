Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
};

Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
};