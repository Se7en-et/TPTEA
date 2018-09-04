'use strict'
module.exports = (sequelize, DataTypes) => {
  var menuCategory = sequelize.define(
    'menuCategory',
    {
      name: DataTypes.STRING,
      desc: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {}
  )
  menuCategory.associate = function(models) {
    // associations can be defined here
    menuCategory.belongsToMany(models.Menu, {through: 'MenuMenuCategory', foreignHey: 'menucategoryId'})
  }
  return menuCategory
}
