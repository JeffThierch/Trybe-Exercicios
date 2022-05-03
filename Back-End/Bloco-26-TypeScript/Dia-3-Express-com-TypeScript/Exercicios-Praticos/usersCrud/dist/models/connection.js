"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, DB_DATABASE } = process.env;
exports.default = promise_1.default.createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    port: Number(DB_PORT),
    host: DB_HOST,
    database: DB_DATABASE
});
