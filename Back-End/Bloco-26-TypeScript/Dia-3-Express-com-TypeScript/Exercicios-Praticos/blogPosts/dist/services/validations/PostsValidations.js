"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQueryStringDateFormat = exports.validatePostFields = void 0;
const restify_errors_1 = require("restify-errors");
const helpers_1 = require("./helpers");
function validatePostFieldsExist(postInfos) {
    const keys = ['title', 'author', 'category', 'publicationDate'];
    let [valid, key] = (0, helpers_1.validateIfKeysExist)(keys, postInfos);
    if (!valid) {
        throw new restify_errors_1.BadRequestError(`The field ${key} is required`);
    }
    [valid, key] = (0, helpers_1.validateIfValuesAreNotEmpty)(postInfos);
    if (!valid) {
        throw new restify_errors_1.BadRequestError(`The field ${key} cannot be empty or null`);
    }
    return true;
}
function validateTheFieldsFormat(postInfos) {
    const { author, category, publicationDate } = postInfos;
    switch (true) {
        case (author.length < 3):
            throw new restify_errors_1.BadRequestError("The field 'author' must be at least 3 characters");
        case (category.length < 3):
            throw new restify_errors_1.BadRequestError("The field 'category' must be at least 3 characters");
        case !(0, helpers_1.validateDate)(publicationDate):
            throw new restify_errors_1.BadRequestError("The field 'publicationDate' must have the format 'yyyy-mm-dd' ");
        default:
            return true;
    }
}
function validatePostFields(postInfos) {
    validatePostFieldsExist(postInfos);
    validateTheFieldsFormat(postInfos);
}
exports.validatePostFields = validatePostFields;
function validateQueryStringDateFormat(date) {
    if (!(0, helpers_1.validateDate)(date)) {
        throw new restify_errors_1.BadRequestError("The field 'publicationDate' must have the format 'yyyy-mm-dd' ");
    }
}
exports.validateQueryStringDateFormat = validateQueryStringDateFormat;
