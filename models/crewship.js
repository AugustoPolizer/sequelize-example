'use strict';
const Crew = require('./crew')
const Ship = require('./ship')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CrewShip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CrewShip.init({
    CrewId: {
      type: DataTypes.INTEGER,
      references: {
        model: Crew,
        key: 'id'
      }
    },
    ShipId: {
      type: DataTypes.INTEGER,
      references: {
        model: Ship,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'CrewShip',
  });
  return CrewShip;
};