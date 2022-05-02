"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = __importDefault(require("../controllers/User.controller"));
const userController = new User_controller_1.default();
console.log(userController, 'rotas');
const router = (0, express_1.Router)();
router
    .get('/', userController.getAll)
    .post('/', userController.create)
    .get('/:id', userController.getById)
    .put('/:id', userController.update)
    .delete('/:id', userController.remove);
exports.default = router;
