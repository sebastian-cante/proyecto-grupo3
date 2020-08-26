module.exports = (sequelize, dataTypes) => {
    const Products = sequelize.define('Products', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        product_name : {
            type : dataTypes.STRING(45),
            allowNull : false,

        },
        price : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,

        },
        description : {
            type : dataTypes.TEXT,
            allowNull : false,
        }      
    },{
        tableName : 'products',
        timestamps : false
    })
    Products.associate = function(models){
        Products.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        })
    }
    Products.associate = function(models){
        Products.belongsToMany(models.Carts, {
            as : "carts",
            through : "carts_products",
            foreignKey : "products_id",
            otherKey : "carts_id",
            timestamps : false
        })
    }
    return Products
}