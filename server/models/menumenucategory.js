'use strict'
module.exports = (sequelize, DataTypes) => {
  var menumenuCategory = sequelize.define(
    'menumenuCategory',
    {
      menuId: DataTypes.INTEGER,
      menucategoryId: DataTypes.INTEGER,
    },
    {}
  )
  menumenuCategory.associate = function(models) {
    // associations can be defined here
  }
  return menumenuCategory
}
