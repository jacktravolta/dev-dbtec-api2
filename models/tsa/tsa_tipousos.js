module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_tipousos', {
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
 
    
    cod_tipo_uso: {
      type: DataTypes.STRING,
      allowNull: true, 
    },


    desc_tipo_uso: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    id_tipo_uso: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

   

  });

  return Model;
};

    