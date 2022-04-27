"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
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
