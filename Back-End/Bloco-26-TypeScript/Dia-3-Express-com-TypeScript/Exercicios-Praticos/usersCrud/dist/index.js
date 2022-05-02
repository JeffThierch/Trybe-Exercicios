"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
const User_routes_1 = __importDefault(require("./routes/User.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Vivo');
});
app.use('/users', User_routes_1.default);
app.use((err, req, res, next) => {
    console.log(err.message);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
