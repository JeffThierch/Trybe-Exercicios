"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostsServices_1 = __importDefault(require("../services/PostsServices"));
const http_status_codes_1 = require("http-status-codes");
class PostsControllers {
    postServices;
    constructor() {
        this.postServices = new PostsServices_1.default();
    }
    getAll = async (_request, response) => {
        const posts = await this.postServices.getAll();
        return response.status(http_status_codes_1.StatusCodes.OK).json(posts);
    };
    getById = async (request, response) => {
        const { id } = request.params;
        const intID = parseInt(id, 10);
        const post = await this.postServices.getById(intID);
        return response.status(http_status_codes_1.StatusCodes.OK).json(post);
    };
    create = async (request, response) => {
        const { author, category, publicationDate, title } = request.body;
        const newPost = await this.postServices.create({ author, category, publicationDate, title });
        return response.status(http_status_codes_1.StatusCodes.CREATED).json(newPost);
    };
    update = async (request, response) => {
        const { author, category, publicationDate, title } = request.body;
        const { id } = request.params;
        const intID = parseInt(id, 10);
        const newPost = await this.postServices.update({ id: intID, title, author, category, publicationDate });
        return response.status(http_status_codes_1.StatusCodes.OK).json(newPost);
    };
    remove = async (request, response) => {
        const { id } = request.params;
        const intID = parseInt(id, 10);
        await this.postServices.remove(intID);
        return response.status(http_status_codes_1.StatusCodes.OK).json({ message: `Post with id: ${intID} removed with sucess` });
    };
    searchByQueryParams = async (request, response) => {
        const { author, category, date } = request.query;
        const posts = await this.postServices.searchByQueryParams({ author: author || '', category: category || '', date });
        return response.status(http_status_codes_1.StatusCodes.OK).json(posts);
    };
}
exports.default = PostsControllers;
