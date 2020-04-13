module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_pasajeroscargabitacoravuelos', {
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


    tipo_pasajero: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    cargo_pasajero: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    nombres_pasajero: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  
    apellido_paterno_pasajero: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    apellido_materno_pasajero: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    tipo_tripulacion: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    categoria_pasajego: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    peso: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    id_pasajerocarga_bitacora_vuelo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },



  });

  return Model;
};

    