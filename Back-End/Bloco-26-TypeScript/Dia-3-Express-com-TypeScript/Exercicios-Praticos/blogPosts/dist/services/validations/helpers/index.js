"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDate = exports.validateIfValuesAreNotEmpty = exports.validateIfKeysExist = void 0;
function validateIfKeysExist(keys, obj) {
    for (let i = 0; i < keys.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(obj, keys[i])) {
            return [false, keys[i]];
        }
    }
    return [true, null];
}
exports.validateIfKeysExist = validateIfKeysExist;
function validateIfValuesAreNotEmpty(obj) {
    const entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i += 1) {
        const [key, value] = entries[i];
        if (!value) {
            return [false, key];
        }
    }
    return [true, null];
}
exports.validateIfValuesAreNotEmpty = validateIfValuesAreNotEmpty;
function validateDate(dateObj) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const dateStr = dateObj.toString();
    if (!dateRegex.test(dateStr)) {
        return false;
    }
    const date = new Date(dateStr);
    const timestamp = date.getTime();
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        return false;
    }
    return date.toISOString().startsWith(dateStr);
}
exports.validateDate = validateDate;
