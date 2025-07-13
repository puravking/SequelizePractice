const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    }
  },
  {
    tableName:'users'
  },
);
console.log(User === sequelize.models.User); 

module.exports = {User}