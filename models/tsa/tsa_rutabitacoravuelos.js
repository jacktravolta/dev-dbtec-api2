module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_rutabitacoravuelos', {
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


    fecha_salida: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    hora_salida: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    min_salida: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  

    fecha_llegada: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
   

    hora_llegada: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    altitud_aterrizaje: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    horas_ifr: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    horas_vrf: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    ciclos: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    horas: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    kilometros: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    
    id_origen: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    id_destino: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    id_aeronave: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    cod_bitacora_vuelo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    min_llega: {
      type: DataTypes.STRING,
      allowNull: true, 
    },



  });

  return Model;
};

    