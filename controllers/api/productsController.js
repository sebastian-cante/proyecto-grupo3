const db = require('../../db/models')

let controller = {
    list : function(req, res){
        db.Products.findAll({
            include: [{association: 'categories'}, {association: 'carts_products'}]
        })
            .then(function(products){
                for(let i = 0; i < products.length; i++){
                    products[i].setDataValue('endpoint', '/api/products/' + products[i].id)
                }
                let response = {
                    meta: {
                        status: 200,
                        count: products.length,
                        url: /api/products
                    },
                    data: {
                        products
                    }
                }
                res.json(response)
            })
    },
    find : function(req, res){
        db.Products.findByPk(req.params.id)
            .then(function(product){
                let response = {
                    productName: product.product_name,
                    stock: product.stock,
                    price: product.price,
                    description: product.description,
                    image: product.image
                }
                res.json(response)
            })

    }
}
module.exports = controller