const { STRING, TEXT, INTEGER,  UUID, UUIDV1 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    id: {
      type: UUID,
      defaultValue: UUIDV1,
      primaryKey: true,
    },
    life: {
      type: INTEGER,
    },
    strength: {
      type: INTEGER,
    },
    defense: {
      type: INTEGER,
    },
    speed: {
      type: INTEGER,
    },
    height: {
      type: INTEGER,
    },
    weight: {
      type: INTEGER,
    }
  });
};
