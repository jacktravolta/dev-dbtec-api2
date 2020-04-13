module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_notificaciones', {
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
 
    
    tabla: {
      type: DataTypes.STRING,
      allowNull: true, 
    },


    campo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    alerts: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    estado: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    notifica_encargado: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    


  });

  return Model;
};

    