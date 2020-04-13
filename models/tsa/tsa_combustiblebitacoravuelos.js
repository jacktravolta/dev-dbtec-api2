module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_combustiblebitacoravuelos', {
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

    id_bitacora_vuelo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    cant_ant_cargar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    cant_cargada: {
      type: DataTypes.STRING,         
      allowNull: true,
    },

    observaciones: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_lugar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    turnos: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_responsable: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    monto: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    n_guia: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_combustible_bitacora_vuelo: { 
      type: DataTypes.STRING,
      allowNull: true,
    },



  });

  return Model;
};

    