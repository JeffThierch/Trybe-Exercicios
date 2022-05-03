"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostsRoutes_1 = __importDefault(require("./PostsRoutes"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use('/posts', PostsRoutes_1.default);
router.use((err, request, response, next) => {
    console.log(err.message);
});
exports.default = router;
