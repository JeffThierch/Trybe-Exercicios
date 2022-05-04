"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const PostsModel_1 = __importDefault(require("../models/PostsModel"));
const restify_errors_1 = require("restify-errors");
const PostsValidations_1 = require("./validations/PostsValidations");
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
        if (!post) {
            throw new restify_errors_1.NotFoundError('Post not found!');
        }
        return post;
    }
    async create(post) {
        (0, PostsValidations_1.validatePostFields)(post);
        const newPost = await this.model.create(post);
        return newPost;
    }
    async update(post) {
        (0, PostsValidations_1.validatePostFields)(post);
        const postExist = await this.getById(post.id);
        if (!postExist) {
            throw new restify_errors_1.NotFoundError('Post not found!');
        }
        const newPost = await this.model.update(post);
        return newPost;
    }
    async remove(id) {
        const postExist = await this.getById(id);
        if (!postExist) {
            throw new restify_errors_1.NotFoundError('Post not found!');
        }
        await this.model.remove(id);
    }
    async searchByQueryParams(params) {
        if (params.date) {
            (0, PostsValidations_1.validateQueryStringDateFormat)(params.date);
        }
        const posts = await this.model.searchByQueryParams(params);
        return posts;
    }
}
exports.default = PostsServices;
