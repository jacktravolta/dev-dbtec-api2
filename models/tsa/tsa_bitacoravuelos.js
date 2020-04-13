module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Tsa_bitacoravuelos', {
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
    id_piloto: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_copiloto: {
      type: DataTypes.STRING, 
      allowNull: true, 
    }, 

    id_tipo_mision: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_matricula: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  

    num_hojavuelo: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    id_solicitante: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_aeronave: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_tipo_uso: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    cod_bitacora_vuelo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    fecha_vuelo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    fecha_registro: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    ciclo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    horas_actuales: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    horas_anteriores: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    horas_ifr: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    horas_vfr: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    cant_partidas: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    cant_aterrizaje: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    observaciones: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    discrepancias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   

    id_bitacora_vuelo: {
      type: DataTypes.STRING,
      allowNull: true,
    },



  });

  return Model;
};

    