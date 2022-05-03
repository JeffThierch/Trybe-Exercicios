import mysql from 'mysql2/promise'
import dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, DB_DATABASE } = process.env;

export default mysql.createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
  host: DB_HOST,
  database: DB_DATABASE
})