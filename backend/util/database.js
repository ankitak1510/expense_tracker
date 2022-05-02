const Sequelize = require('sequelize');

// const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,
const sequelize = new Sequelize("expense_tracker", "root", "12345678", {
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = sequelize