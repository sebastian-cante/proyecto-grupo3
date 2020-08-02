module.exports = (sequelize, dataTypes) => {
    const Adresses = sequelize.define('Adresses', {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        street : {
            type : dataTypes.STRING(45),
            allowNull : false,

        },
        number : {
            type : dataTypes.INTEGER(11),
            allowNull : false,

        },
        city : {
            type : dataTypes.STRING(45),
            allowNull : false,

        },
        province : {
            type : dataTypes.STRING(45),
            allowNull : false
        }       
    },{
        tableName : 'adresses',
        timestamps : false
    })
    return Adresses
}