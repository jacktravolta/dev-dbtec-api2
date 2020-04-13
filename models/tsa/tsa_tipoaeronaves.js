module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_tipoaeronaves', {
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
 
    
    cod_tipo_aeronave: {
      type: DataTypes.STRING,
      allowNull: true, 
    },


    desc_tipo_aeronave: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    check_tiene_alas: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    check_tiene_turbina: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    check_tiene_motor: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    check_tiene_aspas: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    id_tipo_aeronave: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },



  });

  return Model;
};

    