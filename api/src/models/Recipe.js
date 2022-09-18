const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    hs:{
      type: DataTypes.INTEGER,
      default: 0,
      validate:{
        min:0,
        max:100
      }
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    image: {
      type: DataTypes.STRING,
    },
  },{ timestamps: false });
};