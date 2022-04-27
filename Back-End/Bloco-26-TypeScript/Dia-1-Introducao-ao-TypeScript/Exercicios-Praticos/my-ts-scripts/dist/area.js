"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
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
exports.convert = convert;
;
