module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_organizacionaereas', {
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
 
    
    id_organizacion_aerea: {
      type: DataTypes.STRING,
      allowNull: true, 
    },


    cod_asignacion_aerea: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    desc_asignacion_aerea: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

  

  });

  return Model;
};

    