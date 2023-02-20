const http = require("http");

const path= require("path");

const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./route/admin'); 
const shopRoutes = require('./route/shop'); 

const expressHbs = require('express-handlebars');

const routes = require("./routes");

const app = express();

const errorController = require("./controllers/error")

// app.engine("hbs" , expressHbs({extname:'hbs' ,layoutDir:'views/layouts/', defaultLayout:"main-layout"}));
// app.set("view engine" , "hbs");
// app.set("views" , "views"); 

// app.set("view engine" , "pug");
// app.set("views" , "views");

app.set("view engine" , "ejs");
app.set("views" , "views");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , "public")));

app.use("/admin" ,adminData.routes);
app.use(shopRoutes) 

app.use(errorController.get04)

// const server = http.createServer(routes);

const server = http.createServer(app);
// const server = http.createServer(routes.handler);
// console.log(routes.text);

server.listen(3004);

// app.listen(3004);
//for express js no need of server.listen use app.listen