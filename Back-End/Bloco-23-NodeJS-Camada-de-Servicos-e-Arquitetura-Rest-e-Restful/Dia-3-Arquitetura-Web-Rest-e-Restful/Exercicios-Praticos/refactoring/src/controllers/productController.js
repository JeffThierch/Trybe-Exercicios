const ProductModel = require('../models/productModel');

const getAll = async (_req, res) => {
  const products = await ProductModel.getAll();

  res.send(products);
};

const getById = async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.send(product);
};

const addProduct = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
};

const deleteProduct = async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
};

const editProduct = async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
};

module.exports = {
  getAll, 
  getById,
  editProduct,
  deleteProduct,
  addProduct
};