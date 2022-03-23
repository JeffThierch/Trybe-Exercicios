const connection = require('./connection');

const addProduct = async (name, brand) => {
  try {
    const query = 'INSERT INTO products (name, brand) VALUES (?, ?);'
    const [result] = await connection.query(query, [name, brand]);

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);

    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const query = 'SELECT * FROM products'
    const [rows] = await connection.query(query);

    return rows;
  } catch (err) {
    console.error(err);

    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const query = 'SELECT * FROM products WHERE id = ?'
    const [result] = await connection.query(query, [id]);
    if (result.length === 0) return null

    return result[0];
  } catch (err) {
    console.error(err);

    return process.exit(1);
  }
};

const updateProduct = async (id, name, brand) => {
  try {
    const product = await getById(id);

    if (!product) return {};

    const query = 'UPDATE products SET name = ?, brand = ? WHERE id = ?'

    await connection.query(query, [name, brand, id])

    return true;
  } catch (err) {
    console.error(err);

    return process.exit(1);
  }
};

const excludeProduct = async (id) => {
  try {
    const product = await getById(id);

    if (!product) return {};

    const query = 'DELETE FROM products WHERE id = ?'

    await connection.query(query, [id])

    return product;
  } catch (err) {
    console.error(err);

    return process.exit(1);
  }
};

module.exports = { addProduct, getAll, getById, updateProduct, excludeProduct };