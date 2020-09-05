module.exports = (sequelize, dataTypes) => {
    const Categories = sequelize.define('Categories', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false,
        }    
    },{
        tableName : 'categories',
        timestamps : false
    })
    Categories.associate = function(models){
        Categories.hasMany(models.Products, {
            as: "products",
            foreignKey: "category_id"
        })
    }
    return Categories
}