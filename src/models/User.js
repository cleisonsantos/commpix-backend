const { Model, DataTypes, } = require('sequelize')

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            company_name: DataTypes.STRING, 
            office: DataTypes.STRING, 
            isAdmin: DataTypes.BOOLEAN, 
            password: DataTypes.STRING
        }, {
            connection
        })
    }
}

module.exports = User