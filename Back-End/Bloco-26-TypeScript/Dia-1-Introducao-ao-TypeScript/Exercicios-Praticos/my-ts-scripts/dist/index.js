"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function exec() {
    const avalibleScripts = ["Area Conversion", "Length Conversion", "Mass Conversion", "Volume Conversion"];
    const script = readline_sync_1.default.keyInSelect(avalibleScripts, 'Chose the script you need:');
    switch (true) {
        case script === 0:
            require('../dist/area');
        case script === 1:
            require('../dist/length');
        case script === 2:
            require('../dist/mass');
        case script === 3:
            require('../dist/volume');
        default:
            console.log('Until Later...');
    }
}
exec();
