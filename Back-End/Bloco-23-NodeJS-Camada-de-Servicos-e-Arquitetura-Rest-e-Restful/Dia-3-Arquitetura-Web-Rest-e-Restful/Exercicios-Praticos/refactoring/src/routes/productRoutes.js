const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router.get('/', productController.getAll);
router.post('/', productController.addProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.editProduct)
router.get('/:id', productController.getById);


module.exports = router