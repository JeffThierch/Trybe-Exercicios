"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var ConversionValuesInGrams;
(function (ConversionValuesInGrams) {
    ConversionValuesInGrams[ConversionValuesInGrams["kg"] = 1000] = "kg";
    ConversionValuesInGrams[ConversionValuesInGrams["hg"] = 100] = "hg";
    ConversionValuesInGrams[ConversionValuesInGrams["dag"] = 10] = "dag";
    ConversionValuesInGrams[ConversionValuesInGrams["g"] = 1] = "g";
    ConversionValuesInGrams[ConversionValuesInGrams["dg"] = 0.1] = "dg";
    ConversionValuesInGrams[ConversionValuesInGrams["cg"] = 0.01] = "cg";
    ConversionValuesInGrams[ConversionValuesInGrams["mg"] = 0.001] = "mg";
})(ConversionValuesInGrams || (ConversionValuesInGrams = {}));
function convert(value, baseUnity, convertUnity) {
    const convertedValue = (value / ConversionValuesInGrams[baseUnity]) * ConversionValuesInGrams[convertUnity];
    return `${convertedValue} ${convertUnity}`;
}
;
function exec() {
    const avalibleUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
    const value = readline_sync_1.default.questionFloat('Enter a value: ');
    const baseUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the base unity:');
    const convertUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the convert unity:');
    const convertedValue = convert(value, avalibleUnits[baseUnity], avalibleUnits[convertUnity]);
    console.log(`${value}${avalibleUnits[baseUnity]} e igual a ${convertedValue}`);
}
;
exec();
