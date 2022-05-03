"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const PostsModel_1 = __importDefault(require("../models/PostsModel"));
class PostsServices {
    model;
    constructor() {
        this.model = new PostsModel_1.default(connection_1.default);
    }
    async getAll() {
        const posts = await this.model.getAll();
        return posts;
    }
    async getById(id) {
        const post = await this.model.getById(id);
        return post;
    }
    async create(post) {
        const newPost = await this.model.create(post);
        return newPost;
    }
    async update(post) {
        const newPost = await this.model.update(post);
        return newPost;
    }
    async remove(id) {
        await this.model.remove(id);
    }
    async searchByQueryParams(params) {
        const posts = await this.model.searchByQueryParams(params);
        return posts;
    }
}
exports.default = PostsServices;
