const ProductService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await ProductService.getAll();

  res.status(200).json(products);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const product = await ProductService.getById(id);

  if(product.error) {
    return next(product.error);
  }

  return res.status(200).json(product);
};

const addProduct = async (req, res, next) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.addProduct(name, brand);

  if(newProduct.error) {
    return next(newProduct.error);
  }

  return res.status(201).json(newProduct);
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  const products = await ProductService.excludeProduct(id);

  if(products.error) {
    return next(products.error);
  }

  return res.status(200).json(products);
};

const editProduct = async (req, res, next) => {
  const { name, brand } = req.body;
  const { id } = req.params

  const products = await ProductService.updateProduct(id, name, brand);

  if(products.error) {
    return next(products.error);
  }

  return res.status(204).json();
};

module.exports = {
  getAll, 
  getById,
  editProduct,
  deleteProduct,
  addProduct
};