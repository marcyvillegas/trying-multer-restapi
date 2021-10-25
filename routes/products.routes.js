const express = require('express');
// vv same as express.Router(); but installled this package to let us not write try and catch
const router = require('express-promise-router')();
const Product = require('../models/products.model');
const ProductController = require('../controllers/product.controllers');//Imports the 'product.controllers.js' and assigns it with ProductController that will let us use it here. Ex: 'ProductController.newProduct'. Note that newProduct is in the controllers for product too for it to work.

const upload = require('../middleware/upload'); // imports the upload middleware

/* this methods or 'calls' below are connected to the '../models/products.controllers.js'; 
check it to better understand what is happening here */

// EXISTING PRODUCTS
router.route('/all')
  .get(ProductController.existing) //this will return all the EXISTING products
  .get(ProductController.archive) //this will return all the ARCHIVE products
  .post(upload.imageUpload.single('Product_Img'), ProductController.newProduct) //this will submit a product using POST method

// ARCHIVE PRODUCTS
router.route('/archive')
  .get(ProductController.archive) //this will return all the ARCHIVE products 

router.route('/:productId') //this is the location in the url so /:productId contains a product with a specified ID 
  .get(ProductController.getProduct) //this will get a product with a specified ID 
  .put(ProductController.replaceProduct) // will replace a product; all fields must be present
  .patch(ProductController.updateProduct) //will update a product; some field may be be present
// .delete()

router.route('/:productId/category')
  .get(ProductController.getProductCategory)
  .post(ProductController.newProductCategory);

module.exports = router;