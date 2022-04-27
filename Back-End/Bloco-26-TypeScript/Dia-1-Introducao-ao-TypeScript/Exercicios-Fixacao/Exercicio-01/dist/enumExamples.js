"use strict";
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["Domingo"] = 1] = "Domingo";
    daysOfWeek[daysOfWeek["Segunda-Feira"] = 2] = "Segunda-Feira";
    daysOfWeek[daysOfWeek["Terca-Feira"] = 3] = "Terca-Feira";
    daysOfWeek[daysOfWeek["Quarta Feira"] = 4] = "Quarta Feira";
    daysOfWeek[daysOfWeek["Quinta Feira"] = 5] = "Quinta Feira";
    daysOfWeek[daysOfWeek["Sexta Feira"] = 6] = "Sexta Feira";
    daysOfWeek[daysOfWeek["Sabado"] = 7] = "Sabado";
})(daysOfWeek || (daysOfWeek = {}));
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["firstColor"] = "Vermelho";
    rainbowColors["secondColor"] = "Laranja";
    rainbowColors["thirdColor"] = "Amarela";
    rainbowColors["fouthColor"] = "Verde";
    rainbowColors["fifthColor"] = "Azul";
    rainbowColors["sixthColor"] = "Azul-Escuro";
    rainbowColors["seventhColor"] = "Violeta";
})(rainbowColors || (rainbowColors = {}));
var interactionActions;
(function (interactionActions) {
    interactionActions[interactionActions["save"] = 0] = "save";
    interactionActions[interactionActions["print"] = 1] = "print";
    interactionActions[interactionActions["open"] = 2] = "open";
    interactionActions[interactionActions["view"] = 3] = "view";
    interactionActions[interactionActions["close"] = 4] = "close";
})(interactionActions || (interactionActions = {}));
var cardinalsRegions;
(function (cardinalsRegions) {
    cardinalsRegions["Norte"] = "N";
    cardinalsRegions["Leste"] = "L";
    cardinalsRegions["Sul"] = "S";
    cardinalsRegions["Oeste"] = "O";
})(cardinalsRegions || (cardinalsRegions = {}));
console.log(cardinalsRegions);
