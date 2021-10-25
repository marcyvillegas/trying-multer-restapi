const Product = require('../models/products.model')
const { request } = require('express');
const path = require('path');
const upload = require('../middleware/upload');

/* If you remember on the 'products.routes' we required a ('express-promise-router').
in this page you can see that we are not writing the try and catch, that is because of the 
package express-promise-router */

module.exports = {

    // GET - Existing Products only
    existing: async(req, res) => {
        const products = await Product.find({
            Product_Type: "Existing"
        }).populate("Indicator");
        res.status(200).json(products);        
    },

    // GET - Archive Products only
    archive: async(req, res) => {
        const products = await Product.find({
            Product_Type: "Archive"
        }).populate("Category").populate("Indicator");
        res.status(200).json(products);        
    },

    //POST request for ProductController.newProduct
    newProduct: async (req, res) => {
        const newProduct = new Product({
            Product_Img:  req.file.path,
            Product_Type: req.body.Product_Type,
            Product_Name: req.body.Product_Name,
            Retail_Price: req.body.Retail_Price,
            Unit_Price: req.body.Unit_Price,
            Item_Sold: req.body.Item_Sold,
            Stock: req.body.Stock,
            Category: req.body.Category,
            Date_added: req.body.Date_added,
            Indicator: req.body.Indicator
        });
        console.log(req.file.path)
        const products = await newProduct.save()
        res.status(201).json(products);
    },

    //GET request for '/:productId' or ProductController.getProduct
    getProduct: async (req, res) => {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        res.status(200).json(product);
    },

    //PUT request for ProductController.replaceProduct
    replaceProduct: async (req, res) => {
        //Requires that req.body must contain all the fields
        const { productId } = req.params;
        const newProduct = req.body;
        
        const result = await Product.findByIdAndUpdate(productId, newProduct);
        console.log('result', result);
        res.status(200).json({success: true});
    },

    //PATCH request for ProductController.updateProduct
    updateProduct: async (req, res) => {
        //req.body must contain  some of the the fields 
        const { productId } = req.params;
        const newProduct = req.body;
        
        const result = await Product.findByIdAndUpdate(productId, newProduct);
        console.log('result', result);
        res.status(200).json({success: true});
    },

    getProductCategory: async (req, res) => {
        const { productId } = req.params;
        const product = await Product.findById(productId); //query; 
        console.log('product', product);
    },

    newProductCategory: async (req, res) => {
        const { productId } = req.params;
        //create a new category
        const newCategory = new Category(req.body);
        console.log('newCategory', newCategory);
        //Get Product
        const product = await Product.findById(productId) 
        //assign category of a product
        newCategory.product = product;
        //save the category
        await newCategory.save();
        //add category to the product
        product.category.push(newCategory);
        //save the product 
        await product.save();
        res.status(201).json(newCategory)
    }
};
