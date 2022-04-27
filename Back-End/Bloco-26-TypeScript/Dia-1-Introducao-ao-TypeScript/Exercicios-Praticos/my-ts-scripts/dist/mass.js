"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
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
exports.convert = convert;
;
