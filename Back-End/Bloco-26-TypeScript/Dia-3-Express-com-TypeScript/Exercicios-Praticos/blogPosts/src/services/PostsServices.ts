import connection from "../models/connection";
import PostsModel from "../models/PostsModel";
import IPost from "../interfaces/IPost";
import IEditPost from "../interfaces/IEditPost";
import IQueryParams from "../interfaces/IQueryParams";
import { NotFoundError } from "restify-errors";
import { validatePostFields, validateQueryStringDateFormat } from "./validations/PostsValidations";

export default class PostsServices {
  public model: PostsModel;

  constructor() {
    this.model = new PostsModel(connection);
  }

  async getAll(): Promise<IPost[]> {
    const posts = await this.model.getAll();

    return posts;
  }

  async getById(id: number): Promise<IPost> {
    const post = await this.model.getById(id);

    if(!post) {
      throw new NotFoundError('Post not found!');
    }

    return post;
  }

  async create(post: IPost): Promise<IPost> {
    validatePostFields(post);

    const newPost = await this.model.create(post);

    return newPost;
  }

  async update(post: IEditPost): Promise<IEditPost> {
    validatePostFields(post);

    const postExist = await this.getById(post.id)

    if(!postExist) {
      throw new NotFoundError('Post not found!');
    }

    const newPost = await this.model.update(post);

    return newPost;
  }

  async remove(id: number): Promise<void> {
    const postExist = await this.getById(id)

    if(!postExist) {
      throw new NotFoundError('Post not found!');
    }

    await this.model.remove(id);
  }

  async searchByQueryParams(params: IQueryParams): Promise<IPost[]> {
    if(params.date) {
      validateQueryStringDateFormat(params.date)
    }
    
    const posts = await this.model.searchByQueryParams(params);

    return posts;
  }
}