"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
var ConversionValuesInMeters;
(function (ConversionValuesInMeters) {
    ConversionValuesInMeters[ConversionValuesInMeters["km"] = 1000] = "km";
    ConversionValuesInMeters[ConversionValuesInMeters["hm"] = 100] = "hm";
    ConversionValuesInMeters[ConversionValuesInMeters["dam"] = 10] = "dam";
    ConversionValuesInMeters[ConversionValuesInMeters["m"] = 1] = "m";
    ConversionValuesInMeters[ConversionValuesInMeters["dm"] = 0.1] = "dm";
    ConversionValuesInMeters[ConversionValuesInMeters["cm"] = 0.01] = "cm";
    ConversionValuesInMeters[ConversionValuesInMeters["mm"] = 0.001] = "mm";
})(ConversionValuesInMeters || (ConversionValuesInMeters = {}));
function convert(value, baseUnity, convertUnity) {
    const convertedValue = (value * ConversionValuesInMeters[baseUnity]) / ConversionValuesInMeters[convertUnity];
    return `${convertedValue} ${convertUnity}`;
}
exports.convert = convert;
function exec() {
    const avalibleUnits = ["km", "hm", "dam", "m", 'dm', 'cm', 'mm'];
    const value = readline_sync_1.default.questionFloat('Enter a value: ');
    const baseUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the base unity:');
    const convertUnity = readline_sync_1.default.keyInSelect(avalibleUnits, 'Chose the convert unity:');
    const convertedValue = convert(value, avalibleUnits[baseUnity], avalibleUnits[convertUnity]);
    console.log(`${value}${avalibleUnits[baseUnity]} e igual a ${convertedValue}`);
}
exec();
