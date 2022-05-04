"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
exports.default = (err, _request, response, _next) => {
    const { name, message } = err;
    console.log(message, name);
    switch (name) {
        case 'NotFoundError':
            return response.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message });
        case 'BadRequestError':
            return response.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message });
        default:
            return response.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server Error =(' });
    }
};
