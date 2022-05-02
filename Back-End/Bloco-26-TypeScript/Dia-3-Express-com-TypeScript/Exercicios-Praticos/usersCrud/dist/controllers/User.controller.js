"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const User_services_1 = __importDefault(require("../services/User.services"));
class UserController {
    userService;
    constructor() {
        this.userService = new User_services_1.default();
    }
    async getAll(req, res) {
        console.log('cheguei ate aqui');
        const users = await this.userService.getAll();
        return res.status(http_status_codes_1.StatusCodes.OK).json(users);
    }
    async getById(req, res) {
        const { id } = req.params;
        const intID = parseInt(id, 10);
        const user = await this.userService.getById(intID);
        return res.status(http_status_codes_1.StatusCodes.OK).json(user);
    }
    async create(req, res) {
        const { name, email, password } = req.body;
        const newUser = await this.userService.create({ name, email, password });
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(newUser);
    }
    async remove(req, res) {
        const { id } = req.params;
        const intID = parseInt(id, 10);
        await this.userService.remove(intID);
        return res.status(http_status_codes_1.StatusCodes.OK).json({ message: `User with id: ${intID}, deleted with sucess.` });
    }
    async update(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const intID = parseInt(id, 10);
        const newUser = await this.userService.update(intID, { name, email, password });
        return res.status(http_status_codes_1.StatusCodes.OK).json(newUser);
    }
}
exports.default = UserController;
