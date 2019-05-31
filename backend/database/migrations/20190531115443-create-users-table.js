module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING
        }
      }, {
        transaction
      }).then(() => {
        return queryInterface.addConstraint('users', ['email'], {
          type: 'unique',
          name: 'users_email_unique',
          transaction
        })
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
