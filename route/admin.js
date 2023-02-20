const path = require("path");

const express = require('express');

const router = express.Router(); 
 
const rootDir = require("../util/path")

const productController = require("../controllers/productsController");
//we can use app.post and app.get instead of app.use to limit to post and get request respectively

router.get('/add-products',productController.getAddProduct);

router.post('/products' ,productController.productPost);

exports.routes = router ;