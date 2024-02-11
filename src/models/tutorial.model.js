const { DataTypes, Model } = require('sequelize');
const sequelize = require('./database.model');

class Tutorial extends Model { }

Tutorial.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  tableName: 'tutoriais',
  modelName: 'Tutorial',
  timestamps: false
});

module.exports = Tutorial;