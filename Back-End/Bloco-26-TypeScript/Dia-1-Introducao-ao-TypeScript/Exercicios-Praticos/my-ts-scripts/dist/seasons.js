"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync"));
var YearMonths;
(function (YearMonths) {
    YearMonths[YearMonths["Janeiro"] = 1] = "Janeiro";
    YearMonths[YearMonths["Fevereiro"] = 2] = "Fevereiro";
    YearMonths[YearMonths["Mar\u00E7o"] = 3] = "Mar\u00E7o";
    YearMonths[YearMonths["Abril"] = 4] = "Abril";
    YearMonths[YearMonths["Maio"] = 5] = "Maio";
    YearMonths[YearMonths["Junho"] = 6] = "Junho";
    YearMonths[YearMonths["Julho"] = 7] = "Julho";
    YearMonths[YearMonths["Agosto"] = 8] = "Agosto";
    YearMonths[YearMonths["Setembro"] = 9] = "Setembro";
    YearMonths[YearMonths["Outubro"] = 10] = "Outubro";
    YearMonths[YearMonths["Novembro"] = 11] = "Novembro";
    YearMonths[YearMonths["Dezembro"] = 12] = "Dezembro";
})(YearMonths || (YearMonths = {}));
var SeasonsOfTheYear;
(function (SeasonsOfTheYear) {
    SeasonsOfTheYear["OUTONO"] = "Outono";
    SeasonsOfTheYear["INVERNO"] = "Inverno";
    SeasonsOfTheYear["PRIMAVERA"] = "Primavera";
    SeasonsOfTheYear["VERAO"] = "Verao";
})(SeasonsOfTheYear || (SeasonsOfTheYear = {}));
const seasonsNorth = {
    [SeasonsOfTheYear.OUTONO]: [YearMonths['9'], YearMonths['10'], YearMonths['11'], YearMonths['12']],
    [SeasonsOfTheYear.INVERNO]: [YearMonths['12'], YearMonths['1'], YearMonths['2'], YearMonths['3']],
    [SeasonsOfTheYear.PRIMAVERA]: [YearMonths['3'], YearMonths['4'], YearMonths['5'], YearMonths['6']],
    [SeasonsOfTheYear.VERAO]: [YearMonths['6'], YearMonths['7'], YearMonths['8'], YearMonths['9']]
};
const seasonsSouth = {
    [SeasonsOfTheYear.OUTONO]: seasonsNorth.Primavera,
    [SeasonsOfTheYear.INVERNO]: seasonsNorth.Verao,
    [SeasonsOfTheYear.PRIMAVERA]: seasonsNorth.Outono,
    [SeasonsOfTheYear.VERAO]: seasonsNorth.Inverno
};
const hemispheres = {
    "North": seasonsNorth,
    "South": seasonsSouth
};
function seasonsByHemisphere(month, hemisphere) {
    const selectedMonth = YearMonths[month];
    const hemisphereSeasons = hemispheres[hemisphere];
    console.log(`Month: ${selectedMonth}`);
    console.log(`Hemisphere: ${hemisphere}`);
    console.log('Seasons:');
    Object.entries(hemisphereSeasons).map((entry) => {
        const season = entry[0];
        const months = entry[1];
        if (months.includes(selectedMonth)) {
            console.log(season);
        }
    });
}
function exec() {
    const avaliblesHemisphere = ['North', 'South'];
    const month = readline_sync_1.default.questionInt('Choose a month between 1 - 12: ');
    if (month < 1 || month > 12) {
        console.log('Invalid month, Exiting...');
        (0, process_1.exit)();
    }
    const hemisphere = readline_sync_1.default.keyInSelect(avaliblesHemisphere, 'Choose a hemisphere');
    if (hemisphere === -1) {
        console.log('Exiting...');
        (0, process_1.exit)();
    }
    seasonsByHemisphere(month, avaliblesHemisphere[hemisphere]);
}
;
exec();
