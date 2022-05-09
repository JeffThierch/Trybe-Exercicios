"use strict";
class Data {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        if (isNaN(Date.parse(`${year}-${month}-${day}`))) {
            this._date = new Date(`1900-1-1`);
            return;
        }
        this._date = new Date(`${year}-${month}-${day}`);
    }
    get date() {
        return this._date.toLocaleDateString('pt-BR');
    }
    getMonthName() {
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return months[this.month - 1];
    }
    isLeapYear() {
        if ((this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0)) {
            return true;
        }
        return false;
    }
    compare(date) {
        if (this.date > date.date)
            return 1;
        if (this.date < date.date)
            return -1;
        return 0;
    }
    format(formatString) {
        const formatConditions = [
            (!formatString.match(/a{2,4}/g)),
            (!formatString.match(/m{2}/g) && !formatString.match(/M{1}/g)),
            (!formatString.match(/d{2}/g))
        ];
        if (formatConditions.every((condition) => condition)) {
            throw new Error(`O formato passado é inválido: ${formatString}`);
        }
        const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
        const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
        const year = this.year.toString();
        const formatedDate = formatString
            .replace('dd', day)
            .replace('mm', month)
            .replace('M', this.getMonthName())
            .replace('aaaa', year)
            .replace('aa', year.substring(2));
        return formatedDate;
    }
}
const test = new Data(7, 8, 2000);
console.log(test.format('dd de M de aaaa'));
