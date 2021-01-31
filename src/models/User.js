const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            company: DataTypes.STRING, 
            office: DataTypes.STRING, 
            isAdmin: DataTypes.BOOLEAN, 
            password: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'users'
        })
    }
}

module.exports = User