const fs = require('fs');

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
  create : function(req, res, next) {
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
  },
  carrito : function(req, res, next) {
    res.render('carrito');
  }
}

module.exports = controller