"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostsModel {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async getAll() {
        const query = 'SELECT * FROM Posts';
        const [posts] = await this.connection.execute(query);
        return posts;
    }
    async getById(id) {
        const query = 'SELECT * FROM Posts WHERE id=?';
        const [posts] = await this.connection.execute(query, [id]);
        const [post] = posts;
        return post;
    }
    async create(post) {
        const { title, author, category, publicationDate } = post;
        const query = 'INSERT INTO Posts (title, author, category, publicationDate ) VALUES (?, ?, ?, ?)';
        const [{ insertId }] = await this.connection.execute(query, [title, author, category, publicationDate]);
        return { id: insertId, title, author, category, publicationDate };
    }
    async update(post) {
        const { id, author, category, publicationDate, title } = post;
        const query = 'UPDATE Posts SET title=?, author=?, category=?, publicationDate=? WHERE id=?';
        await this.connection.execute(query, [title, author, category, publicationDate, id]);
        return { id, title, author, category, publicationDate };
    }
    async remove(id) {
        const query = 'DELETE FROM Posts WHERE id=?';
        await this.connection.execute(query, [id]);
    }
    async searchByQueryParams(params) {
        const { author, category, date } = params;
        console.log(date);
        let query = 'SELECT * FROM Posts WHERE author=? OR category=? OR publicationDate=?';
        if (!date) {
            query = 'SELECT * FROM Posts WHERE author=? OR category=?';
            const [posts] = await this.connection.execute(query, [author, category]);
            return posts;
        }
        const [posts] = await this.connection.execute(query, [author, category, date]);
        return posts;
    }
}
exports.default = PostsModel;
