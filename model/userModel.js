const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/dbConnect');
// const User = sequelize.define(
//   'User',
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//     },
//     email:{
//         type:DataTypes.STRING,
//     }
//   },
//   {
//     tableName:'users'
//   },
// );
class User extends Model {}
User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
        type:DataTypes.STRING
    }

  },
  {
    sequelize, 
    modelName: 'User',
  },
);
console.log(User === sequelize.models.User); 

module.exports = {User}