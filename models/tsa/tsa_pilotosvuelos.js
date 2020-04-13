module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_pilotosvuelos', {
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
 
    
    id_pilotos_vuelo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },


    id_bitacora_vuelo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    id_piloto: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    cod_tipo_piloto: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  
   
    


  });

  return Model;
};

    