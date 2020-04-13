module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_lugares', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    _id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    /*/////////////////////////////////////*/

    cod_lugar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    desc_lugar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    georref_latitud: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    georref_longitud: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    latitud: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    longitud: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_tipo_lugar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_lugar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    


  });

  return Model;
};

    