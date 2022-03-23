const ProductService = require('../models/productModel');

const getAll = async (_req, res) => {
  const products = await ProductService.getAll();

  res.status(200).json(products);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const product = await ProductService.getById(id);

  if(product.error) {
    return product.error;
  }

  return res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.addProduct(name, brand);

  if(newProduct.error) {
    return newProduct.error;
  }

  return res.status(201).json(newProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const products = await ProductService.excludeProduct(id);

  return res.status(200).json(products);
};

const editProduct = async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params

  const products = await ProductService.updateProduct(id, name, brand);

  return res.status(200).json(products);
};

module.exports = {
  getAll, 
  getById,
  editProduct,
  deleteProduct,
  addProduct
};