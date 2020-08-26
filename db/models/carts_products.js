module.exports = (sequelize, dataTypes) => {
    const Carts_products = sequelize.define('Carts_products', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        quantity : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,

        },
        price : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,

        }
    },{
        tableName : 'carts_products',
        timestamps : false
    })
    Carts_products.associate = function(models){
        Carts_products.hasMany(models.Carts, {
            as: "carts",
            foreignKey: "carts_products_id"
        })
    }
    Carts_products.associate = function(models){
        Carts_products.belongsToMany(models.Products, {
            as : "products",
            through : "product_has_carts_products",
            foreignKey : "carts_products_id",
            otherKey : "products_id",
            timestamps : false
        })
    }
    return Carts_products
}