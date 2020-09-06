const fs = require('fs');
const db = require('../db/models')
const {check, validationResult, body } = require('express-validator');


let controller = {
  products : function(req, res, next) {
    res.render('products');
  },
  detail : function(req, res, next) {
    res.render('detalle');
  },
  alta : function(req, res, next) {
    res.render('alta');
  },
 create : function(req, res, next){
    let errors = validationResult(req)
    if(errors.isEmpty()){
        db.Products.create({
          product_name : req.body.nombre,
          price : req.body.precio,
          description : req.body.detalle,
          stock : req.body.stock,
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