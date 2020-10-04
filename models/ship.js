'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Ship.belongsToMany(models.Crew, { through: 'CrewShip' })
    }
  };
  Ship.init({
    name: DataTypes.STRING,
    use: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ship',
  });
  return Ship;
};