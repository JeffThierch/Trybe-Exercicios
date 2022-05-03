import { Request, Response } from "express";
import PostsServices from "../services/PostsServices";
import { StatusCodes } from 'http-status-codes'
import IPost from "../interfaces/IPost";
import IEditPost from "../interfaces/IEditPost";
import IQueryParams from "../interfaces/IQueryParams";

export default class PostsControllers {
  private postServices: PostsServices;

  constructor() {
    this.postServices = new PostsServices();
  }

  getAll = async (_request: Request, response: Response): Promise<Response> => {
    const posts = await this.postServices.getAll();

    return response.status(StatusCodes.OK).json(posts);
  }

  getById = async (request: Request, response: Response): Promise<Response>  => {
    const { id } = request.params;

    const intID = parseInt(id, 10);

    const post = await this.postServices.getById(intID);

    return response.status(StatusCodes.OK).json(post);
  }

  create = async (request: Request, response: Response): Promise<Response> => {
    const { author, category, publicationDate, title } = request.body as IPost;

    const newPost = await this.postServices.create({ author, category, publicationDate, title });

    return response.status(StatusCodes.CREATED).json(newPost);
  }

  update = async (request: Request, response: Response): Promise<Response> => {
    const { author, category, publicationDate, title } = request.body as IPost;
    const { id } = request.params;

    const intID = parseInt(id, 10);

    const newPost = await this.postServices.update({id: intID, title, author, category, publicationDate});

    return response.status(StatusCodes.OK).json(newPost);
  }

  remove = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;

    const intID = parseInt(id, 10);

    await this.postServices.remove(intID);

    return response.status(StatusCodes.OK).json({message: `Post with id: ${intID} removed with sucess`});
  }
  searchByQueryParams = async (request: Request, response: Response): Promise<Response> => {
    const { author, category, date } = request.query as IQueryParams;

    const posts = await this.postServices.searchByQueryParams({author: author || '', category: category || '', date});

    return response.status(StatusCodes.OK).json(posts);
  }
}