module.exports = (sequelize, dataTypes) => {
    const Carts = sequelize.define('Carts', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        total : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,

        }  
    },{
        tableName : 'carts',
        timestamps : false
    })
    Carts.associate = function(models){
        Carts.belongsTo(models.Users, {
            as: "users",
            foreignKey: "users_id"
        })
    }
    Carts.associate = function(models){
        Carts.belongsTo(models.Adresses, {
            as: "adresses",
            foreignKey: "adresses_id"
        })
    }
    Carts.associate = function(models){
        Carts.belongsTo(models.Carts_products, {
            as: "carts_products",
            foreignKey: "carts_products_id"
        })
    }
    return Carts
}