const fs = require('fs');
const db = require('../db/models')
var multer  = require('multer')
const {check, validationResult, body } = require('express-validator');


let controller = {
  listado : function(req, res) {
    db.Products.findAll()
    .then(function(products){
      res.render('products', {products:products});
    })
    
  },
  detail : function(req, res, next) {
    res.render('detalle');
  },
  categoria : function(req, res) {
    db.Categories.findAll()
      .then(function(categories){
          return res.render('alta', {categories:categories})
      })
    
  },
 create : function(req, res, next){
    let errors = validationResult(req)
    if(errors.isEmpty()){
        db.Products.create({
          product_name : req.body.nombre,
          price : req.body.precio,
          description : req.body.detalle,
          stock : req.body.stock,
          category_id : req.body.categoria,
          image : req.files[0].filename
        }) 
        res.render("producto_subido");
      }  
      else{
        return res.render("alta", {errors: errors.errors})
      }
    }, 
 /* create : function(req, res, next) {
    let producto = {
      nombre: req.body.nombre,
      detalle: req.body.detalle,
      precio: req.body.precio,
      stock: req.body.stock,
      imagen: req.files[0].filename,
    };
    
   let productsFile = fs.readFileSync('products.json', {encoding : 'utf-8'})
    let products
    if(productsFile == ""){
      products = []
    }
    else{
      products = JSON.parse(productsFile)
    };
    
    products.push(producto)
    productsJson = JSON.stringify(products)
    fs.writeFileSync('products.json', productsJson)
    
    res.render("producto_subido");
  },*/
  carrito : function(req, res, next) {
    res.render('carrito');
  }
   
 }

    
module.exports = controller