const { STRING, TEXT, INTEGER, UUID } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: STRING
      }
    });
  };
