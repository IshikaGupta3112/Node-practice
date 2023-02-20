const path = require("path");

const express = require('express');

const router = express.Router(); 

// const adminData = require("../route/admin");

const productController = require("../controllers/productsController");

router.get('/' ,productController.productShow);


module.exports = router ;