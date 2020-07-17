

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
    carrito : function(req, res, next) {
        res.render('carrito');
      }
}

module.exports = controller