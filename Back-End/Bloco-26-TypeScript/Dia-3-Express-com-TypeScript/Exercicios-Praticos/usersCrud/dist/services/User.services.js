"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const Users_model_1 = __importDefault(require("../models/Users.model"));
class UserServices {
    model;
    constructor() {
        this.model = new Users_model_1.default(connection_1.default);
    }
    async getAll() {
        const users = await this.model.getAll();
        return users;
    }
    async getById(id) {
        const user = await this.model.getById(id);
        return user;
    }
    async create(user) {
        const newUser = await this.model.create(user);
        return newUser;
    }
    async remove(id) {
        await this.model.remove(id);
    }
    async update(id, user) {
        const newUser = await this.model.update(id, user);
        return newUser;
    }
}
;
exports.default = UserServices;
