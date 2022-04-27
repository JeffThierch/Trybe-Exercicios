"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
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
exports.convert = convert;
;
