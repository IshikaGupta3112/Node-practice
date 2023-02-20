// const product=[];

const Product = require("../models/product")

exports.getAddProduct=(req , res, next)=>{
    // res.send('<form action="/admin/products" method="POST"><input type="text" name="title"></input><button type="submit">Add</button></form>')

    // res.sendFile(path.join(__dirname , "../" , 'views' , 'add-product.html'))
    // res.sendFile(path.join(rootDir, "../" , 'views' , 'add-product.html'))

    res.render("add-product" , {docTitle: 'Add Product'});
}

exports.productPost=(req , res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    // product.push({title:req.body.title})
    console.log(product);
    res.redirect("/");
}

exports.productShow =(req , res, next)=>{
    // res.send('<h1>Hello from node js!</h1>')
    // res.sendFile(path.join(__dirname , '../' , 'views' , 'shop.html'));
    const product = Product.fetchAll();
    res.render("shop" , {prods:product , docTitle:"Shop" , hasProds:product.length>0});
}