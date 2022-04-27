"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var ConversionValuesInSquareMeter;
(function (ConversionValuesInSquareMeter) {
    ConversionValuesInSquareMeter[ConversionValuesInSquareMeter["km"] = 1000000] = "km";
    ConversionValuesInSquareMeter[ConversionValuesInSquareMeter["hm"] = 10000] = "hm";
    ConversionValuesInSquareMeter[ConversionValuesInSquareMeter["dam"] = 100] = "dam";
    ConversionValuesInSquareMeter[ConversionValuesInSquareMeter["m"] = 1] = "m";
    ConversionValuesInSquareMeter[ConversionValuesInSquareMeter["dm"] = 0.01] = "dm";
    ConversionValuesInSquareMeter[ConversionValuesInSquareMeter["cm"] = 0.00009999999999999999] = "cm";
    ConversionValuesInSquareMeter[ConversionValuesInSquareMeter["mm"] = 0.000001] = "mm";
})(ConversionValuesInSquareMeter || (ConversionValuesInSquareMeter = {}));
function convert(value, baseUnity, convertUnity) {
    const convertedValue = (value * ConversionValuesInSquareMeter[baseUnity]) / ConversionValuesInSquareMeter[convertUnity];
    return `${convertedValue} ${convertUnity}²`;
}
;
function exec() {
    const avalibleUnits = ["km", "hm", "dam", "m", 'dm', 'cm', 'mm'];
    const value = readline_sync_1.default.questionFloat('Enter a value: ');
    const baseUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the base unity:');
    const convertUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the convert unity:');
    const convertedValue = convert(value, avalibleUnits[baseUnity], avalibleUnits[convertUnity]);
    console.log(`${value}${avalibleUnits[baseUnity]}² e igual a ${convertedValue}`);
}
exec();
