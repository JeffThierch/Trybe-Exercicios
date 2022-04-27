"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var ConversionValuesInCubicValues;
(function (ConversionValuesInCubicValues) {
    ConversionValuesInCubicValues[ConversionValuesInCubicValues["km"] = 1000000000] = "km";
    ConversionValuesInCubicValues[ConversionValuesInCubicValues["hm"] = 1000000] = "hm";
    ConversionValuesInCubicValues[ConversionValuesInCubicValues["dam"] = 1000] = "dam";
    ConversionValuesInCubicValues[ConversionValuesInCubicValues["m"] = 1] = "m";
    ConversionValuesInCubicValues[ConversionValuesInCubicValues["dm"] = 0.001] = "dm";
    ConversionValuesInCubicValues[ConversionValuesInCubicValues["cm"] = 0.000001] = "cm";
    ConversionValuesInCubicValues[ConversionValuesInCubicValues["mm"] = 1e-9] = "mm";
})(ConversionValuesInCubicValues || (ConversionValuesInCubicValues = {}));
function convert(value, baseUnity, convertUnity) {
    const convertedValue = (value * ConversionValuesInCubicValues[baseUnity]) / ConversionValuesInCubicValues[convertUnity];
    return `${convertedValue} ${convertUnity}³`;
}
;
function exec() {
    const avalibleUnits = ["km", "hm", "dam", "m", 'dm', 'cm', 'mm'];
    const value = readline_sync_1.default.questionFloat('Enter a value: ');
    const baseUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the base unity:');
    const convertUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the convert unity:');
    const convertedValue = convert(value, avalibleUnits[baseUnity], avalibleUnits[convertUnity]);
    console.log(`${value}${avalibleUnits[baseUnity]}³ e igual a ${convertedValue}`);
}
;
exec();
