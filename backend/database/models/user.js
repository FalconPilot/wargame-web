module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    paranoid: true,
    underscored: true,
    freezeTableName: false
  })

  return User
}
