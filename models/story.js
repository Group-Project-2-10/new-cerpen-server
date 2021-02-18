'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Story.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        notNull: true,
        notEmpty: true,
        len:[4]
      }
    },
    sentences: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        notNull: true,
        notEmpty: true,
        len: [1,100]
      }
    }
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};