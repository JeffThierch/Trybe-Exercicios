"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    connection;
    constructor(connection) {
        this.connection = connection;
    }
    async getAll() {
        const query = 'SELECT id, name, email FROM Users';
        const [users] = await this.connection.execute(query);
        return users;
    }
    async getById(id) {
        const query = 'SELECT id, name, email FROM Users WHERE id=?';
        const [users] = await this.connection.execute(query, [id]);
        const [user] = users;
        return user;
    }
    async create(user) {
        const { name, email, password } = user;
        const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
        const [{ insertId }] = await this.connection.execute(query, [name, email, password]);
        return { id: insertId, name, email, password };
    }
    async update(id, user) {
        const { name, email, password } = user;
        const query = 'UPDATE Users SET name=?, email=?, password=? WHERE id=?';
        await this.connection.execute(query, [name, email, password, id]);
        return { id, name, email, password };
    }
    async remove(id) {
        const query = 'DELETE FROM Users WHERE id=?';
        await this.connection.execute(query, [id]);
    }
}
exports.default = UserModel;
