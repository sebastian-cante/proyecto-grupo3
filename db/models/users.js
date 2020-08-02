module.exports = (sequelize, dataTypes) => {
    const Users = sequelize.define('Users', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        user_name : {
            type : dataTypes.STRING(45),
            allowNull : false,

        },
        email : {
            type : dataTypes.STRING(45),
            allowNull : false,

        },
        password : {
            type : dataTypes.STRING(45),
            allowNull : false,

        }       
    },{
        tableName : 'users',
        timestamps : false
    })
    Users.associate = function(models){
        Users.hasMany(models.Carts, {
            as: "carts",
            foreignKey: "users_id"
        })
    }
    return Users
}