const Sequelize = require('sequelize')

const connection = new Sequelize('dhoverflow', 'root', 'Update1245', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection