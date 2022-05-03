import connection from "../models/connection";
import PostsModel from "../models/PostsModel";
import IPost from "../interfaces/IPost";
import IEditPost from "../interfaces/IEditPost";
import IQueryParams from "../interfaces/IQueryParams";

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

    return post;
  }

  async create(post: IPost): Promise<IPost> {
    const newPost = await this.model.create(post);

    return newPost;
  }

  async update(post: IEditPost): Promise<IEditPost> {
    const newPost = await this.model.update(post);

    return newPost;
  }

  async searchByQueryParams(params: IQueryParams): Promise<IPost[]> {
    const posts = await this.model.searchByQueryParams(params);

    return posts;
  }
}