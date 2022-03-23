const ProductModel = require('../models/productModel');

const getAll = async () => {
  const products = await ProductModel.getAll();

  return products;
}

const getById = async (id) => {
  const product = await ProductModel.getById(id);

  if(!product) {
    return {error: {code: 404, message: 'Product not found!'}};
  }

  return product;
}

const addProduct = async (name, brand) => {
  if(!name || !brand) {
    return {error: {code: 400, message: 'The fields "name" and "brand" are required!'}};
  }

  const newProduct = await ProductModel.addProduct(name, brand);

  return newProduct;
};

const excludeProduct = async (id) => {
  const deletedProduct = await ProductModel.excludeProduct(id);

  if(!deletedProduct) {
    return {error: {code: 404, message: 'Product not found!'}};
  }

  return deletedProduct;
}

const updateProduct = async (id, name, brand) => {
  if(!id || !name || !brand) {
    return {error: {code: 400, message: 'The fields "name", "brand" and "id" are required!'}}
  }

  const updatedProduct = await ProductModel.updateProduct(id, name, brand);

  if(!updatedProduct) {
    return {error: {code: 404, message: 'Product not found!'}}
  }

  return {}
}

module.exports = {
  getAll,
  getById,
  addProduct,
  excludeProduct,
  updateProduct
}