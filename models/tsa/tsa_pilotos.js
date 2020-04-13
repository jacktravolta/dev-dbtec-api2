module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_pilotos', {
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
 
    
    cod_piloto: {
      type: DataTypes.STRING,
      allowNull: true, 
    },


    nom_piloto: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    cargo_pasajero: {
      type: DataTypes.STRING, 
      allowNull: true, 
    },

    ape_piloto: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  
    fec_nacimiento: {
      type: DataTypes.STRING,
      allowNull: true, 
    },

    id_piloto: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    


  });

  return Model;
};

    