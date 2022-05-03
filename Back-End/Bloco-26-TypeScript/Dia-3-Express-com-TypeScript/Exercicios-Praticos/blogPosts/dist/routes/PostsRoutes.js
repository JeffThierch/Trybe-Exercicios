"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostsControllers_1 = __importDefault(require("../controllers/PostsControllers"));
const postsControllers = new PostsControllers_1.default();
const router = (0, express_1.Router)();
router
    .get('/', postsControllers.getAll)
    .post('/', postsControllers.create)
    .get('/search', postsControllers.searchByQueryParams)
    .get('/:id', postsControllers.getById)
    .put('/:id', postsControllers.update)
    .delete('/:id', postsControllers.remove);
exports.default = router;
